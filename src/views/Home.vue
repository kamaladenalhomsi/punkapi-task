<template>
  <div class="home">
    <div class="is-flex home__table-options">
      <b-select v-model="perPage" placeholder="Select Elements Per Page">
        <option value="5">5</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </b-select>
      <b-input placeholder="Search by name" icon="magnify" v-model="nameSearch"></b-input>
    </div>
    <data-table :data="beers" @updatePage="setCurrentPage" :perPage="perPage">
      <template #body="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ props.row.id }}
        </b-table-column>
        <b-table-column field="image" label="IMAGE" width="40">
            <avatar :src="props.row.image_url ? props.row.image_url : ''" />
        </b-table-column>
        <b-table-column field="name" label="NAME" width="40" sortable>
            {{ props.row.name }}
        </b-table-column>
        <b-table-column field="actions" label="ACTIONS" width="40">
            <div class="is-flex home__table-controls">
              <b-button tag="router-link" :to="'/details/' + props.row.name" type="is-info">Details</b-button>
              <b-button v-if="!props.row.inCart && !$store.getters['cart/IS_ITEM_IN_CART'](props.row.id)" type="is-success" icon-left="cart-plus" @click="setBeerInCart(props.index), addToCart(props.row)">
                Add to Cart
              </b-button>
              <b-button v-else type="is-danger" icon-left="delete" @click="deleteBeerFromCart(props.index), deleteItemFromCart(props.row.id)">Delete From Cart</b-button>
            </div>
        </b-table-column>
      </template>
      <template #empty>
        <div v-if="!loading">
          <p>
              <b-icon
                  icon="emoticon-sad"
                  size="is-large">
              </b-icon>
          </p>
          <p>Nothing here.</p>
        </div>
        <div v-else>
          <p>
              <b-icon
                  icon="loading"
                  size="is-large">
              </b-icon>
          </p>
          <p>Loading</p>
        </div>
      </template>
    </data-table>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
import Avatar from '@/components/Avatar'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    DataTable,
    Avatar
  },
  created () {
    this.fetchPaginatedBeers()
  },
  data () {
    return {
      currentPage: 1,
      perPage: 5,
      nameSearch: '',
      loading: true
    }
  },
  watch: {
    perPage () {
      this.fetchPaginatedBeers()
    },
    currentPage () {
      this.fetchPaginatedBeers()
    },
    nameSearch () {
      this.fetchPaginatedBeers()
    }
  },
  methods: {
    ...mapActions({
      getAllBeers: 'beer/getAllBeers'
    }),
    ...mapMutations({
      addToCart: 'cart/ADD_TO_CART',
      setBeerInCart: 'beer/SET_BEER_IN_CART',
      deleteBeerFromCart: 'beer/DELETE_BEER_FROM_CART',
      deleteItemFromCart: 'cart/DELETE_ITEM_FROM_CART'
    }),
    async fetchPaginatedBeers () {
      this.loading = true
      const { currentPage, perPage, nameSearch } = this
      await this.getAllBeers({
        page: currentPage,
        per_page: perPage,
        beer_name: nameSearch
      })
      this.loading = false
    },
    setCurrentPage (page) {
      this.currentPage = page
    }
  },
  computed: {
    ...mapGetters({
      beers: 'beer/GET_ALL_BEERS'
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__table {
    &-options {
      justify-content: space-between;
      margin-bottom: 20px
    }
    &-controls {
      justify-content: flex-end;
      button {
        margin-left: 10px
      }
    }
  }
}
</style>
