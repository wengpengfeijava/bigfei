<template>
  <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" @on-select="go">
    <template v-for="(menu) in menuList">

      <MenuItem v-if="!menu.subs.length" :key="'menuitem'+menu._id" :name="menu.router.path">
        <Icon :type="menu.icon" :key="'menuicon'+menu._id"></Icon>
        <span class="layout-text" :key="'menutitle'+menu._id">{{ menu.name }}</span>
      </MenuItem>

      <Submenu :name="'submenu' + menu.name" v-if="menu.subs.length" v-bind:key="menu._id">
        <template slot="title">
          <Icon :type="menu.icon"></Icon>
          <span>{{menu.name}}</span>
        </template>
        <MenuItem :name="subMenu.router.path" v-for="(subMenu) in menu.subs" v-bind:key="subMenu._id">
          <Icon :type="subMenu.icon"></Icon>
          <span>{{subMenu.name}}</span>
        </MenuItem>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
  export default {
    props: ['isCollapsed'],
    data () {
      return {
        menuList: []
      }
    },
    computed: {
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    created () {
      this.$http.get('/web/getMenuList')
        .then((data) => {
          this.menuList = data.data.data
        })
    },
    methods: {
      go (router) {
        this.$router.push(router)
      }
    }
  }
</script>

<style scoped>

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>

<style>
  .collapsed-menu .ivu-menu-submenu .ivu-menu {
    display: none;
  }

  .collapsed-menu .ivu-menu-submenu-title-icon {
    width: 0;
    display: none;
    transition: width .2s ease;
  }
</style>
