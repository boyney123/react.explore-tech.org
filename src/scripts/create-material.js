const request = require('request-promise')
const urljoin = require('url-join')
const path = require('path')
const puppeteer = require('puppeteer')
const fs = require('fs')

const transformAndWriteToFile = require('json-to-frontmatter-markdown')

const screenshot = async (url, dir) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  page.setViewport({ width: 1400, height: 1080 })

  await page.goto(url)

  const width = await page.evaluate(() => {
    return document.body.clientWidth
  })

  await page.screenshot({
    path: path.resolve(dir, 'screenshot.png'),
  })

  console.log(`Created screenshot for ${url}`)

  await browser.close()
}

const getReadme = async url => {
  const readme = await request({
    url: urljoin('https://api.github.com/repos', url, 'readme'),
    headers: {
      'user-agent': 'All-things',
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    json: true,
  })

  const { content = '' } = readme
  return Buffer.from(content, 'base64')
}

const getRelease = async url => {
  try {
    const release = await request({
      url: urljoin('https://api.github.com/repos', url, 'releases/latest'),
      headers: {
        'user-agent': 'All-things',
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      json: true,
    })

    const { tag_name, name, created_at, html_url } = release
    return Promise.resolve({ tag_name, name, created_at, html_url })
  } catch (error) {
    return Promise.resolve({})
  }
}

const script = async () => {
  try {
    const category = process.argv[2]
    const repo = process.argv[3]

    const urlParts = repo.split('github.com')
    const repoName = urlParts[1]

    const data = await request({
      url: urljoin('https://api.github.com/repos', repoName),
      headers: {
        'user-agent': 'All-things',
        Accept: 'application/vnd.github.mercy-preview+json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      json: true,
    })

    const readmeData = await getReadme(repoName)
    const {
      tag_name,
      name: release_name,
      created_at,
      html_url: release_url,
    } = await getRelease(repoName)

    const {
      name,
      html_url,
      description,
      homepage,
      language,
      stargazers_count,
      watchers_count,
      license,
      topics = [],
      owner: { login, avatar_url, html_url: author_github_url } = {},
    } = data

    const newFilePath = path.resolve(__dirname, '../materials/', category, name)

    await transformAndWriteToFile.default({
      frontmatterMarkdown: {
        frontmatter: [
          {
            path: `/materials/${name}`,
            title: name,
            url: homepage || html_url,
            github_url: html_url,
            author: {
              name: login,
              avatar: avatar_url,
              github_url: author_github_url,
            },
            watchers_count,
            stargazers_count,
            img: './screenshot.png',
            tags: topics,
            subtitle: description,
            latestRelease: {
              tag_name,
              name: release_name,
              url: release_url,
              created_at,
            },
          },
        ],
        body: `
![alt text](screenshot.png)

${readmeData}
        `,
      },
      path: newFilePath,
      fileName: `${name}.md`,
    })

    console.log(homepage)

    // MOve this next bit
    await screenshot(homepage || html_url, newFilePath)

    //Fix the doublequote problem....
    const newFile = await fs.readFileSync(path.join(newFilePath, `${name}.md`))
    const converetedIntoSingleQuotes = newFile.toString().replace(/"/g, "'")
    await fs.writeFileSync(
      path.join(newFilePath, `${name}.md`),
      converetedIntoSingleQuotes
    )
  } catch (error) {
    console.log(error)
  }
}

script()
