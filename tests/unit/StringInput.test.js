import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/StringInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'string-guid',
    field: 'string',
    value: 'John Doe'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('string-guid')
    expect(wrapper.props('field')).toBe('string')
    expect(wrapper.props('value')).toBe('John Doe')
    expect(wrapper.vm.val).toBe('John Doe')
    // testing data set

    wrapper.setData({ 'val': 'John Smith' })
    expect(wrapper.vm.val).toBe('John Smith')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)

    expect(wrapper.emitted('input-value-updated')).toBeTruthy()
  })
})
