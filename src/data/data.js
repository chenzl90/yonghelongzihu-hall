const alarmStatistics={
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top:'2%',
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'强电设备',
            type:'line',
            stack: '总量',
            data:[100, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
        },
        {
            name:'弱电设备',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,191, 234, 290, 330, 310]
        },
        {
            name:'通暖空调',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410,201, 154, 190, 330, 410]
        },
        {
            name:'给水排点设备',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320,301, 334, 390, 330, 320]
        },
        {
            name:'升降设备',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320,901, 934, 1290, 1330, 1320]
        },
        {
            name:'消防设备',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320,901, 934, 1290, 1330, 1320]
        },
        {
            name:'电梯设备',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320,901, 934, 1290, 1330, 1320]
        },
        {
            name:'其他设备',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320,901, 934, 1290, 1330, 1320]
        }
    ]
};
const powerConsumeStatistics={
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            type:'pie',
            name:'当前数据',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'公共区域', selected:true},
                {value:679, name:'非公共区域'}
            ]
        },
        {
            type:'pie',
            name:'当前数据',
            radius: ['40%', '55%'],
            data:[
                {value:335, name:'能源控制器'},
                {value:310, name:'用水量'},
                {value:234, name:'用电量'},
                {value:135, name:'天然气用量'}
            ]
        }
    ]
};
const powerConsumeStatisticsTime={
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top:'2%',
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'强电设备',
            type:'line',
            stack: '总量',
            data:[100, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
        }
    ]
};
export {
    alarmStatistics,
    powerConsumeStatistics,
    powerConsumeStatisticsTime
}