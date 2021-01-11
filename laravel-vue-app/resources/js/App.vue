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
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>