<template>
  <v-app>
  <router-view name="header"/>
    <div class="start">
      <router-view />
    </div>
  <router-view name="footer"/>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
