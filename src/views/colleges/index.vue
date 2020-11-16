<template>
  <div>
    <el-table size="small" border :data="tableData">
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || null"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { prop: "colleges", label: "院校名称" },
        { prop: "national_ranking", label: "全国排名" },
        { prop: "comprehensive_ranking", label: "综合排名" },
        { prop: "comprehensive_ranking", label: "办学类型" },
        { prop: "comprehensive_ranking", label: "综合排名" },
        { prop: "region", label: "所在地区" },
        { prop: "address", label: "院校地址" }
      ],
      tableData: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
