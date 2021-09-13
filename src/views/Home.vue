<template>
  <div>
    <navbar />
    <edit />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Edit from './Edit.vue'
export default {
  name: "Home",
  components: {
    Navbar,
    Edit
  },
  
};
</script>

<style scoped >
</style>