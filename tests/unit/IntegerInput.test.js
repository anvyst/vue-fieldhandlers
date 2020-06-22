import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/IntegerInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'integer-guid',
    field: 'integer',
    value: '25'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('integer-guid')
    expect(wrapper.props('field')).toBe('integer')
    expect(wrapper.props('value')).toBe('25')
    expect(wrapper.vm.val).toBe('25')
    // testing data set

    wrapper.setData({ 'val': '26' })
    expect(wrapper.vm.val).toBe('26')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)

    expect(wrapper.emitted('input-value-updated')).toBeTruthy()
    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["integer", "integer-guid", '26']))
  })
})
