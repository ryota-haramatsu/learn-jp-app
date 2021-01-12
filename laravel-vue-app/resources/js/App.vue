<template>
  <div>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { INTERNAL_SERVER_ERROR } from './util'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    errorCode () {
      // this.$store.state.ファイル名.ステート名
      return this.$store.state.error.code
    }
  },
  // 監視プロパティ 
  // computedでstateのcodeが変更されるのを監視
  watch: {
    errorCode: {
      handler(val) {
        if (val === INTERNAL_SERVER_ERROR) {
          this.$router.push('/500')
        }
      },
      immediate: true // 初期読み込み時にも呼び出す
    },
    // ?
    $route () {
      this.$store.commit('error/setCode', null)
    }
  }
}
</script>