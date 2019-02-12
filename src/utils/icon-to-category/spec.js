import tutorial from '../../icons/tutorial.svg'
import form from '../../icons/form.svg'
import page from '../../icons/page.svg'
import bricks from '../../icons/bricks.svg'
import hammer from '../../icons/hammer.svg'
import testing from '../../icons/testing.svg'
import tools from '../../icons/tools.svg'
import library from '../../icons/library.svg'
import routing from '../../icons/routing.svg'
import styles from '../../icons/styles.svg'
import example from '../../icons/example.svg'
import redux from '../../icons/redux.svg'
import data from '../../icons/data.svg'

import map from './'

describe('icon-to-category', () => {
  it('should map the correct Category to the correct icon', () => {
    expect(map.Tutorials).toEqual(tutorial)
    expect(map.Components).toEqual(bricks)
    expect(map.Tools).toEqual(hammer)
    expect(map.Styles).toEqual(styles)
    expect(map.Boilerplates).toEqual(tools)
    expect(map.Routing).toEqual(routing)
    expect(map.Libraries).toEqual(library)
    expect(map.Testing).toEqual(testing)
    expect(map.Examples).toEqual(example)
    expect(map.Data).toEqual(data)
  })
})
