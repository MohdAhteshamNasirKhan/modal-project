<template>
  <div>
    <!-- <div>{{$route.params.Username}}</div> -->
    <navbar :Username="$route.params.Username" style="z-index: 200;"/>
    <edit :Username="$route.params.Username" />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Edit from './Edit.vue'
export default {
  name: "Home",
  // props:{
  //   Username: String
  // },
  components: {
    Navbar,
    Edit
  },
  
};
</script>

<style scoped >
</style>