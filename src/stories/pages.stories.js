/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { viewport } from '@storybook/addon-viewport'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/assets/style/base.scss'
import Welcome from '@/views/Home.vue'

storiesOf('Pages|Welcome', module)
  .addParameters({
    viewport,
    options: {
      selectedAddonPanel: 'storybook-addon-viewport/addon-panel'
    }
  })
  .add('Intro', () => ({
    render: h => h(Welcome)
  }))
