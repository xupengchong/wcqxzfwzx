<template>
  <div class="RB">
    <Chunks title="平均办理时间">
      <div class="content">
        <div class="strip1">
          <div class="strip-text">平均办结时间</div>
          <div class="strip-progress"><el-progress :show-text="false" :stroke-width="14" color="#01c3cc" :percentage="30" status="success" /> </div>
          <div class="strip-num1">3小时</div>
        </div>
        <div class="strip2">
          <div class="strip-text">平均审核时间</div>
          <div class="strip-progress"><el-progress :show-text="false" :stroke-width="14" color="#f6714e" :percentage="10" status="success" /> </div>
          <div class="strip-num2">1小时</div>
        </div>
        <div class="strip3">
          <div class="strip-text">平均部门办理时间</div>
          <div class="strip-progress"><el-progress :show-text="false" :stroke-width="14" color="#ffaf38" :percentage="30" status="success" /> </div>
          <div class="strip-num3">3小时</div>
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
    return {}
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.RB{
  width: 100%;
  height: 100%;
  .content{
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-around;
    height: 100%;
    padding: 1rem;
    font-size: 0.8rem;
    .strip1,
    .strip2,
    .strip3{
    height: 2rem;
    line-height: 2rem;
    // width: 100%;
    color: #fff;
    padding-left: 1.7rem;
    padding-right: 0.5rem;
    background-color: rgba($color: #5684bc, $alpha: 0.1);
      .strip-text{
          display: inline-block;
          text-shadow: 0 0 7px #00f7ff;
          width: 6.6rem;
      }
      .strip-progress{
        width: 8rem;
        display: inline-block;
      }

    }
    .strip-num1,
    .strip-num2,
    .strip-num3{
      font-size: 1rem;
      font-weight: bold;
      display: inline-block;
      margin-left: 0.5rem;
    }
    .strip1{
    background-image: url('../../../assets/images/visualimg/rmbgi1.png') ;
    background-size: 100% 100%;
      .strip-num1{
        color:#01c3cc
      }
    }
    .strip2{
    background-image: url('../../../assets/images/visualimg/rmbgi2.png') ;
    background-size: 100% 100%;
      .strip-num2{
        color:#f6714e
      }
    }
    .strip3{
    background-image: url('../../../assets/images/visualimg/rmbgi3.png') ;
    background-size: 100% 100%;
      .strip-num3{
        color:#ffaf38
      }
    }
  }
  ::v-deep .el-progress-bar__inner , ::v-deep .el-progress-bar__outer{
    border-radius: 0px !important;
  }
   ::v-deep .el-progress-bar__outer{
     background-color: rgba($color: #5684bc, $alpha: 0);
   }
}
</style>
