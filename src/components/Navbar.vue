<template>
    <b-navbar type="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <h1 class="site-logo">PUNKAPI TASK</h1>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
              <p class="is-flex navbar__cart">
                <b-icon
                    icon="cart"
                    size="is-samll">
                </b-icon>
                {{ cartCount }}
              </p>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  &__cart {
    margin-right: 50px;
    span {
      margin-right: 5px !important
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapGetters({
      cartCount: 'cart/GET_CART_COUNT'
    })
  }
}
</script>

<style lang="scss" scoped>
.site-logo {
  font-weight: bold;
}
</style>
