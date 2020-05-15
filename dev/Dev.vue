<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-md-3">
        <UrlFieldHandler
          field="url_field"
          guid="123_url"
          value="https://google.com"
          :is-required="true"
          label="Url Label"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <TimeFieldHandler
          field="time_field"
          value="2020-05-15 09:00:00"
          guid="123-time"
          label="Time Label"
          :is-required="true"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <TextFieldHandler
          value="Text Value Description"
          guid="123-textarea"
          field="123-text"
          :is-required="true"
          label="TextArea"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <BooleanFieldHandler
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
        <StringFieldHandler
          label="String Input"
          value="String Value"
          guid="123-sstring-input"
          field="string_field"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <PhoneFieldHandler
          label="Phone"
          value="+123 23132232"
          guid="123-phone"
          field="phone_field"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <IntegerFieldHandler
          label="Integer"
          field="integer_field"
          guid="123-integer"
          value="25"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <EmailFieldHandler
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
        <DecimalFieldHandler
          field="decimal_field"
          value="20.543"
          guid="123123-decimal"
          label="Decimal Label"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <DatetimeFieldHandler
          field="datetime_field"
          value="2019-03-12 10:00:32"
          guid="123123-datetime"
          label="Datetime"
          :is-required="true"
        />
      </div>

      <div class="col-xs-12 col-md-3">
        <DateFieldHandler
          field="date_field"
          value="2020-05-15"
          guid="12323-date"
          label="Date label"
          :is-required="true"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-3">List</div>
      <div class="col-xs-12 col-md-3">Related</div>
    </div>
  </div>
</template>
<script>
import BooleanFieldHandler from '../src/components/Boolean.vue'
import ListFieldHandler from '../src/components/List.vue'
import RelatedFieldHandler from '../src/components/Related.vue'
import DateFieldHandler from '../src/components/Date.vue'
import DatetimeFieldHandler from '../src/components/Datetime.vue'
import DecimalFieldHandler from '../src/components/Decimal.vue'
import EmailFieldHandler from '../src/components/Email.vue'
import IntegerFieldHandler from '../src/components/Integer.vue'
import StringFieldHandler from '../src/components/String.vue'
import PhoneFieldHandler from '../src/components/Phone.vue'
import TextFieldHandler from '../src/components/Text.vue'
import TimeFieldHandler from '../src/components/Time.vue'
import UrlFieldHandler from '../src/components/Url.vue'

export default {
  components: {
    BooleanFieldHandler,
    DateFieldHandler,
    DatetimeFieldHandler,
    DecimalFieldHandler,
    EmailFieldHandler,
    IntegerFieldHandler,
    ListFieldHandler,
    RelatedFieldHandler,
    PhoneFieldHandler,
    StringFieldHandler,
    TextFieldHandler,
    TimeFieldHandler,
    UrlFieldHandler
  },
  data () {
    return {
      phoneValue: {},
      urlValue: {},
      textValue: {}
    }
  },
  methods: {
    showPhoneValue (field, guid, val) {
      this.phoneValue = {
        'field': field,
        'guid': guid,
        'val': val
      }
    },
    showUrlValue (field, guid, val) {
      this.urlValue = {
        'field': field,
        'guid': guid,
        'val': val
      }
    },
    showTextValue (field, guid, val) {
      this.textValue = { 'field': field, 'guid': guid, 'val': val }
    }
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
