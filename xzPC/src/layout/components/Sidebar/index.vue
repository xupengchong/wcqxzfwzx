<template>
  <div :class="{'has-logo':showLogo,'main':true}"  :style="{ backgroundColor: settings.sideTheme === 'theme-dark' ? variables.menuBackground : settings.sideTheme === 'theme-deepBlue' ? variables.menuDeepBlueBackground: variables.menuLightBackground }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar :class="settings.sideTheme" wrap-class="scrollbar-wrapper">
        <!-- :background-color="settings.sideTheme === 'theme-dark' ? variables.menuBackground : settings.sideTheme === 'theme-deepBlue' ? variables.menuDeepBlueBackground : variables.menuLightBackground" -->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        class="main"
        :text-color="settings.sideTheme === 'theme-dark' ? variables.menuColor : settings.sideTheme === 'theme-deepBlue' ? variables.menuDeepBlueColor : variables.menuLightColor"
        :unique-opened="true"
        :active-text-color="settings.theme"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path  + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from "@/assets/styles/variables.scss";
import { mapGetters, mapState } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapState(["settings"]),
    ...mapGetters(["sidebarRouters", "sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
<style scoped lang="scss">
.main{
  background-image:linear-gradient(180deg,#4e73df 10%,#224abe 100%) !important;
}
::v-deep .el-menu{
  background: rgba($color: #000000, $alpha: 0) !important;
  .el-submenu__title {
    i{
      color: #f8f8f8;
    }
  }
}



</style>
