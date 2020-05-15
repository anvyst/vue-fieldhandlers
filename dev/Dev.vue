<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-md-3">
        <BooleanFieldHandler
          field="boolean_field"
          guid="1234"
          value="true"
          label="Boolean Label"
          :is-required="true"
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <UrlFieldHandler
          field="url_field"
          guid="123_url"
          value="https://google.com"
          :is-required="true"
          label="Url Label"
        />
      </div>
    </div>
  </div>
</template>
<script>
import BooleanFieldHandler from '../src/components/Boolean.vue'
import UrlFieldHandler from '../src/components/Url.vue'
export default {
  components: {
    BooleanFieldHandler,
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
