<template>
  <div>
    <v-card elevation="6" max-width="300" class="mx-auto my-12">
      <v-card-title>
        <h4>Login</h4>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="login.username"
          label="User"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          v-model="login.password"
          type="password"
          label="Password"
        ></v-text-field>
        <v-btn color="primary" @click="accessLogin">LogIn</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component({})
export default class LoginComponent extends Vue {
  auth: false
  login: any = {
    username: '',
    password: '',
    typeDevice: 'WEB',
    rememberMe: true,
  }

  $auth: any
  public async accessLogin() {
    try {
      await this.$auth.loginWith('local', { data: this.login })
    } catch (err) {
      alert('error de credenciales')
    }
  }
}
</script>
