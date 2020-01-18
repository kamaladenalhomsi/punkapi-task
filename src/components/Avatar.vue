<template>
  <div class="avatar">
    <img class="avatar__img" :src="src" :alt="alt" @load="loaded = true">
    <div v-if="!loaded" class="content-placeholder avatar__placeholder"></div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  &__img {
    width: 30px;
    height: 100%;
  }
  &__placeholder {
    width: 70px;
    height: 70px;
  }
}

</style>

<script>
export default {
  name: 'avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'image'
    }
  },
  data () {
    return {
      loaded: false
    }
  }
}
</script>
