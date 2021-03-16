<template>
  <div id="app">
    <header>
      <nav>
        <a class="logo" href="#">Contacts <strong>Book</strong></a>
        <small>Never forget a contact again!</small>
      </nav>
    </header>
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",
  components: { Home },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header nav {
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 0.5px solid rgb(214, 214, 214);
}

nav small {
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  margin-top: -8px;
  margin-left: 5px;
}

.logo {
  text-decoration: none !important;
  font-weight: 600;
  padding: 5px;
  width: 150px;
}
</style>
