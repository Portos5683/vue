<template>
  <div id="poule">
  <h3>  Guichet {{g1.name}}   : {{g1.idCurrent}} <br> Guichet {{g2.name}} : {{g2.idCurrent}} <br> Guichet {{g3.name}} : {{g3.idCurrent}}</h3>
  

  </div>
</template>

<script>
export default {
  name: 'Guichet',
  computed: {
    /*g () {
      //console.log('dfbgfncb c')
   // return this.$store.state.gui
    },*/
    g1 () {
     // console.log('dfbgfncb c')
    return this.$store.state.g1
    },
   g2() {
    return this.$store.state.g2
    },
   g3() {
    return this.$store.state.g3
    }
  },
  mounted() {
    this.$store.dispatch("getGuichet");
    this.$store.dispatch("getPosts1");/*
    this.$store.dispatch("getPosts2");
    this.$store.dispatch("getPosts3");*/
  }
}
</script>

<style scoped>

#poule{
  float: left;
  text-align: center;
}
h2 {

  color:greenyellow;
  font-size: 900%;
}
h3 {

  color: greenyellow;
  font-size: 900%;
}
</style>