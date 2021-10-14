<template>
  <div>
    <home-component />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HomeComponent from '../components/HomeComponent.vue'
@Component({
  components: { HomeComponent },
})
export default class Login extends Vue {}
</script>
