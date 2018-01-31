<template>
  <Layout :style="{minHeight: '100vh'}">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <BFMenu :isCollapsed="isCollapsed"></BFMenu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round"
              size="24"></Icon>
        <Breadcrumb :style="{display: 'inline-block', verticalAlign: 'top'}">
          <BreadcrumbItem to="/home">Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Header>

      <Content :style="{ background: '#fff', minHeight: '260px'}">
        <BFNav></BFNav>

        <div>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

</style>

<script>
  import BFMenu from '@/components/BFMenu.vue'
  import BFNav from '@/components/BFNav.vue'

  export default {
    components: {
      BFMenu,
      BFNav
    },
    data () {
      return {
        isCollapsed: false,
        tab0: true,
        tab1: true,
        tab2: true
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse()
      },
      gos () {
        this.$router.push('/StandardManage')
      }
    }
  }
</script>
