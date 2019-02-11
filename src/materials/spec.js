const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const dir = require('node-dir')

const materials = require('../../tests/materials.json')

describe('Materials', () => {
  materials.forEach(material => {
    it(`${material.filename} should have all required frontmatter`, () => {
      const { data: { attributes, body } = {} } = material

      expect(attributes.path).toBeDefined()
      expect(attributes.type).toBeDefined()
      expect(attributes.img).toBeDefined()
      expect(attributes.material).toBeDefined()

      expect(attributes.material.title).toBeDefined()
      expect(attributes.material.url).toBeDefined()
      expect(attributes.material.github_url).toBeDefined()
      expect(attributes.material.subscribers_count).toBeDefined()
      expect(attributes.material.stargazers_count).toBeDefined()

      expect(attributes.material.tags).toBeDefined()
      expect(attributes.material.tags.length > 0).toEqual(true)

      expect(attributes.material.subtitle).toBeDefined()
      expect(attributes.material.clone_url).toBeDefined()
      expect(attributes.material.ssh_url).toBeDefined()
      expect(attributes.material.pushed_at).toBeDefined()
      expect(attributes.material.updated_at).toBeDefined()

      expect(attributes.material.author.name).toBeDefined()
      expect(attributes.material.author.avatar).toBeDefined()
      expect(attributes.material.author.github_url).toBeDefined()

      expect(attributes.material.latestRelease).toBeDefined()

      expect(body).toBeDefined()
    })
  })
})
