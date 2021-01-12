<template>
  <div>
    <v-app> 
        <main class="mt-5">
          <v-container>
            <v-row class="lighten-4" justify="center" align-content="center">
              <v-card
                class="mx-auto fill-width"
                flat
                max-width="640"
              >
                <v-card-title class="text-center pa-4">
                  <h5 class="fill-width font-weight-bold">Login</h5>
                </v-card-title>
                <v-divider> </v-divider>
                <div class="px-6 py-8">
                  <div style="max-width:344px" class="mx-auto">
                    <!-- <div>
                      <v-btn
                        class="fill-width mt-5 text-capitalize caption"
                        color="#385184"
                        dark
                        depressed
                        height="48px"
                        tile
                      >
                        <img
                          class="button-logo-img mr-4"
                          style="height:24px;"
                        />
                        Login with Facebook
                      </v-btn>
                    </div>
                    <div class="separator separator_login_page">
                      <div class="middle_separator">or</div>
                    </div> -->
                    <div class="pt-6">
                      <div v-if="loginErrors">
                        <ul v-if="loginErrors.email">
                          <li v-for="msg in loginErrors.email" :key="msg" class="text-danger">{{ msg }}</li>
                        </ul>
                        <ul v-if="loginErrors.password">
                          <li v-for="msg in loginErrors.password" :key="msg" class="text-danger">{{ msg }}</li>
                        </ul>
                      </div>
                      <v-form @submit.prevent="login" ref="form">
                        <v-text-field   
                          required   
                          dense
                          height="48px"
                          outlined
                          placeholder="Email"
                          id="login-email"
                          v-model="loginForm.email"
                          :rules=[emailRules.required,emailRules.regex]
                        ></v-text-field>
                        <v-text-field
                          required
                          dense
                          height="48px"
                          outlined
                          placeholder="Password"
                          id="login-password"
                          v-model="loginForm.password"
                          :rules="[passwordRules.required, passwordRules.minLength]"
                        ></v-text-field>
                        <v-btn
                          class="fill-width caption"
                          color="#FFCB00"
                          depressed
                          height="48px"
                          tile
                          @click="login"
                        >
                          Login with Email
                        </v-btn>  
                      </v-form>                    
                      <v-divider></v-divider>
                      <div class="text-center">
                        <RouterLink  :to="{name:'forgot_password'}">Did you fogot your password?</RouterLink>                       
                      </div>
                      <div class="py-4 text-center">
                        <span>Not a member? Join us from </span>
                        <RouterLink :to="{name: 'register'}">here!</RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-row>
          </v-container>
        </main>
    </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      emailRules: {
        required: v => !!v || 'E-mail is required',
        regex: v => /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      },
      passwordRules: {
        required: v => !!v || 'Required.',
        minLength: v => (v && v.length >= 8) || 'Password must be at least 8 characters',
      }
    }
  },

  mounted(){
    //エラーをリセット
    this.$refs.form.resetValidation()
  },
  
  methods: {
    async login() {
      // authストアのloginアクションをdispatchメソッドで呼び出す
      // awaitで非同期なアクションの処理が完了するのを待機
      console.log(this.$refs.form.validate())
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('auth/login', this.loginForm)
      }

      if (this.apiStatus) {
        // クイズリストトップページに移動
        this.$router.push('/quiz_list')
      }
    }
  },

  computed: {
    // apiStatus() {
    //   return this.$store.state.auth.apiStatus
    // },
    // loginErrors() {
    //   return this.$store.state.auth.loginErrorMessages
    // }
    // 上記をリファクタ
    ...mapState({
      apiStatus: state => state.auth.apiStatus,
      loginErrors: state => state.auth.loginErrorMessages
    })
  }
}
</script>
<style scoped>
  .fill-width {
  width: 100%;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: .75rem;
}
.separator {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  position: relative;
}
.middle_separator {
  position: absolute;
  padding: 0 16px;
  color: #ccc;
  background: #fff;
  font-size: 11px;
  text-shadow: 0 1px 0 #fff;
  text-transform: uppercase;
  top: -7px;
  left: 30%;
}
.middle_separator {
  color: #777;
  font-size: 13px;
  top: -9px;
  left: 41%;
}
</style>