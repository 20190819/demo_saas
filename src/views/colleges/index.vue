<template>
  <div>
    <el-table size="small" border :data="tableData">
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :label="item.label"
        :width="item.width || null"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <template v-if="item.prop == `tags`">
            <span
              size="small"
              v-for="(tag, index) in scope.row.tags"
              :key="index"
              >{{ tag }}#</span
            >
          </template>
          <el-link
            v-else-if="item.prop == `office_site`"
            :href="scope.row[item.prop]"
            target="_blank"
            type="primary"
            size="small"
            >官网</el-link
          >
          <el-tag
            effect="dark"
            type="primary"
            size="mini"
            v-else-if="item.prop == `rank_in_country`"
            >{{ scope.row[item.prop] || "未知" }}</el-tag
          >
          <el-tag
            effect="dark"
            type="success"
            size="mini"
            v-else-if="item.prop == `rank_in_major`"
            >{{ scope.row[item.prop] || "未知" }}</el-tag
          >
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <div>
        <el-pagination
          :small="true"
          background
          layout="total,prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { universities } from "@/api/university";
export default {
  data() {
    return {
      columns: [
        { prop: "name", label: "院校名称" },
        { prop: "school_type", label: "办学类型" },
        { prop: "level", label: "学历层次" },
        { prop: "founding_year", label: "建校时间" },
        { prop: "tags", label: "标签", overflowTooltip: false },
        { prop: "rank_in_country", label: "全国排名" },
        { prop: "rank_in_major", label: "综合排名" },
        { prop: "province", label: "所在省" },
        { prop: "city", label: "所在区" },
        { prop: "address", label: "院校地址" },
        { prop: "office_site", label: "官方网址" }
      ],
      tableData: [],
      total: 0
    };
  },
  created() {},
  mounted() {
    this.loadTableData();
  },
  methods: {
    loadTableData(params = {}) {
      universities(params).then(res => {
        if (res.data.code == 0) {
          this.tableData = res.data.data;
          this.total = res.data.count;
        }
      });
    },
    handleCurrentChange(val) {
      this.loadTableData({ page: val });
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>
