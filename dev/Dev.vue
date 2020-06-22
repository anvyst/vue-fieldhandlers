<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-md-3">
        <UrlInput
          field="url_field"
          guid="123_url"
          value="https://google.com"
          :is-required="true"
          label="Url Label"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <TimeInput
          field="time_field"
          value="2020-05-15 09:00:00"
          guid="123-time"
          label="Time Label"
          :is-required="true"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <TextInput
          value="Text Value Description"
          guid="123-textarea"
          field="123-text"
          :is-required="true"
          label="TextArea"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <BooleanInput
          field="boolean_field"
          guid="1234"
          value="true"
          label="Boolean Label"
          :is-required="true"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-3">
        <StringInput
          label="String Input"
          value="String Value"
          guid="123-sstring-input"
          field="string_field"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <PhoneInput
          label="Phone"
          value="+123 23132232"
          guid="123-phone"
          field="phone_field"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <IntegerInput
          label="Integer"
          field="integer_field"
          guid="123-integer"
          value="25"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <EmailInput
          label="Email"
          field="email_field"
          guid="123-email"
          value="foo@bar.com"
          :is-required="true"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-3">
        <DecimalInput
          field="decimal_field"
          value="20.543"
          guid="123123-decimal"
          label="Decimal Label"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <DatetimeInput
          field="datetime_field"
          value="2019-03-12 10:00:32"
          guid="123123-datetime"
          label="Datetime"
          :is-required="true"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <DateInput
          field="date_field"
          value="2020-05-15"
          guid="12323-date"
          label="Date label"
          :is-required="true"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-3">
        <ListInput
          guid="123-list"
          field="list_field"
          label="List Label"
          :options="listArray"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <RelatedInput
          guid="123-related"
          field="related_field"
          source="test_source"
          display-field="test_displayField"
          :options="relatedArray"
          label="Related Label"
          :is-required="true"
        />
      </div>
    </div>
  </div>
</template>
<script>
import BooleanInput from '../src/components/BooleanInput.vue'
import ListInput from '../src/components/ListInput.vue'
import RelatedInput from '../src/components/RelatedInput.vue'
import DateInput from '../src/components/DateInput.vue'
import DatetimeInput from '../src/components/DatetimeInput.vue'
import DecimalInput from '../src/components/DecimalInput.vue'
import EmailInput from '../src/components/EmailInput.vue'
import IntegerInput from '../src/components/IntegerInput.vue'
import StringInput from '../src/components/StringInput.vue'
import PhoneInput from '../src/components/PhoneInput.vue'
import TextInput from '../src/components/TextInput.vue'
import TimeInput from '../src/components/TimeInput.vue'
import UrlInput from '../src/components/UrlInput.vue'

export default {
  components: {
    BooleanInput,
    DateInput,
    DatetimeInput,
    DecimalInput,
    EmailInput,
    IntegerInput,
    ListInput,
    RelatedInput,
    PhoneInput,
    StringInput,
    TextInput,
    TimeInput,
    UrlInput
  },
  data () {
    return {
      listArray: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
        { label: '42', value: '42' }
      ],
      relatedArray: [],
      countries: []
    }
  },
  created () {
  }
}
</script>
<style>
@import "~admin-lte/dist/css/AdminLTE.min.css";
@import "~admin-lte/dist/css/skins/_all-skins.min.css";

body {
  margin:0;
}

pre {
  border:1px solid #aaa;
  border-radius: 6px;
  background-color: #eee;
}

.required label::after {
    content: " *";
    color: red;
}
</style>
