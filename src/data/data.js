const alarmStatistics={
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top:'2%',
        left: '0%',
        right: '1%',
        bottom: '10%',
        containLabel: true
    },
    legend:{
        show:true,
        bottom:0,
        textStyle:{
            color:'#fff',
            fontSize:12
        },
        data:[
            {
                name:'强电设备',
                icon:'pin'
            },
            {
                name:'弱电设备',
                icon:'pin'
            },
            {
                name:'通暖空调',
                icon:'pin'
            },
            {
                name:'给水排点设备',
                icon:'pin'
            },
            {
                name:'升降设备',
                icon:'pin'
            },
            {
                name:'消防设备',
                icon:'pin'
            },
            {
                name:'电梯设备',
                icon:'pin'
            },
            {
                name:'其他设备',
                icon:'pin'
            }
        ]
    },
    color:['#614b99','#3d4966','#67738f','#39538f','#5c7dcc','#7d5699','#614b99','#887acc'],
    textStyle:{
        color:'#fff',
        fontSize:18
    },
    xAxis: {
        name:'(月份)',
        nameLocation:'middle',
        nameTextStyle:{
            fontSize:12,
            color:'#abb7cc',
            verticalAlign:'bottom'
        },
        axisLabel:{
            align:'right'
        },
        axisLine:{
            lineStyle:{
                color:'#0febff'
            }
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: ['1','2','3','4','5','6','7','8','9','10','11','12']
    },
    yAxis: {
        axisLabel:{
            showMinLabel:false
        },
        splitLine:{
            lineStyle:{
                color:'#1c5055'
            }
        },
        axisLine:{
            show:false
        },
        axisTick: {
            show: false
        },
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
    textStyle:{
        color:'#fff',
        fontSize:12
    },
    color:['#614b99','#5c7dcc','#6694ff','#39538f','#3d4966','#2667ff'],
    legend: {
        left:0,
        textStyle:{
            color:'#fff',
            fontSize:12
        },
        data:[
            {
                name:'公共区域',
                icon:'pin'
            },
            {
                name:'非公共区域',
                icon:'pin'
            },
            {
                name:'能源控制器',
                icon:'pin'
            },
            {
                name:'用水量',
                icon:'pin'
            },
            {
                name:'用电量',
                icon:'pin'
            },
            {
                name:'天然气用量',
                icon:'pin'
            }
        ]
    },
    series: [
        {
            type:'pie',
            label: {
                normal: {
                    formatter: '{b} {d}%',
                    position: 'inner'
                }
            },
            name:'当前数据',
            selectedMode: 'single',
            radius: [0, '40%'],
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
            label: {
                normal: {
                    formatter: '{b} {d}%'
                }
            },
            name:'当前数据',
            radius: ['60%', '75%'],
            data:[
                {value:335, name:'能源控制器'},
                {value:310, name:'用水量'},
                {value:234, name:'用电量'},
                {value:635, name:'天然气用量'}
            ]
        }
    ]
};
const powerConsumeStatisticsTime={
    tooltip: {
        trigger: 'axis'
    },
    textStyle:{
        color:'#fff',
        fontSize:18
    },
    color:['#6694ff'],
    grid: {
        top:'8%',
        left: '1%',
        right: '1%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        axisLabel:{
            align:'right'
        },
        axisLine:{
            lineStyle:{
                color:'#0febff'
            }
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00']
    },
    yAxis: {
        name:'(kw/h)',
        nameLocation:'end',
        nameTextStyle:{
            fontSize:12,
            color:'#abb7cc'
        },
        axisLabel:{
            showMinLabel:false
        },
        splitLine:{
            lineStyle:{
                color:'#1c5055'
            }
        },
        axisLine:{
            show:false
        },
        axisTick: {
            show: false
        },
        type: 'value'
    },
    series: [
        {
            name:'强电设备',
            type:'line',
            stack: '总量',
            data:[100, 132, 101, 134, 90, 230, 210,101, 134]
        }
    ]
};
const deviceAlarmTime=[
    {
        position:'A塔-29层',
        tempreture:23
    },
    {
        position:'A塔-05层',
        tempreture:19
    },
    {
        position:'A塔-12层',
        tempreture:24
    },
    {
        position:'B塔-33层',
        tempreture:25
    }
];
export {
    alarmStatistics,
    powerConsumeStatistics,
    powerConsumeStatisticsTime,
    deviceAlarmTime
}