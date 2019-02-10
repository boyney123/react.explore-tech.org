require('dotenv').config()
const request = require('request-promise')
const urljoin = require('url-join')
const path = require('path')
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
const chalk = require('chalk')

const transformAndWriteToFile = require('json-to-frontmatter-markdown')

import { siteMetadata } from '../../../gatsby-config'

const buildGitHubRequest = (repo, path = '') => {
  const headers = {
    'user-agent': 'All-things',
    Accept: 'application/vnd.github.mercy-preview+json',
  }
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
  }
  return {
    url: urljoin('https://api.github.com/repos', repo, path),
    headers,
    json: true,
  }
}

const screenshot = async (url, dir) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    page.setViewport({ width: 1400, height: 1080 })

    await page.goto(url)

    await page.screenshot({
      path: path.resolve(dir, 'screenshot.png'),
    })

    console.log(`Created screenshot for ${url}`)

    await browser.close()
  } catch (error) {
    console.log(error)
    throw Error('Failed to capture screenshot')
  }
}

const getReadme = async repo => {
  const readme = await request(buildGitHubRequest(repo, 'readme'))

  const { content = '' } = readme
  return Buffer.from(content, 'base64')
}

const getRelease = async repo => {
  try {
    const release = await request(buildGitHubRequest(repo, 'releases/latest'))

    const { tag_name, name, created_at, html_url } = release
    return Promise.resolve({ tag_name, name, created_at, html_url })
  } catch (error) {
    return Promise.resolve({})
  }
}

const script = async _args => {
  const args = _args || process.argv
  const category = args[2]
  const repo = args[3]
  const directory =
    process.env.NODE_ENV === 'test' ? './tmp' : '../../materials'

  if (!category || !repo) {
    return process.exit(1)
  }

  const { categories = {} } = siteMetadata

  if (!categories[category]) {
    console.log(
      chalk.red(
        'Please use a supported Category type. If you want to create a new Category please check the documentation.'
      )
    )
    return process.exit(1)
  }

  const newDirectory = path.resolve(__dirname, directory, category)

  if (repo.indexOf('github.com') === -1) {
    console.log(chalk.red('Please provide a valid GitHub Url.'))
    return process.exit(1)
  }

  try {
    const urlParts = repo.split('github.com')
    const repoName = urlParts[1]

    const data = await request(buildGitHubRequest(repoName))

    const readmeData = await getReadme(repoName)

    const {
      tag_name = null,
      name: release_name = null,
      created_at = null,
      html_url: release_url = null,
    } = await getRelease(repoName)

    const {
      name,
      html_url,
      description,
      homepage,
      language,
      stargazers_count,
      subscribers_count,
      license,
      clone_url,
      ssh_url,
      pushed_at = null,
      updated_at = null,
      topics,
      owner: { login, avatar_url, html_url: author_github_url } = {},
    } = data

    const newFilePath = path.join(newDirectory, name)

    await transformAndWriteToFile.default({
      frontmatterMarkdown: {
        frontmatter: [
          {
            path: `/materials/${name}`,
            type: 'GitHub',
            img: './screenshot.png',
            material: {
              title: name,
              url: homepage || html_url,
              github_url: html_url,
              subscribers_count,
              stargazers_count,
              // topics cannot be read if 0?
              tags: !topics || topics.length === 0 ? [''] : topics,
              subtitle: description,
              clone_url,
              ssh_url,
              pushed_at,
              updated_at,
              author: {
                name: login,
                avatar: avatar_url,
                github_url: author_github_url,
              },
              latestRelease: {
                tag_name,
                name: release_name,
                url: release_url,
                created_at,
              },
            },
          },
        ],
        body: readmeData,
      },
      path: newFilePath,
      fileName: `${name}.md`,
    })

    // MOve this next bit
    await screenshot(homepage || html_url, newFilePath)

    // Hack to fix double quote problems. Markdown files need single quotes for gatsby???
    const newFile = await fs.readFileSync(path.join(newFilePath, `${name}.md`))
    const converetedIntoSingleQuotes = newFile.toString().replace(/"/g, "'")
    await fs.writeFileSync(
      path.join(newFilePath, `${name}.md`),
      converetedIntoSingleQuotes
    )
  } catch (error) {
    console.log(error)
    console.log(chalk.red(`Failed to create material for ${category}: ${repo}`))
    return process.exit(1)
  }
}

if (process.env.NODE_ENV !== 'test') {
  script()
}

module.exports = script
