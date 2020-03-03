/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { viewport } from '@storybook/addon-viewport'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/assets/style/base.scss'
import Button from '@/components/buttons/Button.vue'

storiesOf('Components|Primary Buttons', module)
  .addParameters({
    viewport,
    options: {
      addonPanelInRight: true,
      selectedAddonPanel: 'storybook-addon-viewport/addon-panel'
    }
  })
  .add('Primary', () => ({
    components: { Button },
    template: '<Button class="btn-primary">Primary</Button>'
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button class="btn-secondary">Secondary</Button>'
  }))
  .add('Danger', () => ({
    components: { Button },
    template: '<Button class="btn-danger">Danger</Button>'
  }))
  .add('Light', () => ({
    components: { Button },
    template: '<Button class="btn-light">Light</Button>'
  }))

storiesOf('Components|Secondary Buttons', module)
  .add('Primary', () => ({
    components: { Button },
    template: '<Button class="btn-primary-outline">Primary</Button>'
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button class="btn-secondary-outline">Secondary</Button>'
  }))
  .add('Danger', () => ({
    components: { Button },
    template: '<Button class="btn-danger-outline">Danger</Button>'
  }))
  .add('Light', () => ({
    components: { Button },
    template: '<Button class="btn-secondary-outline">Light</Button>'
  }))

storiesOf('Components|Tertiary Buttons', module)
  .add('Primary', () => ({
    components: { Button },
    template: '<Button class="btn-flat btn-primary">Primary</Button>'
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button class="btn-flat btn-secondary">Secondary</Button>'
  }))
  .add('Danger', () => ({
    components: { Button },
    template: '<Button class="btn-flat btn-danger">Danger</Button>'
  }))
  .add('Light', () => ({
    components: { Button },
    template: '<Button class="btn-flat btn-secondary">Light</Button>'
  }))
