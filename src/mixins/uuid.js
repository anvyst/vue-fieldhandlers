import { uuid } from 'vue-uuid'

export default {
    methods: {
        /**
         * @link https://stackoverflow.com/a/13653180/2562232
         */
        isUuid(value) {
            const regex = RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)

            return regex.test(value)
        },
        getUuid(field) {
          if (field) {
            return `${field}__${uuid.v4()}`
          }

          return uuid.v4()
        }
    }
}
