<template>
  <div class="container">
    <h2>Bienvenido</h2>
    <v-data-table
      :headers="headers"
      :items="zonasSitec"
      :items-per-page="5"
      class="elevation-1 mt-5"
    ></v-data-table>
    <div class="text-right">
      <v-btn class="mt-5" color="error" @click="salir()">Salir</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { homeStore } from '../store'

@Component({})
export default class Login extends Vue {
  headers: any[] = [{ text: 'Iron (%)', value: 'iron' }]
  zonasSitec: any[] = []

  mounted() {
    homeStore.getZonasSitec()
    this.zonasSitec = homeStore._zonasSitec
    console.log(this.zonasSitec)
  }

  $auth: any
  salir(): void {
    this.$auth.logout()
    this.$router.push('/login')
  }
}
</script>
