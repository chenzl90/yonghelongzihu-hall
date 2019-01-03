<template>
    <section>
        <h2 class="title">设备实时预警</h2>
        <ul class="wrapper layout-tr">
            <li class="layout-td layout-tr-center" v-for="(item,index) in option" :key="index">
                <model-tempreture v-bind="item"></model-tempreture>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props:{
        option:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    components:{
        modelTempreture:function(){
            return import('./components/tempreture');
        }
    }
}
</script>
<style scoped>
    .title{
       margin-bottom:20px; 
       color:#fff;
       font-size:24px;
       line-height: 1.2; 
    }
    .wrapper{
        width:1150px;
        height:248px;
        background-image:url('/static/images/device-alarm-bk.png');
        background-repeat: no-repeat;
        background-size:1150px 248px;
    }
    .wrapper li+li{
        position:relative;
    }
    .wrapper li+li::after{
        content:'';
        position:absolute;
        left:0;
        top:50%;
        margin-top:-34px;
        height:68px;
        width:1px;
        background-color:#313133;
    }
</style>
