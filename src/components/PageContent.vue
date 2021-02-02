<template>
  <v-container>
      <h4 :class="{ welcome: getWelcomeMsg }">{{ getWelcomeMsg }}</h4>
      <p :class="{ welcome: getWelcomeMsg }">{{ message }}</p>
      <component v-if="pageContent" :is="`${pageContent.type}-component`" :content="pageContent"/>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ContentService from '@/services/Content.service'
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

  private pageContent?: Object
  private contentService: ContentService = new ContentService()

  created () {
    this.loadPageContent()
  }

  async loadPageContent () {
    try {
      this.pageContent = await this.contentService.getContentFromEndpoint('pageId')
    } catch (error) {
      // this.$router.push('error/404')
    }
  }

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
