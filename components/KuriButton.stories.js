import { storiesOf } from '@storybook/vue'
import KuriButton from './KuriButton'

storiesOf('KuriButton', module)
  .add('normal', () => ({
    components: { KuriButton },
    template:
    `
      <KuriButton
        v-text="'Hello World'"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))