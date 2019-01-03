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
                200,000
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
                342,000,320
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
      <section class="service-wrapper">
        <section class="service-left">
          <div class="sub-title">巡更安防统计</div>
          <section id="security"></section>
        </section>
        <section class="service-right">
          <div class="sub-title">投报修情况统计</div>
          <section id="repair"></section>
        </section>
      </section>
      <section>
        <div class="sub-title">工单处理时效统计</div>
        <section id="order"></section>
      </section>
    </section>

    <section class="wrapper">
      <div class="title">停车场统计</div>
      <section class="park-wrapper">
        <section class="park-left">
          <section class="income income-all">
            <div class="sub-title">总营收</div>
            <div class="income-park">
              200,000
              <span class="little-font">元</span>
            </div>
            <div class="finance-title">
              日均营收
              <span>2000 元</span>
            </div>
          </section>
          <section class="income income-today">
            <div class="sub-title">
              当日营收
              <span class="finance-title">(和昨日同时段的同比)</span>
            </div>
            <div class="finance-content">
              200,000
              <span class="little-font">元</span>
            </div>
            <div class="income-increase">+100（+0.42%）</div>
          </section>
          <section id="park-space"></section>
        </section>
        <section class="park-right">
          <section id="income"></section>
          <section class="park-space">
            <div class="park-title">
              <span class="finance-title">当前空余车位</span>
              <span class="txt-font">1200</span>
              <span>/ 3200</span>
            </div>
            <section class="car-flow">
              <div class="flow-today">
                <span class="finance-title">今日车流量</span>
                <span>3200</span>
              </div>
              <div class="flow-progress flow-today-progress"></div>
            </section>
            <section class="car-flow">
              <div class="flow-average">
                <span class="finance-title">日均车流量</span>
                <span>3200</span>
              </div>
              <div class="flow-progress flow-today-progress"></div>
            </section>
          </section>
        </section>
      </section>
    </section>

    <section class="wrapper">
      <div class="title">访客统计</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "left-side",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawSecurity();
    this.drawRepair();
    this.drawOrder();
    this.drawPark();
    this.drawIncome();
  },
  methods: {
    // 月度收费统计折线图
    drawLine() {
      let LineGraph = this.$echarts.init(
        document.getElementById("month-chart")
      );
      LineGraph.setOption({
        tooltip: { trigger: "axis" },
        grid: {
          left: "5%",
          bottom: "15%",
          right: "0%"
        },
        legend: {
          data: [
            { name: "停车场临时缴费", icon: "rect" },
            { name: "停车场券订单", icon: "rect" },
            { name: "物业收费订单", icon: "rect" },
            { name: "其他临时收费", icon: "rect" }
          ],
          bottom: 0,
          itemGap: 60,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: { color: "#fff", fontSize: 16, padding: [0, 12] }
        },
        xAxis: {
          type: "category",
          axisLine: {
            symbol: ["none", "arrow"],
            lineStyle: { color: "#0FEBFF" }
          },
          axisTick: { show: false },
          axisLabel: { margin: 24, color: "#FFFFFF", fontSize: 16 },
          boundaryGap: ["20%", "20%"],
          data: ["7月", "8月", "9月", "10月", "11月", "12月"]
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#ABB7CC",
            fontSize: 14,
            align: "left",
            verticalAlign: "bottom"
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { margin: 30, color: "#FFFFFF", fontSize: 16 },
          splitLine: { lineStyle: { color: "#1C5055" } }
        },
        series: [
          {
            name: "停车场临时缴费",
            type: "line",
            symbol: "rect",
            itemStyle: { color: "#6694FF" },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "停车场券订单",
            type: "line",
            symbol: "rect",
            itemStyle: { color: "#596A94" },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "物业收费订单",
            type: "line",
            symbol: "rect",
            itemStyle: { color: "#2667FF" },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "其他临时收费",
            type: "line",
            symbol: "rect",
            itemStyle: { color: "#1F5E99" },
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      });
    },
    // 巡更安防统计-饼图
    drawSecurity() {
      let securityGraph = this.$echarts.init(
        document.getElementById("security")
      );
      securityGraph.setOption({
        legend: {
          orient: "vertical",
          align: "left",
          x: "right",
          y: "center",
          itemGap: 58,
          left: 240,
          data: [
            { name: "正常完成", icon: "circle" },
            { name: "超时完成", icon: "circle" },
            { name: "未完成", icon: "circle" }
          ],
          itemWidth: 14,
          textStyle: { color: "#FEFEFE", fontSize: 16, padding: [0, 12] }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["20%", "50%"],
            roseType: "radius",
            avoidLabelOverlap: false,
            label: { normal: { show: false }, emphasis: { show: true } },
            lableLine: { normal: { show: false }, emphasis: { show: true } },
            data: [
              { value: 44, name: "正常完成", itemStyle: { color: "#6694ff" } },
              { value: 28, name: "超时完成", itemStyle: { color: "#3d4966" } },
              { value: 28, name: "未完成", itemStyle: { color: "#2667ff" } }
            ]
          }
        ]
      });
    },
    // 投报修情况统计-饼图
    drawRepair() {
      let repairGraph = this.$echarts.init(document.getElementById("repair"));
      repairGraph.setOption({
        legend: {
          orient: "vertical",
          align: "left",
          x: "right",
          y: "center",
          itemGap: 58,
          left: 240,
          data: [
            { name: "投诉次数", icon: "circle" },
            { name: "报修次数", icon: "circle" }
          ],
          itemWidth: 14,
          textStyle: { color: "#FEFEFE", fontSize: 16, padding: [0, 12] }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["20%", "50%"],
            roseType: "radius",
            avoidLabelOverlap: false,
            label: { normal: { show: false }, emphasis: { show: true } },
            lableLine: { normal: { show: false }, emphasis: { show: true } },
            data: [
              { value: 56, name: "投诉次数", itemStyle: { color: "#6694ff" } },
              { value: 44, name: "保修次数", itemStyle: { color: "#3d4966" } }
            ]
          }
        ]
      });
    },
    // 工单处理时效统计-柱状图
    drawOrder() {
      let orderGraph = this.$echarts.init(document.getElementById("order"));
      orderGraph.setOption({
        grid: {
          left: "0%",
          right: "4%",
          top: "4%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          position: "top",
          max: 1500,
          axisLine: {
            symbol: ["none", "arrow"],
            lineStyle: { color: "#0FEBFF" }
          },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false }
        },
        yAxis: {
          type: "category",
          boundaryGap: true,
          axisLine: {
            symbol: ["arrow", "none"],
            lineStyle: { color: "#0FEBFF" }
          },
          axisTick: { show: false },
          axisLabel: { margin: 24, color: "#FFFFFF", fontSize: 16 },
          // splitLine: { show:true, lineStyle: { color: "#1C5055" } },
          data: ["超过一天", "24小时内处理", "3小时内处理", "1小时内处理"]
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#121217" },
                  { offset: 1, color: "#3570EA" }
                ])
              }
            },
            label: { show: true, position: "right", distance: 10 },
            barWidth: 18,
            data: [324, 720, 900, 324]
          }
        ]
      });
    },
    //停车-仪表图
    drawPark() {
      let parkGraph = this.$echarts.init(document.getElementById("park-space"));

      parkGraph.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      });
    },
    //停车收入——柱状图
    drawIncome() {
      let incomeGraph = this.$echarts.init(document.getElementById("income"));

      incomeGraph.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      });
    }
    //
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
  background: url(/images/left-bg.png) no-repeat 100%;
  background-size: cover;
}
.title {
  padding-left: 34px;
  padding-bottom: 70px;
  font-size: 38px;
  font-weight: 800;
  color: #ffffff;
  line-height: 42px;
}
.sub-title {
  padding-bottom: 42px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 42px;
}
.finance-wrapper {
  display: flex;
  padding-bottom: 70px;
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
.service-wrapper {
  display: flex;
}
.service-left,
.service-right {
  flex: 1;
}
#security,
#repair,
#order {
  height: 288px;
}
.park-wrapper {
  display: flex;
  justify-content: space-between;
}
.park-right {
  flex: 1;
}
.income .sub-title {
  padding-bottom: 0;
}
.income-park {
  font-size: 32px;
  font-weight: bold;
  color: #0fe4f8;
}
#park-space {
  height: 288px;
}
#income {
  height: 320px;
}

.flow-progress {
  height: 8px;
  background: #152336;
  border-radius: 4px;
}
</style>
