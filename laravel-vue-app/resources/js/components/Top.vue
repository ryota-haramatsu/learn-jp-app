<template>
  <div>
    <v-app>
        <main>
          <router-view />
          <v-container>
            <v-row class="lighten-4" justify="center" align-content="center" style="height: 750px;">
              <v-card
                class="mx-auto fill-width"
                flat
                max-width="640"
              > 
                <router-link :to="{name:'login'}">Login</router-link>
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
