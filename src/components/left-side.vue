<template>
  <div class="left">
    <section class="wrapper">
      <div class="title">收费统计</div>
      <div class="sub-title">财务统计</div>
      <section class="finance-wrapper">
        <section class="finance-wrapper-left">
          <div class="fix-clear">
            <div class="finance-content-left">
              <div class="finance-title">上月收费总额</div>
              <div class="finance-content">
                20 0000
                <span class="little-font">元</span>
              </div>
            </div>
            <div class="finance-content-right">
              <div class="finance-title">上月收缴率</div>
              <div class="finance-content">
                52
                <span class="little-font">%</span>
              </div>
            </div>
          </div>
          <div class="finance-progress finance-progress-month"></div>
        </section>
        <section class="finance-wrapper-right">
          <div class="fix-clear">
            <div class="finance-content-left">
              <div class="finance-title">本年收费总额</div>
              <div class="finance-content">
                342 000 320
                <span class="little-font">元</span>
              </div>
            </div>
            <div class="finance-content-right">
              <div class="finance-title">总收缴率</div>
              <div class="finance-content">
                20
                <span class="little-font">%</span>
              </div>
            </div>
          </div>
          <div class="finance-progress finance-progress-month"></div>
        </section>
      </section>
      <div class="sub-title">月度收费统计</div>
      <section class="finance-chart" id="month-chart"></section>
    </section>
    <section class="wrapper">
      <div class="title">服务统计</div>
    </section>
    <section class="wrapper">
      <div class="title">停车场统计</div>
    </section>
    <section class="wrapper">
      <div class="title">访客统计</div>
    </section>
  </div>
</template>

<script>
// let echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/line");
// require("echarts/lib/component/tooltip");

export default {
  name: "left-side",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let LineGraph = this.$echarts.init(
        document.getElementById("month-chart")
      );
      LineGraph.setOption({        
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
          bottom:0
        },
        xAxis: {
          type: "category",
          name:"月份",
          axisLine:{
            show:false
          },
          axisTick:{
            show: false
          },
          symbol:['none','arrow'],
          boundaryGap: ['20%', '20%'],
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          name:'（元）',
          axisLine:{
            show:false
          },
          axisTick:{
            show: false
          }
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.left {
  display: flex;
  flex-wrap: wrap;
  width: 2756px;  
  margin-left: 60px;
}
.wrapper {
  width: 1306px;
  padding-left: 80px;
  padding-right: 90px;
  margin-right: 42px;
}
.title {
  font-size: 38px;
  font-weight: 800;
  color: #ffffff;
  line-height: 42px;
}
.sub-title {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 42px;
}
.finance-wrapper {
  display: flex;
}
.finance-wrapper-left {
  padding-right: 116px;
  border-right: 2px solid #313133;
}
.finance-wrapper-right {
  padding-left: 116px;
}
.finance-progress {
  width: 446px;
  height: 8px;
  background: #2a3242;
  border-radius: 4px;
}
.fix-clear::before,
.fix-clear::after {
  content: "";
  display: table;
  clear: both;
}
.finance-content-left {
  float: left;
}
.finance-content-right {
  float: right;
}
.finance-title {
  font-size: 18px;
  font-weight: 500;
  color: #abb7cc;
  line-height: 18px;
}
.finance-content {
  margin-top: 24px;
  margin-bottom: 34px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(15, 228, 248, 1);
  line-height: 40px;
}
.little-font {
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
}
.finance-content-right .finance-content {
  color: #2e7ae6;
}
.finance-chart {
  height: 500px;
}
</style>
