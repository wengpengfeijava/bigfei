<template>
  <div class="tags-con">
    <Tag v-for="(router , index) in RouterHistories" :key="index"
         v-if="router.show"
         type="dot"
         @click.native="handelClick(router)"
         @on-close="handelClose(router)"
         :checkable="router.checkable"
         :color="currentRouter.name===router.name?'blue':'default'"
         :closable="router.closable">
      {{router.name}}
    </Tag>
  </div>
</template>

<script>
  import * as StoreType from '../store/StoreType'

  export default {
    data () {
      return {
        currentRouter: null
      }
    },
    computed: {
      [StoreType.RouterHistories] () {
        console.log(this.$store.state[StoreType.RouterHistories])
        return this.$store.state[StoreType.RouterHistories]
      }
    },
    created () {
      this.currentRouter = this.RouterHistories[0]
    },
    methods: {
      handelClose (router) {
        router.show = !router.show
      },
      handelClick (router) {
        this.currentTag = router
      }
    }
  }
</script>

<style scoped>

  .tags-con {
    height: 40px;
    z-index: -1;
    overflow: hidden;
    background: #f0f0f0;
    padding-left: 5px;
    padding-top: 2px;
  }
</style>
