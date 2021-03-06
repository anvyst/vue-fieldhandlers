import BooleanInput from './components/BooleanInput.vue'
import DateInput from './components/DateInput.vue'
import DatetimeInput from './components/DatetimeInput.vue'
import DecimalInput from './components/DecimalInput.vue'
import EmailInput from './components/EmailInput.vue'
import IntegerInput from './components/IntegerInput.vue'
import ListInput from './components/ListInput.vue'
import PhoneInput from './components/PhoneInput.vue'
import RelatedInput from './components/RelatedInput.vue'
import StringInput from './components/StringInput.vue'
import TextInput from './components/TextInput.vue'
import TimeInput from './components/TimeInput.vue'
import UrlInput from './components/UrlInput.vue'

export {
  BooleanInput,
  DateInput,
  DatetimeInput,
  DecimalInput,
  EmailInput,
  IntegerInput,
  ListInput,
  PhoneInput,
  RelatedInput,
  StringInput,
  TextInput,
  TimeInput,
  UrlInput
}

export default {
  install (Vue, options) {
    Vue.component('BooleanInput', BooleanInput)
    Vue.component('DateInput', DateInput)
    Vue.component('DatetimeInput', DatetimeInput)
    Vue.component('DecimalInput', DecimalInput)
    Vue.component('EmailInput', EmailInput)
    Vue.component('IntegerInput', IntegerInput)
    Vue.component('ListInput', ListInput)
    Vue.component('PhoneInput', PhoneInput)
    Vue.component('RelatedInput', RelatedInput)
    Vue.component('StringInput', StringInput)
    Vue.component('TextInput', TextInput)
    Vue.component('TimeInput', TimeInput)
    Vue.component('UrlInput', UrlInput)
  }
}
