<template>
  <div class="RB">
    <Chunks title="数据可视化展示">
      <div class="scroll-v">
        <div class="scrolltitle scrolltitlelist">
          <div v-for="(v, i) in list" :key="i" :style="{width:( v== ''?'60px' : '')}">{{ v }}</div>
        </div>
        <div v-if="cllData.length" class="content">
          <vue-seamless-scroll :data="cllData" class="my-scroll-bar" :class-option="{ step: 0.5 }">
            <!-- :class="{'scrolltitle':true,'scrolltitlelist' : (i+1)%2 == 0} "    用于背景变色-->
            <div v-for="(v, i) in cllData" :key="i" ref="scrolltitles" class="scrolltitle">
              <div style="width: 50px;">{{ v.type }}</div>
              <div style="overflow: hidden;width: 130px; ">{{ v[2] }}</div>
              <div style="overflow: hidden;">{{ v[3] }}</div>
              <div style="width: 150px;">{{ v[4] }}</div>
              <div>{{ v[5] }}</div>
            </div>
          </vue-seamless-scroll>
        </div>
        <div v-else style="color:#fff;text-align:center;padding-top:40px">
          暂无工单信息!!!
        </div>
      </div>
    </Chunks>
  </div>
</template>

<script>

import Chunks from '../components/chunks'
export default {
  name: 'LeftBotton',
  components: { Chunks },
  data() {
    return {
      list: ['工单类型', '工单编号', '联系人', '时间', '状态'],
      cllData: [
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
        { type: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.RB{
  width: 100%;
  height: 100%;
    .scroll-v{
  color:#46ede8;
  padding: 0 15px;
  height: 100%;
  .scrolltitle{
    display: flex;
    justify-content: space-around;
    font-size: 0.6rem;
    height: 28px;
    line-height: 28px;
    div{
      width: 20%;
      text-align: center;
    }
  }
  .content{
    height: calc(100% - 28px);
    .my-scroll-bar{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden
    }
  }
}
.scrolltitlelist{
  background-color: rgba($color: #fff, $alpha: 0.05);
}
}
</style>
