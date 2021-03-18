import { mount } from '@vue/test-utils'
import Folder from '@/views/Content.vue'

describe('Folder.vue', () => {
  it('renders folder view', () => {
    const mockRoute = {
      params: {
        view: 'Dashboard'
      }
    }
    const wrapper = mount(Folder, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })
    expect(wrapper.text()).toMatch('Explore UI Components')
  })
})
