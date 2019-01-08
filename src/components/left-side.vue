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
                {{LastMonthTotalAmount}}
                <span class="little-font">元</span>
              </div>
            </div>
            <div class="finance-content-right">
              <div class="finance-title">上月收缴率</div>
              <div class="finance-content">
                {{LastMonthFeeRate}}
                <span class="little-font">%</span>
              </div>
            </div>
          </div>
          <div class="finance-progress">
            <div class="finance-progress-month" v-bind:style="{width: LastMonthFeeRate + '%' }"></div>
          </div>
        </section>
        <section class="finance-wrapper-right">
          <div class="fix-clear">
            <div class="finance-content-left">
              <div class="finance-title">本年收费总额</div>
              <div class="finance-content">
                {{YearTotalAmount}}
                <span class="little-font">元</span>
              </div>
            </div>
            <div class="finance-content-right">
              <div class="finance-title">总收缴率</div>
              <div class="finance-content">
                {{YearFeeRate}}
                <span class="little-font">%</span>
              </div>
            </div>
          </div>
          <div class="finance-progress">
            <div class="finance-progress-all" v-bind:style="{width: YearFeeRate + '%' }"></div>
          </div>
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
      <section class="income-wrapper">
        <section class="income">
          <section class="income-all">
            <div class="sub-title">总营收</div>
            <div class="income-park">
              {{incomeTotal}}
              <span class="little-font">元</span>
            </div>
            <div class="finance-title">
              日均营收
              <span class="income-all-color">{{incomeAverage}} 元</span>
            </div>
          </section>
          <section class="income-today">
            <div class="sub-title">
              当日营收
              <span class="little-title txt-font14">(和昨日同时段的同比)</span>
            </div>
            <div class="income-park">
              {{incomeToday}}
              <span class="little-font">元</span>
            </div>
            <div class="income-increase">+100（+0.42%）</div>
          </section>
        </section>

        <section id="income"></section>
      </section>
      <section class="park">
        <section id="park-space"></section>
        <section class="park-space">
          <div class="park-title">
            <span class="txt-font14">当前空余车位</span>
            <span class="txt-font52">{{parkleftedNum}}</span>
            <span class="txt-font20">/ 3200</span>
          </div>
          <section class="car-flow">
            <div class="flow-today">
              <span class="txt-font16">今日车流量</span>
              <span class="txt-font32">{{flowNumToday}}</span>
            </div>
            <div class="flow-progress">
              <div class="flow-icon" v-bind:style="{left: flowRateToday }"></div>
              <div class="flow-progress-today" v-bind:style="{width: flowRateToday }"></div>
            </div>
          </section>
          <section class="car-flow">
            <div class="flow-average">
              <span class="txt-font16">日均车流量</span>
              <span class="txt-font32">{{flowNumAverage}}</span>
            </div>
            <div class="flow-progress">
              <div class="flow-icon" v-bind:style="{left: flowRateAverage}"></div>
              <div class="flow-progress-average" v-bind:style="{width: flowRateAverage }"></div>
            </div>
          </section>
        </section>
      </section>
    </section>

    <section class="wrapper">
      <div class="title">访客统计</div>
      <section class="visitor">
        <div class="sub-title">访客人数统计</div>
        <div class="frame txt-font24">
          本天访问人数
          <span class="txt-font40">{{TodayCount}}</span>
        </div>
        <div class="frame txt-font24">
          昨日访问人数
          <span class="txt-font40">{{YesterdayCount}}</span>
        </div>
        <div class="frame txt-font24">
          本月访问人数
          <span class="txt-font40">{{CurrentMonthCount}}</span>
        </div>
        <div class="frame txt-font24">
          访问总人次
          <span class="txt-font40">{{AllCount}}</span>
        </div>
      </section>
      <section class="visitor">
        <section class="user">
          <div class="sub-title">用户进出统计</div>
          <section id="user"></section>
        </section>
        <section class="gate">
          <div class="sub-title">闸机情况统计</div>
          <div class="gate-wrapper">
            <table class="gate-table">
              <thead>
                <tr class="txt-font16">
                  <th>序号</th>
                  <th>设备名称</th>
                  <th>出入口名称</th>
                  <th>进出次数</th>
                </tr>
              </thead>
              <tbody>
                <tr class="txt-font16" v-for="item in currentDevice" :key="item.num">
                  <td class="serial-num">{{item.num}}</td>
                  <td class="device-name">{{item.DeviceName}}</td>
                  <td>{{item.DoorwayName}}</td>
                  <td class="fail-num">{{item.InOutCount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import Count from "@/js/animation-count.js";
let that = null;
export default {
  name: "left-side",
  data() {
    return {
      // 收费
      LastMonthTotalAmount: 1,
      LastMonthFeeRate: 1,
      YearTotalAmount: 1,
      YearFeeRate: 1,
      fee: {
        x: ["7月", "8月", "9月", "10月", "11月", "12月"],
        list: [
          [120, 132, 101, 134, 90, 230, 210],
          [220, 182, 191, 234, 290, 330, 310],
          [150, 232, 201, 154, 190, 330, 410],
          [320, 332, 301, 334, 390, 330, 320]
        ]
      },
      feeOption: {
        grid: {
          left: "8%",
          top: "4%",
          bottom: "20%",
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
      },
      // 巡更安防
      securityOption: {
        legend: {
          orient: "vertical",
          align: "left",
          x: "right",
          y: "center",
          itemGap: 58,
          left: 300,
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
            radius: ["60%", "96%"],
            center: ["24%", "50%"],
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
      },
      // 投报修
      repairOption: {
        legend: {
          orient: "vertical",
          align: "left",
          x: "right",
          y: "center",
          itemGap: 58,
          left: 300,
          data: [
            { name: "投诉次数", value: 56, icon: "circle" },
            { name: "报修次数", value: 56, icon: "circle" }
          ],
          itemWidth: 14,
          textStyle: {
            color: "#FEFEFE",
            fontSize: 16,
            padding: [0, 12],
            rich: { num: { fontSize: 36 } }
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["60%", "96%"],
            center: ["24%", "50%"],
            roseType: "radius",
            avoidLabelOverlap: false,
            label: { normal: { show: false }, emphasis: { show: true } },
            lableLine: { normal: { show: false }, emphasis: { show: true } },
            data: [
              { value: 56, name: "投诉次数", itemStyle: { color: "#6694ff" } },
              { value: 44, name: "报修次数", itemStyle: { color: "#3d4966" } }
            ]
          }
        ]
      },
      //工单
      orderOption: {
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
          min: 0,
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
          offset: 5,
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
            label: {
              show: true,
              position: "right",
              distance: 10,
              color: "#FFFFFF",
              fontSize: 18,
              verticalAlign: "middle",
              formatter: "{c}件"
            },
            barWidth: 18,
            data: [324, 720, 900, 324]
          }
        ]
      },
      //停车
      parkNum: 0,
      parkRate: 48,
      parkleftedNum: 1200,
      flowNumToday: 3200,
      flowRateToday: "50%",
      flowNumAverage: 2000,
      flowRateAverage: "30%",
      parkOption: {
        grid: {
          left: "0%",
          right: "0%",
          bottom: "4%"
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
      },
      // 停车收入
      incomeTotal: 20000,
      incomeAverage: 2000,
      incomeToday: 200,

      incomeOption: {
        grid: { top: "8%", right: "4%" },
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
            barWidth: 18,
            label: {
              show: true,
              position: "top",
              distance: 10,
              color: "#FFFFFF",
              fontSize: 18,
              verticalAlign: "middle",
              formatter: "{c}元"
            }
          }
        ]
      },
      // 访客
      TodayCount: 3000,
      YesterdayCount: 3000,
      CurrentMonthCount: 3000,
      AllCount: 3000,
      DeviceStatistics: [],
      currentDevice: [
        {
          num: 1,
          DeviceName: "展厅进门左侧1号",
          DoorwayName: "展厅左进1",
          InOutCount: 0
        },
        {
          num: 2,
          DeviceName: "展厅进门左侧2号",
          DoorwayName: "展厅左进2",
          InOutCount: 0
        },
        {
          num: 3,
          DeviceName: "展厅进门右侧1号",
          DoorwayName: "展厅右进1",
          InOutCount: 0
        },
        {
          num: 4,
          DeviceName: "展厅进门右侧2号",
          DoorwayName: "展厅右进2",
          InOutCount: 140
        }
      ],
      userOption: {
        legend: {
          orient: "vertical",
          align: "left",
          x: "right",
          y: "center",
          itemGap: 34,
          left: 300,
          data: [
            { name: "物业人员", icon: "circle" },
            { name: "住户", icon: "circle" },
            { name: "商户", icon: "circle" },
            { name: "临时访客", icon: "circle" },
            { name: "其他", icon: "circle" }
          ],
          itemWidth: 14,
          textStyle: { color: "#FEFEFE", fontSize: 16, padding: [0, 12] }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["60%", "90%"],
            center: ["24%", "50%"],
            roseType: "radius",
            avoidLabelOverlap: false,
            label: { normal: { show: false }, emphasis: { show: true } },
            lableLine: { normal: { show: false }, emphasis: { show: true } },
            data: [
              { value: 42, name: "物业人员", itemStyle: { color: "#6694FF" } },
              { value: 20, name: "住户", itemStyle: { color: "#596A94" } },
              { value: 20, name: "商户", itemStyle: { color: "#2667FF" } },
              { value: 8, name: "临时访客", itemStyle: { color: "#2097E3" } },
              { value: 10, name: "其他", itemStyle: { color: "#1F5E99" } }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    that = this;

    this.getFee();
    this.drawFee();
    this.drawSecurity();
    this.drawRepair();
    this.drawOrder();
    this.drawPark();
    this.drawIncome();
    this.drawUser();
    this.getRepair();
    this.getOrder();
    this.getSecurity();
    this.getPark();
    this.getVistor();
    this.refresh();
  },
  methods: {
    // 月度收费统计折线图
    drawFee() {
      let LineGraph = this.$echarts.init(
        document.getElementById("month-chart")
      );
      LineGraph.setOption(this.feeOption);
    },
    // 巡更安防统计-饼图
    drawSecurity() {
      let securityGraph = this.$echarts.init(
        document.getElementById("security")
      );
      securityGraph.setOption(this.securityOption);
    },
    // 投报修情况统计-饼图
    drawRepair() {
      let repairGraph = this.$echarts.init(document.getElementById("repair"));

      repairGraph.setOption(this.repairOption);
    },
    // 工单处理时效统计-柱状图
    drawOrder() {
      let orderGraph = this.$echarts.init(document.getElementById("order"));
      orderGraph.setOption(this.orderOption);
    },
    //停车-仪表图
    drawPark() {
      let parkGraph = this.$echarts.init(document.getElementById("park-space"));
      parkGraph.setOption(this.parkOption);
    },
    //停车收入——柱状图
    drawIncome() {
      let incomeGraph = this.$echarts.init(document.getElementById("income"));
      incomeGraph.setOption(this.incomeOption);
    },
    //
    drawUser() {
      let userGraph = this.$echarts.init(document.getElementById("user"));
      userGraph.setOption(this.userOption);
    },
    // 收费统计
    getFee() {
      this.ajax
        .get("/FeeSummary/GetPanelStatistics?OwnerID=1157")
        .then(function(res) {
          let resData = res.data;
          if (resData.Code === 10000) {
            let result = resData.Data,
              list = result.List,
              payModel = [10, 20, 30, 40, 50, 60], //停车缴费 停车场买卡 广告发布 物业缴费 其他临时收费 直接收费
              month = [],
              tempList = [],
              monthFee = [],
              feeList = [];

            feeList[0] = list.filter(function(item) {
              return item.PayModel === 10;
            });
            feeList[1] = list.filter(function(item) {
              return item.PayModel === 20;
            });
            feeList[2] = list.filter(function(item) {
              return item.PayModel === 40;
            });
            feeList[3] = list.filter(function(item) {
              return item.PayModel === 50;
            });
            feeList[0].forEach(function(item) {
              month.push(item.Month + "月");
              tempList.push(item.PayAmount);
            });
            monthFee.push(tempList);
            tempList = [];
            feeList[1].forEach(function(item) {
              tempList.push(item.PayAmount);
            });
            monthFee.push(tempList);
            tempList = [];
            feeList[2].forEach(function(item) {
              tempList.push(item.PayAmount);
            });
            monthFee.push(tempList);
            tempList = [];
            feeList[3].forEach(function(item) {
              tempList.push(item.PayAmount);
            });
            monthFee.push(tempList);

            if (typeof that.LastMonthTotalAmount == "string") {
              that.LastMonthTotalAmount = parseInt(
                that.LastMonthTotalAmount.split(",").join("")
              );
            }
            if (typeof that.LastMonthFeeRate == "string") {
              that.LastMonthFeeRate = parseInt(
                that.LastMonthFeeRate.split(",").join("")
              );
            }
            if (typeof that.YearTotalAmount == "string") {
              that.YearTotalAmount = parseInt(
                that.YearTotalAmount.split(",").join("")
              );
            }
            if (typeof that.YearFeeRate == "string") {
              that.YearFeeRate = parseInt(that.YearFeeRate.split(",").join(""));
            }
            let LastMonthTotalAmountPrev = that.LastMonthTotalAmount,
              LastMonthFeeRatePrev = that.LastMonthFeeRate,
              YearTotalAmountPrev = that.YearTotalAmount,
              YearFeeRatePrev = that.YearFeeRate;
            that.LastMonthTotalAmount = Math.round(result.LastMonthTotalAmount);
            let count = new Count();
            count.init(
              LastMonthTotalAmountPrev,
              that.LastMonthTotalAmount,
              function(value, beauty) {
                that.LastMonthTotalAmount = value;
              }
            );

            that.LastMonthFeeRate = Math.ceil(result.LastMonthFeeRate * 100);
            let count1 = new Count();
            count1.init(LastMonthFeeRatePrev, that.LastMonthFeeRate, function(
              value
            ) {
              that.LastMonthFeeRate = value;
            });
            that.YearTotalAmount = Math.round(result.YearTotalAmount);
            let count2 = new Count();
            count2.init(YearTotalAmountPrev, that.YearTotalAmount, function(
              value,
              beauty
            ) {
              that.YearTotalAmount = value;
            });
            that.YearFeeRate = Math.ceil(result.YearFeeRate * 100);
            let count3 = new Count();
            count3.init(YearFeeRatePrev, that.YearFeeRate, function(value) {
              that.YearFeeRate = value;
            });
            that.feeOption.xAxis.data = month;
            that.feeOption.series.forEach(function(item, index) {
              item.data = monthFee[index];
            });
            that.drawFee();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 巡更安防统计
    getSecurity() {
      this.ajax
        .get("/PatrolStatistics/GetPatrolPlanDT?OwnerID=1157")
        .then(function(res) {
          let resData = res.data;
          if (resData.Code === 10000) {
            let result = resData.Data,
              type = ["FinishCount", "OvertimeCount", "NotFinishCount"];
            that.securityOption.series[0].data.forEach(function(item, index) {
              item.value = result[type[index]];
            });
            that.drawSecurity();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 投报修情况统计
    getRepair() {
      this.ajax
        .get("/WordOrderStatistics/GetWorkOrderTypeCount?OwnerID=1157&Data={}")
        .then(function(res) {
          let resData = res.data;
          if (resData.Code === 10000) {
            let result = resData.Data;
            that.repairOption.series[0].data.forEach(function(item, index) {
              // "workordertype":{"0":"报修","1":"投诉"}
              item.value = result[1 - index].Count;
            });
            that.drawRepair();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 工单处理时效统计
    getOrder() {
      this.ajax
        .get(
          "/WordOrderStatistics/GetDealEfficiency?OwnerID=1157&ProjectCode=115701&Data={}"
        )
        .then(function(res) {
          let resData = res.data;
          if (resData.Code === 10000) {
            let result = resData.Data,
              type = ["超过一天", "24小时内处理", "3小时内处理", "1小时内处理"],
              list = [];
            for (let i = 0; i < 4; i++) {
              list.push(result[type[i]]);
            }
            that.orderOption.series[0].data = list;
            that.orderOption.xAxis.max = Math.max.apply(null, list) * 2;
            that.drawOrder();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 停车场统计
    getPark() {
      // data: 车位使用数 日均车流量 本日车流量
      this.ajax
        .get("ParkingOutinlog/InParkCarCount")
        .then(function(res) {
          let resData = res.data;
          if (resData.Code === 10000) {
            let result = resData.Data;
            that.$root.parkingSpace = result;
            that.parkNum = result[0];
            that.flowNumToday = result[1];
            that.flowNumAverage = result[2];
            that.parkleftedNum = 3200 - result[0];
            that.parkRate = Math.ceil((result[0] / 3200) * 100);
            that.flowRateToday = Math.ceil((result[1] / 10000) * 100) + "%";
            that.flowRateAverage = Math.ceil((result[2] / 10000) * 100) + "%";
            that.parkOption.series[0].data[0].value = that.parkRate;
            that.drawPark();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 访客统计
    getVistor() {
      this.ajax
        .get("/DeviceRecordofaccess/GetVisterStatisticsModel?OwnerID=1157")
        .then(function(res) {
          let resData = res.data;
          if (resData.Code === 10000) {
            let result = resData.Data,
              type = [
                "OwnerCount",
                "UserCount",
                "ShopCount",
                "VisterCount",
                "OtherCount"
              ];
            that.TodayCount = result.TodayCount;
            that.YesterdayCount = result.YesterdayCount;
            that.CurrentMonthCount = result.CurrentMonthCount;
            that.AllCount = result.AllCount;
            result.DeviceStatistics.forEach(function(item, index) {
              item.num = index + 1;
            });
            that.DeviceStatistics = result.DeviceStatistics;
            that.currentDevice = result.DeviceStatistics.slice(0, 4);
            that.userOption.series[0].data.forEach(function(item, index) {
              item.value = result.UserInOutStatistics[type[index]];
            });
            that.drawUser();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 定时更新
    refresh() {
      let minute = 60 * 1000,
        currentIndex = 1,
        startIndex = 0;
      //
      setInterval(() => {
        this.getFee();
        this.getSecurity();
        this.getRepair();
        this.getOrder();
      }, minute * 5);
      //
      setInterval(() => {
        this.getVistor();
        this.getPark();
      }, minute);
      // 闸机情况统计
      setInterval(() => {
        let maxIndex = Math.ceil(that.DeviceStatistics.length / 4);
        that.currentDevice = that.DeviceStatistics.slice(
          startIndex,
          4 * currentIndex
        );
        startIndex = currentIndex >= maxIndex ? 0 : 4 * currentIndex;
        currentIndex = currentIndex >= maxIndex ? 1 : currentIndex + 1;
      }, 10 * 1000);

      // 车位收入假数据
      let count11 = new Count(),
        count12 = new Count();

      setInterval(() => {
        let currentDay = new Date(),
          currentIncome = Math.floor(Math.random() * 10);
        if (typeof that.incomeTotal == "string") {
          that.incomeTotal = parseInt(that.incomeTotal.split(",").join(""));
        }
        if (typeof that.incomeToday == "string") {
          that.incomeToday = parseInt(that.incomeToday.split(",").join(""));
        }
        let incomeTotalPrev = that.incomeTotal,
          incomeTodayPrev = that.incomeToday;

        that.incomeToday =
          that.incomeToday < 10000 ? that.incomeToday + currentIncome : 2000;
        that.incomeTotal =
          that.incomeTotal < 100000 ? that.incomeTotal + currentIncome : 30000;

        count11.init(incomeTotalPrev, that.incomeTotal, function(value) {
          that.incomeTotal = value;
        });
        count12.init(incomeTodayPrev, that.incomeToday, function(value) {
          that.incomeToday = value;
        });
      }, 10 * 1000);
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
.txt-font14 {
  font-size: 14px;
  font-weight: 400;
  color: #abb7cc;
  line-height: 14px;
}
.txt-font16 {
  font-size: 16px;
  font-weight: 400;
  color: #abb7cc;
  line-height: 16px;
}
.txt-font20 {
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
.txt-font24 {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 24px;
}
.txt-font32 {
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  line-height: 32px;
}
.txt-font40 {
  font-size: 40px;
  font-weight: bold;
  color: #0fe4f8;
  line-height: 40px;
}
.txt-font52 {
  font-size: 52px;
  font-weight: 800;
  color: #0fe4f8;
  line-height: 52px;
}
.wrapper {
  width: 1318px;
  height: 965px;
  padding-left: 80px;
  padding-right: 90px;
  padding-top: 84px;
  margin-top: 24px;
  margin-right: 42px;
  background: url(/static/images/left-bg.png) no-repeat left top;
  background-size: 100% 100%;
}
.title {
  padding-left: 34px;
  padding-bottom: 70px;
  font-size: 38px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 4px;
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
  position: relative;
  width: 446px;
  height: 8px;
  background: #2a3242;
  border-radius: 4px;
}
.finance-progress-month,
.finance-progress-all {
  display: block;
  position: absolute;
  top: 0;
  height: 8px;
  background-color: #4c82ff;
  border-radius: 4px;
}
.finance-progress-month {
  width: 52%;
}
.finance-progress-all {
  width: 20%;
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
  height: 400px;
}
.service-wrapper {
  display: flex;
  margin-bottom: 60px;
}
.service-left,
.service-right {
  flex: 1;
}
#security,
#repair {
  height: 288px;
}
#order {
  height: 250px;
}
.income-wrapper,
.park {
  display: flex;
}
.park {
  align-items: flex-end;
}
.income {
  width: 248px;
  margin-right: 45px;
}
.income-all,
.income-today {
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
  color: #abb7cc;
}
.park-space {
  flex: 1;
  margin-left: 75px;
}
#park-space {
  width: 248px;
  height: 257px;
}
#income {
  flex: 1;
  height: 320px;
}
.flow-progress {
  position: relative;
  height: 8px;
  margin-top: 24px;
  background: #152336;
  border-radius: 4px;
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
.car-flow:nth-of-type(1) {
  margin-bottom: 44px;
}
.flow-today,
.flow-average {
  align-self: flex-end;
}
.flow-today span:first-child,
.flow-average span:first-child {
  margin-right: 12px;
}
.flow-icon {
  position: absolute;
  top: -20px;
  width: 30px;
  height: 17px;
  background: url(/static/images/car.png) no-repeat top;
  background-size: 100%;
}
.flow-progress-today,
.flow-progress-average {
  position: absolute;
  top: 0;
  height: 8px;
  background-color: #4c82ff;
  border-radius: 4px;
}
.visitor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.frame {
  width: 428px;
  height: 84px;
  padding-left: 64px;
  padding-top: 24px;
  margin: 0 22px 60px;
  background: url(/static/images/frame.png) no-repeat left;
  background-size: 100% 100%;
}
.frame span {
  margin-left: 28px;
}
.user,
.gate {
  flex: 1;
}
#user {
  height: 300px;
}
.gate-wrapper {
  width: 538px;
  height: 297px;
  background: url(/static/images/table.png) no-repeat left;
  background-size: 100% 100%;
}
.gate-table > thead > tr {
  height: 45px;
  text-align: center;
  color: #0fe4f8;
}
.gate-table > tbody > tr {
  height: 60px;
  text-align: center;
  color: #ffffff;
}
.serial-num {
  color: #abb7cc;
}
.fail-num {
  color: #0fe4f8;
}
.device-name {
  width: 120px;
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
}
</style>

