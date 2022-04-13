<template>
  <div class="LT">
    <Chunks />
  </div>
</template>

<script>

import Chunks from '../components/chunks'
export default {
  name: 'LeftTop',
  components: { Chunks },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.LT{
  width: 100%;
  height: 100%;
}
</style>
