<template>
  <div class="app-container">
    <!-- 对话框(添加 / 修改) -->
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="案件名称：" prop="caseName"> {{ form.caseName }}</el-form-item>
      <el-form-item label="当事人：" prop="partyName"> {{ form.partyName }}</el-form-item>
      <el-form-item label="证件号码：" prop="IDCard"> {{ form.IDCard }}</el-form-item>
      <el-form-item label="律师名：" prop="lawyerName"> {{ form.lawyerName }}</el-form-item>
      <el-form-item label="时间：" prop="createTime"> {{ form.createTime }}</el-form-item>
    </el-form>
    <!-- 申请信息 -->

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-picture-outline">申请材料</span>
      </div>
      <div class="sqcl">
        <UploadImage :disabled="true" :file-lists="files" :title="'人口信息查询申请表'" />
        <UploadImage :disabled="true" :file-lists="files" :title="'流动人口居住登记情况'" />
        <UploadImage :disabled="true" :file-lists="files" :title="'人口信息查询证明'" />
      </div>
    </el-card>
  </div>
</template>

<script>
import { getLeave } from '@/api/bpm/leave'
import { getDictDatas, DICT_TYPE } from '@/utils/dict'
import UploadImage from '@/components/UploadImageZ'
export default {
  name: 'LeaveDetail',
  components: { UploadImage },
  data() {
    return {
      id: undefined, // id编号
      // 表单参数
      form: {
        startTime: undefined,
        endTime: undefined,
        type: undefined,
        reason: undefined
      },

      is: false,
      rules: {},
      typeDictData: getDictDatas(DICT_TYPE.BPM_OA_LEAVE_TYPE),
      files: [{ url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile1.renrendoc.com%2Ffileroot_temp2%2F2020-6%2F26%2F30a94a84-bee3-4962-be6e-d1db2a6dc398%2F30a94a84-bee3-4962-be6e-d1db2a6dc3981.gif&refer=http%3A%2F%2Ffile1.renrendoc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649415285&t=fefaa07e18769b606e72a21641d904d5' }]
    }
  },
  created() {
    this.id = this.$route.query.id
    this.is = this.$route.query.is
    if (!this.id) {
      this.$message.error('未传递 id 参数，无法查看 OA 请假信息')
      return
    }
    // this.getDetail();
    this.form = {
      caseName: '案件名称',
      partyName: '当事人名称',
      IDCard: '4112626262622',
      lawyerName: '贾律师',
      createTime: '2021-01-01 12:00:00'

    }
  },
  methods: {
    /** 获得请假信息 */
    getDetail() {
      getLeave(this.id).then(response => {
        this.form = response.data
      })
    }
  }
}
</script>

<style scoped>

.sqcl{
  display: flex;
  /* justify-content: start; */
  justify-content: flex-start;

}
</style>
