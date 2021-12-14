<template>
  <v-app>
    <v-app-bar app color="red" dark fixed>
      
      <v-btn icon v-if="$route.name !== 'search'" @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Location search</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="$route.name !== 'home_page'" @click="$router.push('/search')">
        <v-icon>search</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content fluid>
      <v-btn icon @click="KakaoMap">
        <v-icon>map</v-icon>
      </v-btn>
    </v-content>
  </v-app>
</template>

<script>
import KakaoMap from "./components/map.vue"
export default {
  name: 'App',
  components: {
    KakaoMap,
  },
};
</script>
