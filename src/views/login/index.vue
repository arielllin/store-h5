<template>
  <div class="login">
    <div class="header">
      <svg-icon class="icon back" icon-class="back_block" @click="changePwdType()" />
      <div class="header-title">Sign in</div>
    </div>
    <div class="login-content">
      <div class="login-content-text">
        <div class="main">Welcome to</div>
        <div class="sub">
          <span class="sub-text">Enter your Phone number or Email for sign in, Or</span>
          <span class="sub-link"> Create new account.</span>
        </div>
      </div>
      <div class="login-content-form">
        <ValidationObserver
          v-slot="{ invalid }"
          tag="form"
        >
          <div class="form-field">
            <ValidationProvider
              v-slot="{ errors, failed }"
              rules="required|alphaNum|minmax:6,18"
              name="Account"
            >
              <input v-model="username" type="text" placeholder="Account">
              <br>
              <span v-if="failed" class="is-invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-field">
            <ValidationProvider
              v-slot="{ errors, failed }"
              rules="required|digits|minmax:6,18|confirmed:confirmation"
              name="Password"
            >
              <input v-model="password" :type="inputType" placeholder="Password">
              <svg-icon class="icon eye" icon-class="invisible" @click="changePwdType()" />
              <br>
              <span v-if="failed" class="is-invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-field">
            <ValidationProvider
              v-slot="{ errors, failed }"
              vid="confirmation"
              name="Password"
            >
              <input v-model="confirmation" :type="inputType" placeholder="Confirm Password">
              <br>
              <span v-if="failed" class="is-invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button class="sign-in-botton" type="botton" :disabled="invalid" @click.prevent="Login">SIGN IN</button>
        </ValidationObserver>

        <div class="or">OR</div>
        <div class="facebook">
          <svg-icon class="icon facebook-svg" icon-class="facebook" @click="changePwdType()" />
          <div class="text">CONNECT WITH FACEBOOK</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      username: '',
      password: '',
      confirmation: '',
      pwdShow: true
    }
  },
  computed: {
    ...mapGetters(['loginStatus']),
    inputType() {
      return this.pwdShow ? 'password' : 'text'
    },
    pwdSvgChange() {
      return this.pwdShow ? 'eye' : 'eye-closed'
    }
  },
  methods: {
    ...mapActions({
      PostLogin: 'PostLogin',
      ShowUsername: 'ShowUsername'
    }),
    close() {
      this.$router.push('/')
    },
    changePwdType() {
      this.pwdShow = !this.pwdShow
    },
    async Login() {
      await this.PostLogin({ username: this.username, password: this.password })
      await this.ShowUsername
      this.loginStatus && this.$router.push(decodeURIComponent(this.$route.query.redirect || '/'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  height 44px
  display flex
  align-items center
  &-title
    margin 0 auto
  .back
    margin-left 28px

.login
  &-content
    padding 30px 20px 0
    &-text
      .main
        font-size 34px
        color #000
        letter-spacing 0.22px
        line-height 42px
        margin-bottom 18px
      .sub
        width 260px
        font-size 16px
        letter-spacing -0.4px
        line-height 24px
        &-text
          color #000
          opacity 0.6
        &-link
          color #22A45D
    &-form
      margin-top 34px
      .form-field
        position relative
        width 100%
        height 54px
        padding 0px
        border 1px solid #F3F2F2
        background-color #FBFBFB
        border-radius 6px
        margin-bottom 14px
        input
          box-sizing border-box
          width 100%
          padding 16px 20px
          border none
          background-color #FBFBFB
          &:focus
            outline none

.or
  color #000
  opacity 0.6
  width 100%
  text-align center
  padding 23px 0 31px 0

.facebook
  background-color #395998
  width 100%
  height 48px
  border-radius 8px
  color #fff
  display flex
  align-items center
  font-size 12px
  .text
    margin 0 auto
  .facebook-svg
    margin-left 16px

.icon
  position absolute
  font-size 20px

.eye
  top 15px
  right 25px

.is-invalid
  font-size 12px
  color #f00

.sign-in-botton
  margin-top 56px
  width 100%
  height 48px
  border-radius 8px
  border none
  font-size 14px
  color #fff
button
  background-color #22A45D
button
  &:disabled
    background-color #eee
    color #787575
</style>
