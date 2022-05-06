<template>
  <div class="main">
    <div class="goto">
      <div v-for="(item, index) in gotoData" :key="index" class="goto-item">
        <a @click="goto(item)">
          <svg-icon :icon-class="item.icon" class="icon" />
          <p>{{ item.name }}</p>
        </a>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      gotoData: [
        { name: '可视化平台', icon: 'visual', url: '/visual/index' },
        { name: '综合管理平台', icon: 'manage', url: '' }
      ]
    }
  },
  methods: {
    goto(v) {
      const { url } = v
      this.$router.push({ path: url })
    }
  }
}
</script>

<style lang='scss' scoped>
.main{
  height: 100px;
  color:#355CCC;
  .goto{
    display: flex;
    height: 70px;
    align-items: center;
    &-item{
      margin-left: 15px;
      text-align: center;
      .icon{
        width: 40px;
        height: 40px;
      }
      p{
        margin: 0px;
        font-size: 14px;
        // font-weight: bold;
      }
    }
  }
}
</style>
