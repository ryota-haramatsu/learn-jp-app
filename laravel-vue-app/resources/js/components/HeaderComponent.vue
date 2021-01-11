
 <template>
    <nav>
     <v-app-bar
        color="white accent-4"
         justify="center" align-content="center"
      >
        <v-toolbar-title class="font-weight-bold">
          <RouterLink :to="{name: 'top'}">
            JipanGo
          </RouterLink> 
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- ログイン後のみ表示 -->
        <v-avatar hidden
          color="grey lighten-2"
          size="56"
        ></v-avatar>
      </v-app-bar>
    </nav>
 </template>
 
 <script>
     export default {
      components: {},
      data: () => ({}),
      methods: {},
    };
 </script>