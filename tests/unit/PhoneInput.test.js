import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/PhoneInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'phone-guid',
    field: 'phone',
    value: '80008080'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('phone-guid')
    expect(wrapper.props('field')).toBe('phone')
    expect(wrapper.props('value')).toBe('80008080')
    expect(wrapper.vm.val).toBe('80008080')
    // testing data set

    wrapper.setData({ 'val': '80008081' })
    expect(wrapper.vm.val).toBe('80008081')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)
    expect(wrapper.emitted('input-value-updated')).toBeTruthy()

    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["phone", "phone-guid", "80008081"]))
  })
})
