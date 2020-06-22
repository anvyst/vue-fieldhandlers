import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/EmailInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'email-guid',
    field: 'email',
    value: 'foo@example.com'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('email-guid')
    expect(wrapper.props('field')).toBe('email')
    expect(wrapper.props('value')).toBe('foo@example.com')
    expect(wrapper.vm.val).toBe('foo@example.com')
    // testing data set

    wrapper.setData({ 'val': 'bar@example.com' })
    expect(wrapper.vm.val).toBe('bar@example.com')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)

    expect(wrapper.emitted('input-value-updated')).toBeTruthy()
    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["email", "email-guid", 'bar@example.com']))
  })
})
