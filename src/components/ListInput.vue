<template>
  <div
    :class="{'required': isRequired}"
    class="form-group"
  >
    <label
      v-if="label !== ''"
      :for="guid"
      class="control-label"
    >
      {{ label }}
    </label>
    <v-select
      v-model="val"
      placeholder="-- Please choose --"
      :options="options"
      label="label"
      :multiple="multiple"
    >
      <template
        slot="option"
        slot-scope="option"
      >
        <div v-html="option.label" />
      </template>
      <template
        slot="selected-option"
        slot-scope="option"
      >
        <div v-html="option.label" />
      </template>
    </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'ListFieldHandler',
  components: {
    vSelect
  },
  props: {
    field: {
      type: String,
      required: true
    },
    guid: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Array],
      default: ''
    },
    label: {
      type: String,
      default: '',
      required: false
    },
    isRequired: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      val: this.multiple ? [] : ''
    }
  },
  watch: {
    val (newVal) {
      if (newVal == null) {
        this.val = this.multiple ? [] : ''
      }
      const selected = this.multiple ? this.val.map(item => item.value) : this.val.value

      this.$emit('input-value-updated', this.field, this.guid, selected)
    }
  },
  created () {
      if ('' === this.value || [] === this.value) {
        return
      }

      const value = 'string' === typeof this.value ? [this.value] : this.value
      const values = this.options.filter(item => -1 < value.indexOf(item.value))

      this.val = this.multiple ? values : values[0]
  }
}
</script>
<style lang="css">
@import '~flag-icon-css/css/flag-icon.min.css';
@import '~vue-select/dist/vue-select.css';

.v-select .dropdown-toggle {
  border-radius: 0 !important;
  padding: 0 !important;
}

.v-select .selected-tag {
  margin: 3px 2px !important;
}

.v-select input[type=search] {
  padding: 5px 10px !important;
  height: 28px !important;
}
</style>
