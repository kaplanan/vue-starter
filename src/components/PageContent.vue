<template>
  <v-container>
      <h4 :class="{ welcome: getWelcomeMsg }">{{ getWelcomeMsg }}</h4>
      <p :class="{ welcome: getWelcomeMsg }">{{ message }}</p>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters({
      getWelcomeMsg: 'getWelcomeMsg'
    })
  }
})
export default class PageContent extends Vue {
  @Prop() private msg!: string

  get message (): string {
    return this.msg
  }

  set message (value: string) {
    this.msg = value
  }
}
</script>

<style scoped>
h4.welcome {
  margin: 50px 0 0 50px;
}
p.welcome {
  margin-left: 50px;
}
</style>
