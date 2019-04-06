import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'
const wrapper = mount(Greeting)

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})
