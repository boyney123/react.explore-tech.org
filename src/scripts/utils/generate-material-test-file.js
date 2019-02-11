const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const dir = require('node-dir')

const materialsPath = path.resolve(__dirname, '../../../src/materials')

const script = async () => {
  const allMaterials = []

  dir.readFiles(
    materialsPath,
    {
      match: /.md$/,
    },
    async function(err, content, filename, next) {
      if (err) throw err

      const data = fm(content)

      allMaterials.push({
        filename,
        data,
      })

      next()
    },
    function(err, files) {
      if (err) throw err
      console.log('Done!')
      fs.writeFileSync(
        path.join(__dirname, '../../../tests/materials.json'),
        JSON.stringify(allMaterials, null, 4)
      )
    }
  )
}

script()
