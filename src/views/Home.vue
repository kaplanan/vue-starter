<template>
  <div class="home">
    <PageContent msg="Now get on started."/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import PageContent from '@/components/PageContent.vue'

@Component({
  components: { PageContent },
  computed: {
    /*
    ...mapGetters({
      getState: 'getState'
    })
    */
  }
})
export default class Home extends Vue {

}
</script>
