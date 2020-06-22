import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/UrlInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: '123',
    field: 'url',
    value: '3333'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('123')
    expect(wrapper.props('field')).toBe('url')
    expect(wrapper.props('value')).toBe('3333')
    expect(wrapper.vm.val).toBe('3333')
    // testing data set

    wrapper.setData({ 'val': '8008080' })
    expect(wrapper.vm.val).toBe('8008080')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)
    expect(wrapper.emitted('input-value-updated')).toBeTruthy()

    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["url", "123", "8008080"]))
  })
})
