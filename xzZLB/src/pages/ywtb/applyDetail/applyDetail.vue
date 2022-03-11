<template>
  <view class="main">
    <u--form labelAlign="left" labelPosition="top" :model="form" :rules="rules" ref="uForm" :labelStyle="labelStyle" :labelWidth="130">
      <h3 class="title">申请人信息</h3>
      <u-form-item label="姓名：" prop="mName" borderBottom>
        <u--input v-model="form.mName" readonly border="none" placeholder="请输入姓名"></u--input>
      </u-form-item>
      <u-form-item label="性别：" prop="mSex" borderBottom>
        <u-radio-group v-model="form.mSex">
          <u-radio v-for="(item, index) in sexList" :key="index" :customStyle="{marginRight: '8px'}" :name="item.id"
            :label="item.name" />
        </u-radio-group>
      </u-form-item>
      <!-- <u-form-item label="出生日期：" prop="mBirth" borderBottom> -->
        <!--  @click="handleShow('mBirth')" -->
        <!-- <u--input v-model="form.mBirth" readonly border="none" placeholder="请输入出生日期"></u--input> -->
        <!-- <u-datetime-picker :show="showHappenDate" :minDate="1900" v-model="dateTime" mode="date" -->
        <!-- @confirm="(res) => handleHpDateCon(res, 'mBirth')"></u-datetime-picker> -->
     <!-- </u-form-item> -->
      <!-- <u-form-item label="证件名称：" prop="mCardName" borderBottom>
        <u--input v-model="form.mCardName" readonly border="none" placeholder="请输入证件名称"></u--input>
      </u-form-item> -->
      <u-form-item label="证件号码：" prop="mCardCode" borderBottom>
        <u--input v-model="form.mCardCode" readonly border="none" placeholder="请输入号码"></u--input>
      </u-form-item>
      <u-form-item label="工作单位：" prop="mWorkName" borderBottom>
        <u--input v-model="form.mWorkName" readonly border="none" placeholder="请输入工作单位"></u--input>
      </u-form-item>
      <!-- <u-form-item label="联系地址：" prop="mAddress" borderBottom>
        <u--input v-model="form.mAddress" readonly border="none" placeholder="请输入联系地址"></u--input>
      </u-form-item> -->
      <u-form-item label="联系电话：" prop="mPhone" borderBottom>
        <u--input v-model="form.mPhone" readonly border="none" placeholder="请输入联系电话"></u--input>
      </u-form-item>
     <!-- <u-form-item label="邮政编码：" prop="mPostalCode">
        <u--input v-model="form.mPostalCode" readonly border="none" placeholder="请输入邮政编码"></u--input>
      </u-form-item> -->

      <u-gap height="10" bgColor="#f3f3f3" style="margin: 0 -30rpx"></u-gap>
      <h3 class="title" style="padding-top: 20rpx;">被查询人情况</h3>
      <u-form-item label="姓名：" prop="dName" borderBottom>
        <u--input v-model="form.dName" border="none" placeholder="请输入姓名"></u--input>
      </u-form-item>
      <u-form-item label="性别：" prop="dSex" borderBottom>
        <u-radio-group v-model="form.dSex">
          <u-radio v-for="(item, index) in sexList" :key="index" :customStyle="{marginRight: '8px'}" :name="item.id"
            :label="item.name" />
        </u-radio-group>
      </u-form-item>
      <u-form-item label="出生年月/年龄：" prop="dBirth" borderBottom>
        <u--input v-model="form.dBirth" border="none" placeholder="请输入出生年月"></u--input>
      </u-form-item>
      <u-form-item label="公民身份号码：" prop="dIdCard" borderBottom>
        <u--input v-model="form.dIdCard" border="none" placeholder="请输入公民身份号码"></u--input>
      </u-form-item>
      <u-form-item label="籍贯/出生地：" prop="dBirthAddress" borderBottom>
        <u--input v-model="form.dBirthAddress" border="none" placeholder="请输入籍贯"></u--input>
      </u-form-item>
      <u-form-item label="该人可能居住地：" prop="dAddress" borderBottom>
        <u--input v-model="form.dAddress" border="none" placeholder="请输入该人可能居住地"></u--input>
      </u-form-item>
      <u-form-item label="可能的单位职业：" prop="dWorkName" borderBottom>
        <u--input v-model="form.dWorkName" border="none" placeholder="请输入可能的单位职业"></u--input>
      </u-form-item>
      <u-form-item label="具体查询事项：" prop="dQuery" borderBottom>
        <!-- <u--input v-model="form.dQuery" readonly type="textarea" border="none" placeholder="请输入具体查询事项"></u--input> -->
        <u--textarea v-model="form.dQuery" readonly placeholder="请输入具体查询事项" ></u--textarea>
      </u-form-item>
      <u-form-item label="申请查询理由：" prop="dReason" borderBottom>
        <!-- <u--input v-model="form.dReason" border="none" placeholder="请输入申请查询理由"></u--input> -->
        <u--textarea v-model="form.dReason" placeholder="请输入申请查询理由" ></u--textarea>
      </u-form-item>
      <u-form-item label="其它说明事项：" prop="dExplain">
        <!-- <u--input v-model="form.dExplain" border="none" placeholder="请输入其它说明事项"></u--input> -->
        <u--textarea v-model="form.dExplain" placeholder="请输入其它说明事项" ></u--textarea>
      </u-form-item>

      <u-gap height="10" bgColor="#f3f3f3" style="margin: 0 -30rpx"></u-gap>
      <h3 class="title" style="padding-top: 20rpx;">附件材料</h3>
      <view class="file-box">
        <u-upload @afterRead="afterRead" @delete="deletePic" name="1" :fileList="fileList1" :maxCount="1" width="200rpx" height="200rpx">
          <view class="upload-btn">
            <span>授权委托书</span>
          </view>
        </u-upload>

        <u-upload @afterRead="afterRead" @delete="deletePic" name="2" :fileList="fileList2" :maxCount="1" width="200rpx" height="200rpx">
          <view class="upload-btn">
            <span>律所公函</span>
          </view>
        </u-upload>

        <u-upload @afterRead="afterRead" @delete="deletePic" name="3" :fileList="fileList3" :maxCount="1" width="200rpx" height="200rpx">
          <view class="upload-btn">
            <span>律所介绍信</span>
          </view>
        </u-upload>

        <u-upload @afterRead="afterRead" @delete="deletePic" name="4" :fileList="fileList4" :maxCount="1" width="200rpx" height="200rpx">
          <view class="upload-btn">
            <span>律师证</span>
          </view>
        </u-upload>
      </view>
    </u--form>
    <u-button style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">下一步</u-button>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
        labelStyle: {
          color: '#b7b7b7',
          fontWeight: 700
        },
        show: false,
        content: '',
        fileList1: [],
        fileList2: [],
        fileList3: [],
        fileList4: [],
        form: {
          mName: '',
          mSex: 1,
          mBirth: '',
          mCardName: '',
          mCardCode: '',
          mWorkName: '',
          mAddress: '',
          mPhone: '',
          mPostalCode: '',
          dName: '',
          dSex: 1,
          dBirth: '',
          dIdCard: '',
          dBirthAddress: '',
          dAddress: '',
          dWorkName: '',
          dReason: '',
          dQuery: '',
          dExplain: '',
        },
        showHappenDate: false,
        dateTime: '',
        params: {},
        sexList: [{
          id: 1,
          name: '男'
        }, {
          id: 2,
          name: '女'
        }],
        rules: {
          mName: {
            type: 'string',
            required: true,
            message: '请输入姓名',
            trigger: ['blur', 'change']
          },
          // mBirth: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入出生日期',
          //   trigger: ['blur', 'change']
          // },
          // mCardName: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入证件名称',
          //   trigger: ['blur', 'change']
          // },
          // mCardCode: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入号码',
          //   trigger: ['blur', 'change']
          // },
          // mWorkName: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入工作单位',
          //   trigger: ['blur', 'change']
          // },
          // mAddress: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入联系地址',
          //   trigger: ['blur', 'change']
          // },
          // mPhone: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入联系电话',
          //   trigger: ['blur', 'change']
          // },
          // mPostalCode: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入邮政编码',
          //   trigger: ['blur', 'change']
          // },
          // dName: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入姓名',
          //   trigger: ['blur', 'change']
          // },
          // dBirth: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入出生年月',
          //   trigger: ['blur', 'change']
          // },
          // dIdCard: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入公民身份号码',
          //   trigger: ['blur', 'change']
          // },
          // dBirthAddress: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入籍贯',
          //   trigger: ['blur', 'change']
          // },
          // dAddress: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入该人可能居住地',
          //   trigger: ['blur', 'change']
          // },
          // dWorkName: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入可能的单位职业',
          //   trigger: ['blur', 'change']
          // },
          // dReason: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入申请查询理由',
          //   trigger: ['blur', 'change']
          // },
          // dQuery: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入具体查询事项',
          //   trigger: ['blur', 'change']
          // },
          // dExplain: {
          //   type: 'string',
          //   required: true,
          //   message: '请输入其它说明事项',
          //   trigger: ['blur', 'change']
          // },
        },
        isreadonly: false
      }
    },
    methods: {
      subConfirm() {
        uni.$u.route({
          type: 'reLaunch',
          url: '/'
        })
      },
      handleShow(key) {
        this.showHappenDate = true
        if (this.form[key]) this.dateTime = this.form[key]
      },
      handleHpDateCon(res, key) {
        this.form = {
          ...this.form,
          [key]: this.$u.timeFormat(res.value, 'yyyy-mm-dd')
        }
        this.showHappenDate = false
      },
      submits() {
        this.$refs.uForm.validate().then(res => {
          // this.show = true
          // this.content = '提交成功，查询结果需要2-3天，请耐心等候'
          this.$u.route('pages/ywtb/promise/promise')
        }).catch(errors => {

        })
      },
      // 删除图片
      deletePic(event) {
        this[`fileList${event.name}`].splice(event.index, 1)
      },
      // 新增图片
      async afterRead(event) {
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        let lists = [].concat(event.file)
        let fileListLen = this[`fileList${event.name}`].length
        lists.map((item) => {
          this[`fileList${event.name}`].push({
            ...item,
            status: 'uploading',
            message: '上传中'
          })
        })
        for (let i = 0; i < lists.length; i++) {
          // const result = await this.uploadFilePromise(lists[i].url)
          let item = this[`fileList${event.name}`][fileListLen]
          this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
            status: 'success',
            message: '',
            url: lists[i].url
          }))
          fileListLen++
        }
      },
    },
    onReady() {
      this.form = {
        mName: '*三',
        mSex: 1,
        dSex: 1,
        mBirth: '1999-12-12',
        dQuery: this.params.names,
        mWorkName: '浙江金奥律师事务所',
        mCardName: '律师证',
        mCardCode: 'A2021***********2',
        mAddress: '浙江省金华市李渔路1168号',
        mPhone: '180****2306',
        mPostalCode: '321000'
      }
      this.$refs.uForm.setRules(this.rules)
    },
    onLoad(obj) {
      if (obj) this.params = obj
    }
  }
</script>

<style scoped lang="scss">
  page {
    background-color: #fff;
  }

  .main {
    padding: 0 32rpx;

    .title {
      color: #8f9ca2;
      font-size: 28rpx;
      margin-bottom: 16rpx;
      display: flex;
      flex-direction: row;
    }

    .upload-btn {
      width: 200rpx;
      height: 200rpx;
      background-color: #f4f5f7;
      border-radius: 10rpx;
      color: #9c9d9f;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin: 5px;
    }

    .file-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }
</style>
