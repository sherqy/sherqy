<template>
  <div id="app">
    <h1>Hello!</h1>
    <router-view></router-view>
    <hr>
    <p>Using router link:
      <router-link to="/main">Main Page</router-link>
      <router-link to="/sub">Sub Page</routter-link>
    </p>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
