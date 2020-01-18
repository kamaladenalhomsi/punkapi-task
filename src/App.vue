<template>
  <div id="app">
    <navbar />
    <div class="container custom-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

.custom-container {
  margin-top: 100px !important
}

</style>
