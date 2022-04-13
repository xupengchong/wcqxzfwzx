<template>
  <div class="app-container">
    <!-- 审批信息 -->
    <el-card v-loading="loading" class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-picture-outline">审批信息</span>
      </div>
      <el-col :span="16">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="案件名称："> {{ form.caseName }}</el-form-item>
          <el-form-item label="当事人："> {{ form.partyName }}</el-form-item>
          <el-form-item label="证件号码："> {{ form.IDCard }}</el-form-item>
          <el-form-item label="律师名："> {{ form.lawyerName }}</el-form-item>
          <el-form-item label="时间："> {{ form.createTime }}</el-form-item>
        </el-form>

      </el-col>
    </el-card>
    <!-- 申请信息 -->

    <el-card v-loading="loading" class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-picture-outline">申请材料</span>
      </div>
      <div class="sqcl">
        <UploadImage :title="'人口信息查询申请表'" />
        <UploadImage :title="'流动人口居住登记情况'" />
        <UploadImage :title="'人口信息查询证明'" />
      </div>
    </el-card>

  </div>
</template>

<script>

import UploadImage from '@/components/UploadImageZ'
export default {
  name: 'ProcessInstanceDetail',
  components: { UploadImage },
  data() {
    return {
      loading: false,
      form: {
        caseName: '案件名称',
        partyName: '当事人名称',
        IDCard: '4112626262622',
        lawyerName: '贾律师',
        createTime: '2021-01-01 12:00:00'
      }
    }
  },
  created() {
    this.id = this.$route.query.id
    if (!this.id) {
      this.$message.error('未传递 id 参数，无法查看流程信息')
      return
    }
    // this.getDetail();
  },
  methods: {

  }
}
</script>

<style lang="scss">
.my-process-designer {
  height: calc(100vh - 200px);
}

.box-card {
  width: 100%;
  margin-bottom: 20px;
}
.sqcl{
  display: flex;
  // justify-content: start;
  justify-content: flex-start;
}
</style>
