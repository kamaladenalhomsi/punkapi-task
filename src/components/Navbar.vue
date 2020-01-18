<template>
    <b-navbar type="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <h1 class="site-logo">PUNKAPI TASK</h1>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
              <p>
                <b-icon
                    icon="cart"
                    size="is-medium">
                </b-icon>
              </p>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
.site-logo {
  font-weight: bold;
}
</style>
