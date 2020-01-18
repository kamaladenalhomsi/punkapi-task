<template>
  <div class="home">
    <data-table :data="beers">
      <template #body="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ props.row.id }}
        </b-table-column>
      </template>
    </data-table>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    DataTable
  },
  created () {
    this.getAllBeers()
  },
  methods: {
    ...mapActions({
      getAllBeers: 'beer/getAllBeers'
    })
  },
  computed: {
    ...mapGetters({
      beers: 'beer/GET_ALL_BEERS'
    })
  }
}
</script>
