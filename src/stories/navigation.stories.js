/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/assets/style/base.scss'
import BrandNavbar from '@/components/navigation/BrandNavbar.vue'
import Breadcrumb from '@/components/navigation/Breadcrumb.vue'

storiesOf('Components|Navigation', module)
  .add('BrandNavbar', () => ({
    components: {
      BrandNavbar
    },
    template: '<BrandNavbar />'
  }))
  .add('Breadcrumb', () => ({
    components: {
      Breadcrumb
    },
    template: '<Breadcrumb />'
  }))
