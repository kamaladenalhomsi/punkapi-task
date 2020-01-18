<template>
  <section class="details">
    <div class="details__head">
      <h1 class="details__title">{{ beer.name }}</h1>
      <b-button v-if="!inCart" type="is-success" icon-left="cart-plus" @click="addToCart(beer)">
        Add to Cart
      </b-button>
      <b-button v-else type="is-danger" icon-left="delete" @click="deleteItemFromCart(beer.id)">Delete From Cart</b-button>
    </div>
    <div class="columns details__content">
      <div class="column has-text-centered is-one-third">
        <img class="details__img" :src="beer.image_url" alt="">
      </div>
      <div class="column is-three-third">
        <div class="columns is-multiline">
          <div class="column is-half is-vertical-center">
            <b-icon
                icon="bottle-wine"
                size="is-medium">
            </b-icon>
            Volume
          </div>
          <div class="column is-half">{{ beer.volume | valueAndUnit }}</div>
          <div class="column is-half is-vertical-center">
            Boil Volume
          </div>
          <div class="column is-half">{{ beer.boil_volume | valueAndUnit }}</div>
          <div class="column is-full" v-if="beer.method">
            <h2 class="title">Method</h2>
            <div class="columns is-multiline">
              <div class="column is-half">
                mash_temp
              </div>
              <div class="column is-half" v-if="beer.method.mash_temp">
                <p>temp: {{ beer.method.mash_temp[0].temp | valueAndUnit }}</p>
                <p>duration: {{ beer.method.mash_temp[0].duration }}</p>
              </div>
              <div class="column is-half">
                fermentation
              </div>
              <div class="column is-half" v-if="beer.method.fermentation">
                <p>temp: {{ beer.method.fermentation.temp | valueAndUnit }}</p>
              </div>
              <div class="column is-half">
                twist
              </div>
              <div class="column is-half" v-if="beer.method.twist">
                <p>twist: {{ beer.method.twist.temp | valueAndUnit }}</p>
              </div>
            </div>
          </div>
          <div class="column is-full" v-if="beer.ingredients">
            <h2 class="title">Ingredients</h2>
            <template v-if="beer.ingredients.malt">
              <h3 class="part-margin subtitle">Malt</h3>
              <data-table :data="beer.ingredients.malt" :paginationOff="true">
                <template #body="props">
                  <b-table-column field="name" label="NAME" width="40" sortable>
                      {{ props.row.name }}
                  </b-table-column>
                  <b-table-column field="amount" label="AMOUNT" width="40" sortable>
                      {{ props.row.amount | valueAndUnit }}
                  </b-table-column>
                </template>
              </data-table>
            </template>
            <template v-if="beer.ingredients.hops">
              <h3 class="part-margin subtitle">Hops</h3>
              <data-table :data="beer.ingredients.hops" :paginationOff="true">
                <template #body="props">
                  <b-table-column field="name" label="NAME" width="40" sortable>
                      {{ props.row.name }}
                  </b-table-column>
                  <b-table-column field="amount" label="AMOUNT" width="40" sortable>
                      {{ props.row.amount | valueAndUnit }}
                  </b-table-column>
                  <b-table-column field="add" label="ADD" width="40" sortable>
                      {{ props.row.add }}
                  </b-table-column>
                  <b-table-column field="attribute" label="ATTRIBUTE" width="40" sortable>
                      {{ props.row.attribute }}
                  </b-table-column>
                </template>
              </data-table>
            </template>
            <div class="columns part-margin">
              <div class="column is-half">
                Yeast
              </div>
              <div class="column is-half">
                {{ beer.ingredients.yeast }}
              </div>
            </div>
          </div>
          <div class="column is-half">Food Pairing</div>
          <div class="column is-half">
            <ul class="list">
              <li class="list-item" v-for="(pairing, index) in beer.food_pairing" :key="index">{{ pairing }}</li>
            </ul>
          </div>
          <div class="column is-half">Brewers Tips</div>
          <div class="column is-half">
            {{ beer.brewers_tips }}
          </div>
          <div class="column is-half">Contributed By</div>
          <div class="column is-half">
            {{ beer.contributed_by }}
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
  </section>
</template>

<style lang="scss" scoped>

.details {
  &__title {
    font-size: 44px;
    font-weight: bold
  }
  &__img {
    width: auto;
    height: 350px;
    object-fit: contain
  }
  &__content {
    margin-top: 30px
  }
  &__head {
    display: flex;
    justify-content: space-between
  }
}

.is-vertical-center {
  display: flex;
  align-items: center;
}

.part-margin {
  margin-top: 30px !important;
}

</style>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import DataTable from '@/components/DataTable'

export default {
  name: 'beer-details',
  components: {
    DataTable
  },
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      isLoading: true
    }
  },
  async created () {
    await this.getSingleBeerByName(this.name)
    this.isLoading = false
  },
  destroyed () {
    this.setSingleBeer({})
  },
  computed: {
    ...mapGetters({
      beer: 'beer/GET_SINGLE_BEER',
      inCart: 'cart/IS_IN_CART'
    })
  },
  methods: {
    ...mapActions({
      getSingleBeerByName: 'beer/getSingleBeerByName'
    }),
    ...mapMutations({
      addToCart: 'cart/ADD_TO_CART',
      setBeerInCart: 'beer/SET_BEER_IN_CART',
      deleteBeerFromCart: 'beer/DELETE_BEER_FROM_CART',
      deleteItemFromCart: 'cart/DELETE_ITEM_FROM_CART',
      setSingleBeer: 'beer/SET_SINGLE_BEER'
    })
  }
}
</script>
