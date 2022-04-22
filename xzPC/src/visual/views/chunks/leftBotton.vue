<template>
  <div class="LB">
    <Chunks title="最新申请列表">
      <div class="scroll-v">
        <div class="scrolltitle scrolltitlelist">
          <div v-for="(v, i) in list" :key="i" :style="{width:( v== ''?'60px' : '')}">{{ v }}</div>
        </div>
        <div v-if="cllData.length" class="content">
          <vue-seamless-scroll :data="cllData" class="my-scroll-bar" :class-option="{ step: 0.5 }">
            <!-- :class="{'scrolltitle':true,'scrolltitlelist' : (i+1)%2 == 0} "    用于背景变色-->
            <div v-for="(v, i) in cllData" :key="i" ref="scrolltitles" class="scrolltitle">
              <div>{{ i+1 }}</div>
              <div>{{ v[2]+(i+1) }}</div>
              <div>{{ v[3] }}</div>
              <div>{{ v[4] }}</div>
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
      list: ['序号', '申请事项', '申请部门', '申请人', '申请时间'],
      cllData: [
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' },
        { type: '1', 2: '申请事项', 3: '申请部门', 4: '张三', 5: '2022-4-19' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.LB{
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
    height: 1.5rem;
    line-height:  1.5rem;
    div{
      width: 20%;
      text-align: center;
    }
  }
  .content{
    height: calc(100% - 1.5rem);

    .my-scroll-bar{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden
    }
  }
}
.scrolltitlelist{
  background-color: rgba($color: #5684bc, $alpha: 0.05);
}
}
</style>
