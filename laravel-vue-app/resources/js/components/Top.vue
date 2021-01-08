<template>
  <div>
    <v-app>
        <header-component />
        <main>
          <v-container>
            <v-row class="lighten-4" justify="center" align-content="center" style="height: 750px;">
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
                    <div>
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
                    </div>
                    <div class="pt-6">
                      <div>
                        <v-text-field      
                          dense
                          height="48px"
                          outlined
                          placeholder="Email"
                        ></v-text-field>

                        <v-text-field
                          dense
                          height="48px"
                          outlined
                          placeholder="Password"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-btn
                          class="fill-width caption"
                          color="#FFCB00"
                          depressed
                          height="48px"
                          tile
                        >
                          Login with Email
                        </v-btn>
                      </div>
                      <v-divider></v-divider>
                      <div>
                        <a href="">
                          <p class="text-center">Did you forget your password?</p>
                        </a>
                      </div>
                      <div class="pb-4 text-center">
                        <span>Not a member? Join us from </span>
                        <a>here!</a>
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
import HeaderComponent from './HeaderComponent.vue'
    export default {
        components: { HeaderComponent },   
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