import { extend, localize } from 'vee-validate'
import { required, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_TW.json'
// import { digits } from 'vee-validate/dist/rules'

localize(
  'zh_TW', zh
)

// Add a rule.
extend('required', {
  ...required,
  message: '*Enter a valid {_field_}.'
})

extend('confirmed', {
  ...confirmed,
  message: '*Inconsistent {_field_}.'
})

extend('minmax', {
  validate(username, { min, max }) {
    return username.length >= min && username.length <= max
  },
  params: ['min', 'max'],
  message: '*{_field_} must be at least {min} to {max} characters long.'
})

extend('alphaNum', {
  validate(username) {
    return /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(username)
  },
  message: '*{_field_} must contain alphabet & digits.'
})

extend('digits', {
  validate(password) {
    return /^(?:[0-9])[0-9]*$/i.test(password)
  },
  message: '*{_field_} must be digits.'
})
