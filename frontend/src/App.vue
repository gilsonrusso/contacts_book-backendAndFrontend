<template>
  <div id="app">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Contacts <strong>Book</strong></a>
        <small>Never forget a contact again!</small>
      </div>
    </nav>
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

.navbar {
  border-bottom: 0.5px solid rgb(214, 214, 214);
}

.container-fluid {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}
.container-fluid a {
  align-self: start;
}
.container-fluid small {
  font-size: 0.6rem;
  letter-spacing: 0.3ch;
  color: gray;
  line-height: 5px;
}
</style>
