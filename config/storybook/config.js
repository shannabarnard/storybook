/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options'

const req = require.context('../../src/stories', true, /.stories.js$/)

addDecorator(
  withOptions({
    name: 'HTX UI',
    url: 'https://github.com/HolidayTaxis/htx-ui',
    hierarchyRootSeparator: /\|/,
    selectedAddonPanel: 'storybook/stories/stories-panel'
  })
)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
