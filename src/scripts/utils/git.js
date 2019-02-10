/**
 * Taken from https://github.com/all-contributors/all-contributors-cli/blob/1f2686baa634e81a133bd3eab0ebf2634b9b0d8e/src/util/git.js
 */

const path = require('path')
const spawn = require('child_process').spawn
const _ = require('lodash/fp')
const pify = require('pify')
const chalk = require('chalk')

const commitTemplate = 'Added new material: @<%= url %>'

const spawnGitCommand = pify((args, cb) => {
  const git = spawn('git', args)
  const bufs = []
  git.stderr.on('data', buf => bufs.push(buf))
  git.on('close', code => {
    if (code) {
      const msg =
        Buffer.concat(bufs).toString() ||
        `git ${args.join(' ')} - exit code: ${code}`
      cb(new Error(msg))
    } else {
      cb(null)
    }
  })
})

function commit(options = {}, data = { url: 'test.com' }) {
  return spawnGitCommand(['add', '.']).then(async () => {
    const commitMessage = _.template(options.commitTemplate || commitTemplate)(
      data
    )

    await spawnGitCommand(['commit', '-m', commitMessage])

    console.log(chalk.green('Git message and commit generated.'))
  })
}

module.exports = {
  commit,
}
