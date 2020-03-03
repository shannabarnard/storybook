/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/assets/style/tailwind.css'
import '@/assets/style/base.scss'
import Alert from '@/components/alerts/Alert.vue'

storiesOf('Components|Alert', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: {
      showNav: true,
      showPanel: true,
      panelPosition: 'bottom',
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    }
  })
  .add('with text', () => ({
    components: { Alert },
    template: '<Alert text="Test alert" :show-close="true"/>'
  }))
