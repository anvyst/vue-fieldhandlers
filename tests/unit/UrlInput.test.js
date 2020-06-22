import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/UrlInput.vue'

const wrapper = shallowMount(Component, {
  propsData: {
    guid: 'url-guid',
    field: 'url',
    value: 'http://example.com'
  }
})

describe('component tests', () => {
  it('should properly set props', () => {
    expect(wrapper.props('guid')).toBe('url-guid')
    expect(wrapper.props('field')).toBe('url')
    expect(wrapper.props('value')).toBe('http://example.com')
    expect(wrapper.vm.val).toBe('http://example.com')
    // testing data set

    wrapper.setData({ 'val': 'http://foobar.com' })
    expect(wrapper.vm.val).toBe('http://foobar.com')

    wrapper.vm.$emit('input-value-updated', wrapper.props('field'), wrapper.props('guid'), wrapper.vm.val)
    expect(wrapper.emitted('input-value-updated')).toBeTruthy()

    let sentValues = wrapper.emitted('input-value-updated')[0]
    expect(sentValues).toEqual(expect.arrayContaining(["url", "url-guid", "http://foobar.com"]))
  })
})
