<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">About us</router-link> |
    <router-link :to="{name:'Product',params:{nom:'Skate'}}">Product 1</router-link> |
    <router-Link :to="{name:'Product',params:{nom:'Gateau'}}">Product 2</router-Link> |
    <button @click="showProduct('Roller')">Produit 3</button>
  </nav>
  <routerView/>
</template>

<script>

export default {
  name: 'App',
  methods: {
    showProduct(nom_prod){
      this.$router.push({name:'Product',params:{nom:nom_prod}})
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  text-decoration: none;
  color:#999
}
.router-link-active{
  font-weight: bold;
  color:pink
}
</style>
