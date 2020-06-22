<template>
  <div
    :class="{'required': isRequired}"
    class="form-group input textarea"
  >
    <label
      v-if="label !== ''"
      :for="guid"
      class="control-label"
    >
      {{ label }}
    </label>
    <textarea
      :id="guid"
      v-model="val"
      placeholder=""
      rows="5"
      class="form-control"
    />
  </div>
</template>

<script>

export default {
  name: 'TextInput',
  props: {
    field: {
      type: String,
      required: true
    },
    guid: {
      type: String,
      required: true
    },
    value: {
      type: String,
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
  data () {
    return {
      val: this.value
    }
  },

  watch: {
    val () {
      this.$emit('input-value-updated', this.field, this.guid, this.val)
    }
  }
}
</script>
