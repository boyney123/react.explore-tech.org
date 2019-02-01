const request = require('request-promise')
const urljoin = require('url-join')
const path = require('path')
const puppeteer = require('puppeteer')

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

const script = async () => {
  try {
    const category = process.argv[2]
    const repo = process.argv[3]

    const urlParts = repo.split('github.com')

    const data = await request({
      url: urljoin('https://api.github.com/repos', urlParts[1]),
      headers: {
        'user-agent': 'All-things',
      },
      json: true,
    })

    const {
      name,
      html_url,
      description,
      homepage,
      language,
      license,
      owner: { login } = {},
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
            author: login,
            img: './screenshot.png',
            tags: ['css', 'react'],
            subtitle: description,
          },
        ],
        body: '![alt text](screenshot.png)',
      },
      path: newFilePath,
      fileName: `${name}.md`,
    })

    console.log(homepage)

    // MOve this next bit
    await screenshot(homepage || html_url, newFilePath)
  } catch (error) {
    console.log(error)
  }
}

script()
