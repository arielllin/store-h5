<template>
  <div class="login">
    <Header :title="'Sign in'" @onClickBack="onClickBack" />
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
        <ConnectBotton :name="'CONNECT WITH FACEBOOK'" :svg="'facebook'" :color="'#395998'" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ConnectBotton from '@/components/ConnectBotton'

import { mapActions, mapGetters } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'Login',
  components: {
    Header,
    ConnectBotton,
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
    ...mapActions('login', [
      'PostLogin'
    ]),
    onClickBack() {
      this.$router.replace('/')
    },
    changePwdType() {
      this.pwdShow = !this.pwdShow
    },
    async Login() {
      await this.PostLogin({ username: this.username, password: this.password })
      // await this.ShowUsername
      this.loginStatus && this.$router.push(decodeURIComponent(this.$route.query.redirect || '/'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  &-content
    padding 74px 20px 0
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

.icon
  position absolute
  font-size 20px

.or
  color #000
  opacity 0.6
  width 100%
  text-align center
  padding 23px 0 31px 0

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
