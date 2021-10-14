<template>
  <login-component />
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LoginComponent from '~/components/LoginComponent.vue'
@Component({
  components: {
    LoginComponent,
  },
})
export default class Login extends Vue {}
</script>
