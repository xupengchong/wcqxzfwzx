<template>
  <div class="component-upload-image">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handlePreview"
      list-type="picture-card"
      :auto-upload="false"
      :limit="limit"
      :class="{hide:hideUploadEdit}"
       :file-list="fileList"
    >
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <!-- <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span> -->
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<div style="margin-top:5px">{{title}}</div>

  </div>
</template>

// import { getToken } from "@/utils/auth";

  // data() {
  //   return {
  //     uploadImgUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址
  //     headers: {
  //       Authorization: "Bearer " + getToken(),
  //     },
  //   };
  // },

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        hideUploadEdit: false,
        fileList:[]
      };
    },
    props: {
      value: {
        type: String,
        default: "",
      },
      title:{
         type: String,
        default: "",
      },
      limit:{
        type: Number,
        default: 1,
      },
      fileLists:{
        type: Array,
        default(){
          return []
        },
      },
      disabled:{
        type: Boolean,
        default:false,
      }
    },
    watch:{
      'fileLists':{
      handler(newVal, oldVal) {
        console.log('fileLists',newVal)
        this.fileList =newVal
         if( newVal.length == this.limit){
         this.hideUploadEdit = true
       }
      },
     immediate: true,
     deep: true
    }
    },
  methods: {
      handlePreview(res,f) {
       if( f.length == this.limit){
         this.hideUploadEdit = true
       }
      },
    handleBeforeUpload() {
      this.loading = this.$loading({
        lock: true,
        text: "上传中",
        background: "rgba(0, 0, 0, 0.7)",
      });
    },
    handleUploadError() {
      this.$message({
        type: "error",
        message: "上传失败",
      });
      this.loading.close();
    },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>


<style scoped lang="scss">
.avatar {
  width: 100%;
  height: 100%;
}

// 隐藏上传按钮
::v-deep .hide .el-upload--picture-card {
  display: none;
}
// 添加/删除文件时去掉动画过渡
::v-deep .el-upload-list__item {
  transition: none !important;
}
.component-upload-image{
  margin-right:10px
}
</style>
