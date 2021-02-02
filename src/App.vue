<template>
  <div id="app">
    <!-- <AppNavBar/> -->
    <div id="page-content">
      <router-view/>
    </div>
    <!-- <AppFooter/> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import AppNavBar from './components/AppNavBar.vue'
// import AppFooter from './components/AppFooter.vue'

@Component({
  // components: {
  //   AppNavBar,
  //   AppFooter
  // }
})
export default class App extends Vue {
  public _welcomeMsg!: string

  created () {
    this.welcomeMsg = 'vue-starter on air!'
  }

  get welcomeMsg (): string {
    return this.$store.getters('getWelcomeMsg')
  }

  set welcomeMsg (value: string) {
    this.$store.dispatch('setWelcomeMsg', value)
  }
}
</script>
