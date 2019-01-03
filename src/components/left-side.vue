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
              <span class="income-all-color">2000 元</span>
            </div>
          </section>
          <section class="income income-today">
            <div class="sub-title">
              当日营收
              <span class="little-title">(和昨日同时段的同比)</span>
            </div>
            <div class="income-park">
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
              <span class="txt-font14">当前空余车位</span>
              <span class="txt-font52">1200</span>
              <span class="txt-font20">/ 3200</span>
            </div>
            <section class="car-flow">
              <div class="flow-today">
                <span class="txt-font16">今日车流量</span>
                <span class="txt-font32">3200</span>
              </div>
              <div class="flow-progress flow-today-progress"></div>
            </section>
            <section class="car-flow">
              <div class="flow-average">
                <span class="txt-font16">日均车流量</span>
                <span class="txt-font32">3200</span>
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
        grid: {
          top: "0%",
          left: "0%",
          right: "0%"
        },
        series: [
          {
            name: "车位占有率",
            type: "gauge",
            radius: "100%",
            axisLine: {
              lineStyle: {
                color: [[0.48, "#4C82FF"], [1, "#152336"]],
                width: 0
              }
            },
            axisLabel: { show: false },
            splitLine: { length: 25, lineStyle: { width: 4 } },
            axisTick: { length: 16, splitNumber: 3, lineStyle: { width: 4 } },
            pointer: { show: false },
            title: { color: "#ABB7CC", fontSize: 18 },
            detail: {
              color: "#4C82FF",
              fontWeight: "bolder",
              fontSize: 64,
              formatter: "{value}%"
            },
            data: [{ value: 48, name: "车位占有率" }]
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
          axisLine: {
            symbol: ["none", "arrow"],
            lineStyle: { color: "#0FEBFF" }
          },
          axisTick: { show: false },
          axisLabel: { margin: 24, color: "#FFFFFF", fontSize: 16 },
          boundaryGap: ["20%", "30%"],
          data: ["12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: {
          type: "value",
          max: 10000,
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
            data: [4400, 4400, 7800, 6040, 7800, 2800, 4400],
            type: "bar",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: "#121217" },
                  { offset: 1, color: "#3570EA" }
                ])
              }
            },
            barWidth: 18
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
  background: url(static/images/left-bg.png) no-repeat 100%;
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
  line-height: 24px;
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
.park-left {
  width: 250px;
  flex-basis: 250px;
}
.park-right {
  flex: 1;
}
.income {
  height: 164px;
  margin-bottom: 42px;
}
.income-all {
  border-bottom: 1px solid #313133;
}
.income .sub-title {
  padding-bottom: 28px;
}
.income-all-color {
  color: #fefefe;
}
.income-increase {
  font-size: 20px;
  font-weight: 500;
  color: #e5464f;
  line-height: 20px;
}
.income-park {
  padding-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #0fe4f8;
  line-height: 32px;
}
.little-title {
  font-size: 14px;
  font-weight: 500;
  color: #abb7cc;
  line-height: 14px;
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
.txt-font14 {
  font-size: 14px;
  font-weight: 400;
  color: #abb7cc;
  line-height: 14px;
}
.txt-font52 {
  font-size: 52px;
  font-weight: 800;
  color: #0fe4f8;
  line-height: 52px;
}
.txt-font20 {
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
.txt-font16 {
  font-size: 16px;
  font-weight: 400;
  color: #abb7cc;
  line-height: 16px;
}
.txt-font32 {
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  line-height: 32px;
}
.park-title {
  padding-bottom: 22px;
  margin-bottom: 30px;
  border-bottom: 1px solid #313133;
}
.park-title .txt-font14 {
  margin-right: 28px;
}
.car-flow {
  display: flex;
  flex-direction: column;
}
.flow-today,
.flow-average {
  align-self: flex-end;
}
.flow-today span:first-child,
.flow-average span:first-child {
  margin-right: 12px;
}
</style>
