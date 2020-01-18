<template>
  <div class="avatar">
    <img class="avatar__img" :src="src" :alt="alt">
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  &__img {
    width: 30px;
    height: 100%;
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
  }
}
</script>
