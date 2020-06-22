import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/TextInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'text-guid',
    field: 'text',
    value: 'Description'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('text-guid')
    expect(wrapper.props('field')).toBe('text')
    expect(wrapper.props('value')).toBe('Description')
    expect(wrapper.vm.val).toBe('Description')
    // testing data set

    wrapper.setData({ 'val': 'New Content' })
    expect(wrapper.vm.val).toBe('New Content')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)

    expect(wrapper.emitted('input-value-updated')).toBeTruthy()
    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["text", "text-guid", "New Content"]))
  })
})
