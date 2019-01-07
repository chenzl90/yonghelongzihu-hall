<template>
    <ul class="layout-float" style="width:1318px;padding:0 76px;">
        <li class="layout-fl device-alarm">
            <device-alarm-time :option="deviceAlarmTime"></device-alarm-time>
            <alarm-statistics :option="alarmStatistics" style="margin-top:40px;"></alarm-statistics>
        </li>
        <!-- <li class="layout-fr face-analysis">
                
        </li> -->
        <li class="layout-fl power-consume-statistics">
            <power-consume-statistics :option="powerConsumeStatistics"></power-consume-statistics>
            <power-consume-statistics-time :option="powerConsumeStatisticsTime"></power-consume-statistics-time>   
        </li>
    </ul>
</template>
<script>
import {
    alarmStatistics,
    powerConsumeStatistics,
    powerConsumeStatisticsTime,
    deviceAlarmTime} from '@/data/data.js'
export default {
    data:function(){
        return {
            alarmStatistics:alarmStatistics,
            powerConsumeStatistics:powerConsumeStatistics,
            powerConsumeStatisticsTime:powerConsumeStatisticsTime,
            deviceAlarmTime:deviceAlarmTime
        }
    },
    components:{
        deviceAlarmTime:function(){
            return import('./components/device-alarm-time/index');
        },
        alarmStatistics:function(){
            return import('./components/alarm-statistics');
        },
        powerConsumeStatistics:function(){
            return import('./components/power-consume-statistics');
        },
        powerConsumeStatisticsTime:function(){
            return import('./components/power-consume-statistics-time');
        },
    }
}
</script>
<style scoped>
    .device-alarm{
        height:965px;
        width:1318px;
        padding:180px 84px 0 84px;
        margin-bottom:25px;
        background-image:url('/static/images/device-pre-alarm-bk.png');
        background-repeat: no-repeat;
    }
    .power-consume-statistics{
        height:965px;
        width:1318px;
        padding: 180px 84px 0 84px;
        background-image:url('/static/images/power-consume-statistics-bk.png');
        background-repeat: no-repeat;
    }
    .face-analysis{
        height:1955px;
        width:1318px;
        background-image:url('/static/images/face-analysis-bk.png');
        background-repeat: no-repeat;
    }
</style>