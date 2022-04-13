<template>
  <div class="chunk">
    <div class="title">{{ title }}</div>
    <div class="slot-v">
      <slot />
    </div>
  </div>

</template>

<script>
export default {
  name: 'Chunks',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.chunk{
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: url('../../../assets/images/visualimg/chunk.png') ;
  background-size: 100% 100%;
  .title{
    color: #fff;
    font-size: 1rem;
    width: 8rem;
    margin-left:7rem;
    line-height: 4vh;
  }
  .slot-v{
  height: calc( 100% - 4vh ) ;

  }
}
</style>
