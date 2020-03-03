/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withKnobs, number, color } from '@storybook/addon-knobs'
// import { linkTo } from '@storybook/addon-links'

// You need to import this once
import * as Icons from '@/components/icons/Icon'

storiesOf('Brand Guidlines|Icons', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: {
      addonPanelInRight: true,
      selectedAddonPanel: 'storybooks/storybook-addon-knobs'
    }
  })
  .add('HTX', () => ({
    props: {
      color: {
        type: String,
        default: color('color', '#003087')
      },
      width: {
        type: Number,
        default: number('width', 60, {
          range: true,
          min: 80,
          max: 200,
          step: 10
        })
      },
      height: {
        type: Number,
        default: number('height', 60, {
          range: true,
          min: 80,
          max: 200,
          step: 10
        })
      }
    },
    render (h) {
      return (<div> {
        Object.keys(Icons).map(iconName => {
          if (iconName !== 'default') {
            return (<div> { h(Icons[iconName], {
              props: {
                width: this.width,
                height: this.height,
                color: this.color
              }
            })
            } <div> {
              iconName
            } </div> <br/>
            </div>
            )
          }
        })
      } </div>
      )
    }
  }))
