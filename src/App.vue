<template>
  <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Some Demos in Vue3</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
         <router-link to="/" class="nav-link">Hello World</router-link> 
      </li>
      <li class="nav-item">
        <router-link to="/filtring-demo" class="nav-link">FiltringDemo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/paint-demo" class="nav-link">Paint Demo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sorting-demo" class="nav-link">SortingDemo</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/storie-with-votes" class="nav-link">Stories With Votes</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/using-components" class="nav-link">UsingComponents</router-link>
      </li>

    </div>
  </nav>
  <br/><br/><br/>
  <!-- display each item here, this is the target for each component -->
  <router-view />
</template>

<script>


export default {
  name: "App",
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>