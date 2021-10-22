<template>
  <v-app>
    <v-app-bar app color="primary" dark fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Master Page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar> 
    <v-content>
      <v-container>
        <h1 class="display-1 my-5">Hello!!</h1>
        <p class="body-2 my-4">Welcome to Hanyang University.</p>
        <v-divider></v-divider>
        <h1 class="display-3 my-4">Nice to meet you!!</h1>
        <p class="body-1 my-4">WSP Class!!.</p>
      </v-container>
    </v-content>
    <v-footer color="secondary" dark fixed>
      <div class="mx-auto">Copyright &copy;</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
   
}
</script>
