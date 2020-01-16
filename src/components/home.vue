<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products:[
      {
        productTitle:"Item 1",
        image       : require('../assets/images/avatar.png'),
        productId:1
      },
      {
        productTitle:"Item 2",
        image       : require('../assets/images/avatar.png'),
        productId:2
      },
      {
        productTitle:"Item 3",
        image       : require('../assets/images/avatar.png'),
        productId:3
      },
      {
        productTitle:"Item 4",
        image       : require('../assets/images/avatar.png'),
        productId:4
      },
      {
        productTitle:"Item 5",
        image       : require('../assets/images/avatar.png'),
        productId:5
      },
      {
        productTitle:"Item 6",
        image       : require('../assets/images/avatar.png'),
        productId:6
      }
      ]
    }
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 70%;

}
.row h3{
  cursor:pointer;
}
</style>
