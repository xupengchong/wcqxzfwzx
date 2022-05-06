<template>
  <div class="CT">
    <div class="CT-t">
      <div v-for="(v,i) in itemData" :key="i" class="item">
        <div class="left">
          <img src="../../../assets/images/visualimg/contentImg1.png" alt="">
        </div>
        <div class="right">
          <div class="titles">
            {{ v.title }}
          </div>
          <div class="num">
            {{ v.num }}
          </div>
        </div>
      </div>
    </div>
    <div class="CT-b">
      <div class="CT-b-bgc">
        <div class="circle">
          <div class="circletitle">
            涉调服务
          </div>
          <!-- 内部图标 -->
          <div class="lt pro" />
          <div class="rt pro" />
          <div class="lc pro" />
          <div class="rc pro" />
          <div class="lb pro" />
          <div class="rb pro" />
          <!-- 外侧数据 -->
          <div class="lts pros">
            <div class="num-top">
              <div>123</div>
              <div>在线数</div>
            </div>
            <div class="num-bot">
              <div>123</div>
              <div>在线数</div>
            </div>
          </div>
          <div class="rts pros">
            <div class="num-rtop">
              <div>在线数</div>
              <div>123</div>
            </div>
            <div class="num-rbot">
              <div>在线数</div>
              <div>123</div>
            </div>
          </div>
          <div class="lcs pros">
            <div class="num-top">
              <div>123</div>
              <div>在线数</div>
            </div>
            <div class="num-bot">
              <div>123</div>
              <div>在线数</div>
            </div>
          </div>
          <div class="rcs pros">
            <div class="num-rtop">
              <div>在线数</div>
              <div>123</div>
            </div>
            <div class="num-rbot">
              <div>在线数</div>
              <div>123</div>
            </div>
          </div>
          <div class="lbs pros">
            <div class="num-top">
              <div>123</div>
              <div>在线数</div>
            </div>
            <div class="num-bot">
              <div>123</div>
              <div>在线数</div>
            </div>
          </div>
          <div class="rbs pros">
            <div class="num-rtop">
              <div>在线数</div>
              <div>123</div>
            </div>
            <div class="num-rbot">
              <div>在线数</div>
              <div>1232131231</div>
            </div>
          </div>
        </div>

      </div>
      <div class="bw" />
      <div class="fg" />

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      itemData: [
        { title: '事项清单数', num: 50 },
        { title: '涉事总数', num: 11150 },
        { title: '本地调取数', num: 9150 },
        { title: '异地调取数', num: 1350 },
        { title: '事务所/律师数', num: '41/900' },
        { title: '案件总数', num: 5000 }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.CT{
  width: 100%;
  height: 100%;
  &-t{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 8vh;
    padding-top: 1vh;
    .item{
      width: 7.25rem;
      height: 7vh;
      background: url('../../../assets/images/visualimg/tck.png');
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      .left{
            margin-left: .25rem ;
        img{
          object-fit: cover;
            object-position: center;
            max-width: 100%;
            /* 最大高度设置 */
            max-height: 5vh;
            display: block;
        }
      }
      .right{
        .titles{
          font-size: .6rem;
          color: #fff;
        }
        .num{
          font-size: .8rem;
          color: #57fffd;
          font-weight: bold;
        }
      }
    }
  }
  &-b{
    width: 100%;
    height: calc( 100% - 8vh);
    position: relative;
    overflow: hidden;

    &-bgc{
      position: absolute;
      top: 3vh;
      left: 0;
      width: 100%;
      height: 100%;

      .circle{
        position: absolute;
        left: 13.5rem;
        background: url('../../../assets/images/visualimg/contentCircle.png') no-repeat;
        width: 20rem ;
        height:20rem;
        background-size: 100% 100%;
        z-index: 5;
        .circletitle{
          position: absolute;
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
          top: 9.5rem;
          left: 8rem;
        }
        .num-top,.num-bot,.num-rtop,.num-rbot{
          width: 100%;
          position: absolute;
          display: flex;
          padding: 0 2rem;
          justify-content: space-around;
          font-size: .8rem;
        }
        .num-top{
          top: .1rem;
        }
        .num-bot{
          top: 3vh;
          right: 1rem;
        }
        .num-rtop{
          top: .1rem;
        }
        .num-rbot{
          top: 3vh;
          left: 1rem;
        }

      }
      .lt,.rt,.lc,.rc,.lb,.rb {
        position: absolute;
        background-size: 100% 100%;
        width: 4rem;
        height: 4rem;

      }
      .lt{
        top: 3rem;
        left: 5rem;
        background-image: url('../../../assets/images/visualimg/contentImg1.png');
      }
      .rt{
        top: 3rem;
        left: 11rem;
        background-image: url('../../../assets/images/visualimg/contentImg2.png');
      }
      .lc{
        top: 8rem;
        left: 2rem;
        background-image: url('../../../assets/images/visualimg/contentImg3.png');
      }
      .rc{
        top: 8rem;
        left: 14rem;
        background-image: url('../../../assets/images/visualimg/contentImg4.png');
      }
      .lb{
        top: 13rem;
        left: 5rem;
        background-image: url('../../../assets/images/visualimg/contentImg5.png');
      }
      .rb{
        top: 13rem;
        left: 11rem;
        background-image: url('../../../assets/images/visualimg/contentImg6.png');
      }
      .lts,.lbs,.lcs{
        position: absolute;
        background: url('../../../assets/images/visualimg/clitem.png');
        background-size: 100% 100%;
        width: 11.5rem;
        height: 7vh;
        color: #fff;
      }
      .rcs,.rts,.rbs{
        position: absolute;
        background: url('../../../assets/images/visualimg/critem.png');
        background-size: 100% 100%;
        width: 11.5rem;
        color: #fff;
        height: 7vh;
      }
      .lts{
        top: 2rem;
        left: -9rem;
      }
      .rts{
        top: 2rem;
        left: 17.5rem;
      }
      .lcs{
        top: 8.5rem;
        left:-11.5rem;
      }
      .rcs{
        top: 8.5rem;
        left: 20rem;
      }
      .lbs{
        top: 14rem;
        left: -10rem;
      }
      .rbs{
        top: 14rem;
        left: 18.5rem;
      }
    }
    .bw{
      position: absolute;
      bottom: -8vh;
      width: 100%;
      height: 30vh;
      background: url('../../../assets/images/visualimg/fg.png');
      background-size: 100% 100%;
    }
    .fg{
      position: absolute;
      bottom: -30vh;
      left: -10%;
      width: 120%;
      background: url('../../../assets/images/visualimg/ctbi.png');
      background-size: 100% 100%;
      height: 40vh;
    }
  }
}

  .pro{
    border-radius: 50%;
  }
  .pros,.pro{
    transition: all .3s linear;
    transform:scale(1,1) ;
  }
  .lt:hover , .rt:hover,.lc:hover,.rc:hover,.lb:hover,.rb:hover {
    transform:scale(1.2,1.2) ;
    box-shadow: 0px 0px 15px 3px #57fffd;
  }
  .lt:hover ~ .lts , .rt:hover~ .rts,.lc:hover~ .lcs,.rc:hover~ .rcs,.lb:hover~ .lbs,.rb:hover~ .rbs{
    transform:scale(1.2,1.2) ;
  }
</style>
