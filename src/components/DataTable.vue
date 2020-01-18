<template>
    <section>
      <b-pagination :total="100" :current.sync="currentPage" :per-page="perPage" />
      <b-table
        class="data-table"
        :data="data"
        :searchable="true"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">

            <template slot-scope="props">
              <slot name="body" v-bind="props"></slot>
            </template>
           <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                      <slot name="empty"></slot>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>

<style lang="scss">
.data-table {
  td {
    vertical-align: middle !important
  }
}
</style>

<script>
export default {
  name: 'data-table',
  props: {
    data: {
      type: Array,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  watch: {
    currentPage (page) {
      this.$emit('updatePage', page)
    }
  }
}
</script>
