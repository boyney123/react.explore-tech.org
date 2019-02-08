const old = jest.fn().mockImplementation(() => ({
  close: jest.fn().mockImplementation(() => Promise.resolve()),
  newPage: jest.fn().mockImplementation(() =>
    Promise.resolve({
      setViewport: jest.fn(),
      goto: jest.fn(),
      evaluate: jest.fn().mockImplementation(() => Promise.resolve()),
      screenshot: jest.fn().mockImplementation(() => Promise.resolve()),
    })
  ),
}))

const page = {
  setViewport: jest.fn(),
  goto: jest.fn(),
  screenshot: jest.fn(),
}

const browser = {
  newPage: jest.fn(() => page),
  close: jest.fn(),
}

module.exports = {
  _browser: browser,
  _page: page,
  launch: jest.fn().mockImplementation(() => browser),
}
