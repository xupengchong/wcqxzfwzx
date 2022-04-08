<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <TopGoto id="topmenu-container" class="topmenu-container" />

    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <div class="right-menu-title">
          <p>下午好, 张三</p>
          <div>
            <search id="header-search" class="right-menu-item" />
            <screenfull id="screenfull" class="right-menu-item hover-effect" />
          </div>
        </div>

        <!-- <el-tooltip content="源码地址" effect="dark" placement="bottom">
          <ruo-yi-git id="ruoyi-git" class="right-menu-item hover-effect" />
        </el-tooltip> -->

        <!-- <el-tooltip content="文档地址" effect="dark" placement="bottom">
          <ruo-yi-doc id="ruoyi-doc" class="right-menu-item hover-effect" />
        </el-tooltip> -->

        <!-- <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->
      </template>

      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <!-- <img :src="avatar" class="user-avatar"> -->
          <img src="../../assets/images/grzx.jpg" class="user-avatar">
          <!-- <i class="el-icon-caret-bottom" /> -->
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <!-- <el-dropdown-item @click.native="setting = true">
            <span>布局设置</span>
          </el-dropdown-item> -->
          <el-dropdown-item divided @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Search from '@/components/HeaderSearch'
import Screenfull from '@/components/Screenfull'
import TopGoto from '@/components/TopGoto'
import { mapGetters } from 'vuex'
export default {
  components: {
    TopGoto,
    Hamburger,
    Screenfull,
    Search
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device']),
    setting: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    },
    topNav: {
      get() {
        return this.$store.state.settings.topNav
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$modal
        .confirm('确定注销并退出系统吗？', '提示')
        .then(() => {
          this.$store.dispatch('LogOut').then(() => {
            location.href = '/index'
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  // overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .goto {
    margin-left: 10px;
  }
  .hamburger-container {
    line-height: 70px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 70px;
    display: flex;

    &:focus {
      outline: none;
    }
    &-title {
      display: flex;
      flex-direction: column;
      line-height: normal;
      p {
        font-weight: bold;
        font-size: 16px;
        margin: 10px 0 0px;
        color: #355ccc;
      }
      div {
        line-height: 36px;
        text-align: end;
      }
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      // height: 100%;
      font-size: 14px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 10px;

      .avatar-wrapper {
        // margin-top: 5px;
        // position: relative;
        align-items: center;
        height: 70px;
        display: flex;
        .user-avatar {
          cursor: pointer;
          width: 50px;
          height: 50px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
