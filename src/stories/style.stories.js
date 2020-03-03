/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/assets/style/base.scss'
import Typography from '@/views/Typography.vue'
import Pallet from '@/views/Pallet.vue'

storiesOf('Brand Guidlines|Styles', module)
  .add('Pallet', () => ({
    render: h => h(Pallet)
  }))
  .add('Typography', () => ({
    render: h => h(Typography)
  }))
