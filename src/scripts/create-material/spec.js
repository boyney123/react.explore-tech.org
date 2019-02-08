import script from './'
import nock from 'nock'
import fs from 'fs-extra'
import path from 'path'
import fm from 'front-matter'
import puppeteer from 'puppeteer'
import mockRepoData from './test-data/repo.json'
import mockReadmeData from './test-data/readme.json'
import mockReleaseData from './test-data/release.json'

nock.disableNetConnect()

nock('https://api.github.com')
  .persist()
  .get('/repos/boyney123/react.explore-tech.org')
  .reply(200, mockRepoData)
  .persist()
  .get('/repos/boyney123/react.explore-tech.org/readme')
  .reply(200, mockReadmeData)
  .persist()
  .get('/repos/boyney123/react.explore-tech.org/releases/latest')
  .reply(200, mockReadmeData)

let exit

const scriptArgs = [
  '_',
  '_',
  'Tutorials',
  'https://github.com/boyney123/react.explore-tech.org',
]
describe('create-material', () => {
  beforeEach(() => {
    exit = jest.spyOn(process, 'exit').mockImplementation(number => number)
  })

  afterEach(() => {
    exit.mockClear()
  })

  describe('script exits', () => {
    it('when  no category is given as an argument to the script', async () => {
      const result = await script([''])
      expect(exit).toHaveBeenCalledWith(1)
    })

    it('when no url is given as an argument to the script', async () => {
      const result = await script(['_', '_', 'Components'])
      expect(exit).toHaveBeenCalledWith(1)
    })

    it('when given category is unknown', async () => {
      const result = await script([
        '_',
        '_',
        'ReallyRandomUnsupportedCategory',
        'https://github.com/boyney123/react.explore-tech.org',
      ])
      expect(exit).toHaveBeenCalledWith(1)
    })

    it('when the script when given url is not a GitHub url', async () => {
      const result = await script([
        '_',
        '_',
        'Tutorials',
        'https://www.youtube.com',
      ])
      expect(exit).toHaveBeenCalledWith(1)
    })
  })

  describe('markdown file', () => {
    it('takes all the data from GitHub and formats it into a markdown and converts all double quotes into single quotes', async () => {
      const result = await script(scriptArgs)
      const data = await fs.readFileSync(
        path.join(
          __dirname,
          '/tmp/Tutorials/react.explore-tech.org/react.explore-tech.org.md'
        ),
        'utf8'
      )

      const expectedResult = {
        path: '/materials/react.explore-tech.org',
        type: 'GitHub',
        img: './screenshot.png',
        material: {
          title: 'react.explore-tech.org',
          url: 'homepage.com',
          github_url: 'https://github.com/boyney123/react.explore-tech.org',
          subscribers_count: '79',
          stargazers_count: '5258',
          tags: [''],
          subtitle: 'Find all things React.',
          clone_url: 'https://github.com/boyney123/react.explore-tech.org.git',
          ssh_url: 'git@github.com:boyney123/react.explore-tech.org.git',
          pushed_at: '2019-02-06T18:07:17Z',
          updated_at: '2019-02-08T08:20:12Z',
          author: {
            name: 'boyney123',
            avatar: 'https://avatars0.githubusercontent.com/u/1500684?v=4',
            github_url: 'https://github.com/boyney123',
          },
          latestRelease: {
            tag_name: null,
            name: 'README.md',
            url:
              'https://github.com/boyney123/react.explore-tech.org/blob/master/README.md',
            created_at: null,
          },
        },
      }

      const content = fm(data)
      expect(content.attributes).toEqual(expectedResult)

      fs.removeSync(path.join(__dirname, '/tmp'))
    })
  })

  describe('GitHub Requests', () => {
    describe('repo data', () => {
      it('makes a request to get the repo information from a given repo url', async () => {
        const result = await script(scriptArgs)
        console.log(nock)
      })
      it('exits the process if the request fails', () => {})
    })

    describe('repo readme', () => {
      it('makes a request to get the given repo readme from GitHub', () => {})
      it('exits the process if the request fails', () => {})
    })

    describe('repo latest release', () => {
      it('makes a request to get the latest release from GitHub', () => {})
      it('exits the process if the request fails', () => {})
    })
  })

  describe('screenshot', () => {
    it('sets up puppeteer and takes a screen shot of the given repos homepage when its defined', async () => {
      const result = await script(scriptArgs)
      expect(puppeteer._browser.newPage).toHaveBeenCalled()
      expect(puppeteer._page.setViewport).toHaveBeenCalledWith({
        width: 1400,
        height: 1080,
      })
      expect(puppeteer._page.goto).toHaveBeenCalledWith('homepage.com')
      expect(puppeteer._page.screenshot).toHaveBeenCalledWith({
        path: path.join(
          __dirname,
          'tmp/Tutorials/react.explore-tech.org/screenshot.png'
        ),
      })
    })

    it('sets up puppeteer and takes a screen shot of the given repos github page when homepage is not defined', async () => {
      const testData = {
        ...mockRepoData,
      }

      delete testData['homepage']

      nock('https://api.github.com')
        .get('/repos/boyney123/react.explore-tech-no-homepage.org')
        .reply(200, testData)
        .get('/repos/boyney123/react.explore-tech-no-homepage.org/readme')
        .reply(200, mockReadmeData)
        .get(
          '/repos/boyney123/react.explore-tech-no-homepage.org/releases/latest'
        )
        .reply(200, mockReadmeData)

      const result = await script([
        '_',
        '_',
        'Tutorials',
        'https://github.com/boyney123/react.explore-tech-no-homepage.org',
      ])

      expect(puppeteer._page.goto).toHaveBeenCalledWith(
        'https://github.com/boyney123/react.explore-tech.org'
      )
    })

    it('if the screen shot fails then the material is removed from the file system', async () => {
      puppeteer._page.goto.mockImplementation(() => Promise.reject())
      const result = await script(scriptArgs)
      expect(exit).toHaveBeenCalledWith(1)
    })
  })
})
