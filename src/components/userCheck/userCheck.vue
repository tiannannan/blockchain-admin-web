<!-- 用户审核 -->
<template>
<section>
    <div class="userContent">
      <div class="topSearch">
        <el-input v-model="input" placeholder="请输入内容" style="width:90%"></el-input>
        <el-button type="primary" style="width:8%; margin-left:1%;">搜索</el-button>
        <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            type="index"
            label=" "
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            header-align="center"
            align="center"
            width="150"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="name"
            header-align="center"
            align="center"
            width="200"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="address"
            header-align="center"
            align="center"
            width="150"
            label="id">
          </el-table-column>
          <el-table-column
            fixed="right"
            header-align="center"
            align="center"
            label="操作">
            <template slot-scope="scope">
              <el-button
                plain
                size="small">
                冻结账号
              </el-button>
              <el-button
                plain
                @click="gotoCheck"
                size="small">
                去审核
              </el-button>
              <el-button
                type="success"
                size="small">
                审核通过
              </el-button>
              <el-button
              size="small"
                type="danger">
                审核不通过
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div class="pageClass">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="20">
        </el-pagination>
      </div>
      
      </div>

    </div>
</section>
</template>
<script>
export default {
  name: 'userCheck-list',
  data () {
    return {
      input: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '12'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '1517'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '9'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '6'
      }]
    }
  },
  methods: {
    gotoCheck () {
      this.$router.push('checkDetail')
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.userContent{
    background: #fff;
    padding: 3px;
    .topSearch{
      padding: 2%;
    }
    .pageClass{
      margin-top: 3%;
    }
}
</style>
