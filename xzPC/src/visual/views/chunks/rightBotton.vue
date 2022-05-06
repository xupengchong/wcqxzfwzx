<template>
  <div class="RB">
    <Chunks title="当日超时记录">
      <div class="scroll-v">
        <div class="scrolltitle scrolltitlelist">
          <div v-for="(v, i) in list" :key="i" :style="{width:( v== ''?'60px' : '')}">{{ v }}</div>
        </div>
        <div v-if="cllData.length" class="content">
          <vue-seamless-scroll :data="cllData" class="my-scroll-bar" :class-option="defaultOption">
            <!-- :class="{'scrolltitle':true,'scrolltitlelist' : (i+1)%2 == 0} "    用于背景变色-->
            <div v-for="(v, i) in cllData" :key="i" ref="scrolltitles" class="scrolltitle">
              <div :style="{color:colors[i] }">{{ i+1 }}</div>
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
  name: 'RightBotton',
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
      ],
      colors: ['#ffc300', '#ffc300', '#ffc300', '#ff6c1d', '#ff6c1d']

    }
  },
  // 监听属性 类似于data概念
  computed: {
    defaultOption() {
      return {
        step: 0.2 // 数值越大速度滚动越快
        // limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        // hoverStop: true, // 是否开启鼠标悬停stop
        // direction: 0, // 0向下 1向上 2向左 3向右
        // openWatch: true, // 开启数据实时监控刷新dom
        // singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        // singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        // waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
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
