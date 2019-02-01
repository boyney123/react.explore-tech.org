const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const dir = require('node-dir')

/**
 * - Loop around all the mark down files
 * - Create screen shots for each one
 * - Render them on the main page
 * - Have sub sections?
 *
 * SubSections
 * - Server Side Rendered
 * - CSS
 * - Tutorials
 * - Advacned Tutorials
 *
 */

const script = async () => {
  try {
    const filePath = path.resolve(__dirname, '../materials')

    dir.readFiles(
      filePath,
      {
        match: /.md$/,
      },
      async function(err, content, filename, next) {
        if (err) throw err

        const data = fm(content)
        const { attributes: { url } = {} } = data

        // Hack change this....
        const filePath = filename.split('/')
        const name = filePath.pop()
        const dir = filePath.join('/')

        const browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        })
        const page = await browser.newPage()

        page.setViewport({ width: 1400, height: 1080 })

        console.log(`Getting screenshot for ${url}`)

        await page.goto(url)

        const width = await page.evaluate(() => {
          return document.body.clientWidth
        })

        await page.screenshot({
          path: path.resolve(dir, 'screenshot.png'),
        })

        await browser.close()

        console.log(`✅ Successfully Collected screen shot for ${name}`)
        next()
      },
      function(err, files) {
        if (err) throw err
        console.log('finished reading files:', files)
      }
    )

    return
    /**
     * Loop through all folders and items.
     */

    const file = path.join(__dirname, '../tutorials/page1.md')
    const data = await fs.readFileSync(file, 'utf8')

    const { attributes: { url } = {} } = fm(data)

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    page.setViewport({ width: 1980, height: 1080 })

    await page.goto(url)

    const width = await page.evaluate(() => {
      return document.body.clientWidth
    })

    console.log(width)

    await page.screenshot({
      path: './src/images/screenshots/page1.png',
    })

    await browser.close()
  } catch (error) {
    console.log(error)
  }
}

script()
