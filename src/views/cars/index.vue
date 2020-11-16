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
        { prop: "colleges", label: "省份" },
        { prop: "national_ranking", label: "简称" },
        { prop: "comprehensive_ranking", label: "车牌前缀" },
        { prop: "comprehensive_ranking", label: "市区" }
      ],
      tableData: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
