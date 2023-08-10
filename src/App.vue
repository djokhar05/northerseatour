<template>
  <TheHeader />
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  #app {
    font-family: "Nunito", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Abril Fatface", cursive;
  }

  h5,
  h6 {
    font-family: "Righteous", cursive;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
