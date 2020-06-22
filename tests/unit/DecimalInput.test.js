import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/DecimalInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'decimal-guid',
    field: 'decimal',
    value: '10.43'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('decimal-guid')
    expect(wrapper.props('field')).toBe('decimal')
    expect(wrapper.props('value')).toBe('10.43')
    expect(wrapper.vm.val).toBe('10.43')
    // testing data set

    wrapper.setData({ 'val': '11.32' })
    expect(wrapper.vm.val).toBe('11.32')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)

    expect(wrapper.emitted('input-value-updated')).toBeTruthy()
    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["decimal", "decimal-guid", '11.32']))
  })
})
