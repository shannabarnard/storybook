/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import '@/assets/style/base.scss'
import BaseCheckbox from '@/components/forms/BaseCheckbox.vue'
import BaseInput from '@/components/forms/BaseInput.vue'
import BaseRadio from '@/components/forms/BaseRadio.vue'
import BaseSelect from '@/components/forms/BaseSelect.vue'
import BaseTextarea from '@/components/forms/BaseTextarea.vue'

storiesOf('Components|Forms', module)
  .add('Checkbox', () => ({
    components: {
      BaseCheckbox
    },
    template: '<BaseCheckbox />'
  }))
  .add('Input', () => ({
    components: {
      BaseInput
    },
    template: '<BaseInput />'
  }))
  .add('Radio', () => ({
    components: {
      BaseRadio
    },
    template: '<BaseRadio />'
  }))
  .add('Select', () => ({
    components: {
      BaseSelect
    },
    template: '<BaseSelect />'
  }))
  .add('Textarea', () => ({
    components: {
      BaseTextarea
    },
    template: '<BaseTextarea />'
  }))
