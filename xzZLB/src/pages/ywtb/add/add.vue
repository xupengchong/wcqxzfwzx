<template>
	<view class="main">
		<u--form
						labelAlign="right"
						labelPosition="left"
						:model="form"
						ref="uForm"
						:labelWidth= "90">
						<!-- :rules="rules" -->
			<u-form-item	label="案件名称 : "	prop="caseName"	borderBottom	>
				<u--input	v-model="form.caseName"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="当事人名称 : "	prop="partyName"	borderBottom	>
				<u--input	v-model="form.partyName "	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="证件号 : "	prop="IDCard"	borderBottom	>
				<u--input	v-model="form.IDCard"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="立案号 : "		borderBottom	>
				<u--input	v-model="form.caseID"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="律师名称 : "	prop="lawyerName"	borderBottom	>
				<u--input	v-model="form.lawyerName" readonly	border="none"	></u--input>
			</u-form-item>
		</u--form>
		<!-- <u-button v-if ="!isreadonly" style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">保存</u-button> -->
		<u-button v-if ="!isreadonly" style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">下一步</u-button>

    <!-- 事件处理进度模块 -->
    <view class="listData" v-if="isreadonly">
      <view
        class="item_card"
        v-for="item in dataList"
        :key="item.id"
      >
        <view class="lists-item-li weight">
        	<view class="lists-item-li-label">事项名称：</view>
        	<view class="">{{item.eventName}}</view>
        </view>
        <view class="lists-item-li">
        	<view class="lists-item-li-label">所属部门：</view>
        	<view class="">{{item.deptName}}</view>
        </view>
        <view class="lists-item-li">
        	<view class="lists-item-li-label">反馈时间：</view>
        	<view class="">{{item.date}}</view>
        </view>
        <view class="lists-item-li">
        	<view class="lists-item-li-label">处理状态：</view>
        	<view class="">{{item.status}}</view>
        </view>
        <view class="item_btn">
          <u-button class="check btn" plain type="primary" size="small" text="查看" @click="handleOpen(item.eventKey)"></u-button>
          <u-button class="evaluate btn" plain type="primary" size="small" text="评价" @click="handleTo"></u-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					lawyerName:'贾律师'
				},
				rules:{
          // caseName: {type: 'string',required: true,message: '请填写案件名称',trigger: ['blur', 'change']},
          // partyName: {type: 'string',required: true,message: '请填写当事人名称',trigger: ['blur', 'change']},
          // IDCard: {type: 'string',required: true,message: '请填写证件号',trigger: ['blur', 'change']},
          // lawyerName: {type: 'string',required: true,message: '请填写律师名称',trigger: ['blur', 'change']},
        },
			isreadonly: false,
      dataList:[
        {
          id:0,
          eventName:'户籍信息',
          eventKey:'hjxx',
          deptName:'***派出所',
          date:'2022-02-15',
          status:'已反馈'
        },
        {
          id:1,
          eventName:'流动人口',
          eventKey:'ldrk',
          deptName:'***派出所',
          date:'2022-02-15',
          status:'已反馈'
        }
      ]
			}
		},
		methods: {
      handleOpen(eventKey) {
      	this.$u.route({ url: 'pages/ywtb/matterDetail/matterDetail', params: { eventKey } })
      },
      handleTo(){
      	this.$u.route({ url: 'pages/ywtb/evaluate/evaluate' })
      },
			submits(){
        console.log('23')
        this.$u.route({url:'/pages/ywtb/affair/affair'})
				// this.$refs.uForm.validate().then(res => {
				// 				uni.$u.toast('校验通过')
				// 			}).catch(errors => {
				// 				uni.$u.toast('校验失败')
				// 			})

			}
		},
		onReady() {
			// this.$refs.uForm.setRules(this.rules)
		},
		onLoad(obj) {
			if(obj.id){
				this.form = obj
				this.isreadonly = true
			}else{
				this.form = {lawyerName:'贾律师'}
				this.isreadonly = false
			}
		}
	}
</script>

<style scoped lang="scss">
.main{
	padding: 0 32rpx;
  .listData{
    margin-top: 30rpx;
    .item_card{
      background-color: #fff;
      padding: 30rpx 20rpx;
      border-radius: 16rpx;
      margin-top: 20rpx;
      font-size: 28rpx;
      color: #333;
      .lists-item-li{
        display: flex;
        margin-bottom: 18rpx;
        .lists-item-li-label{}
      }
      .weight{
        font-weight: 700;
        font-size: 30rpx;
      }
      .item_btn{
        display: flex;
        margin-top: 50rpx;
        // justify-content: space-between;
        .btn{
          // display: flex;
          // text-align: left;
          width: 30%;
        }
      }
    }
  }

}
</style>
