<template>
    <dl class="tempreture" style="color:#fff;">
        <dt style="font-size:13px;color:#8d8e99;">{{name}}</dt>
        <dd style="font-size:15px;">{{position}}</dd>
        <dd style="font-size:50px;line-height:2;">{{tempreture}}°C</dd>
        <dd style="margin-top:10px;"><span :class="state"></span></dd>
        <dd class="figure" aria-hidden="true"><span class="figure-1" :style="`transform:translateY(-${tempreture}%)`"></span></dd>
    </dl>
</template>
<script>
export default {
    props:{
        name:{
            type:String,
            default:'空调'
        },
        position:{
            type:String,
            default:'A塔-39层'
        },
        tempreture:{
            type:Number,
            default:24
        }
    },
    computed:{
        state:function(){
            return this.getState();
        }
    },
    methods:{
        getState:function(){
            let tempreture=this.tempreture;
            if(tempreture<18){
                return 'lower'
            }else if(tempreture<28){
                return 'normal'
            }else{
                return 'higher'
            }
        }
    }
}
</script>
<style scoped>
    .tempreture{
        position:relative;
        padding-left:40px;
        padding-top:10px;
        min-height: 188px;
    }
    .figure{
        position: absolute;
        left:0;
        top:0;
        width:14px;
        height:188px;
        z-index:100;
        mask:url('/static/images/tempreture-mask.svg') no-repeat;
        background-color:#717171;
    }
    .figure-1{
        position: absolute;
        left:0;
        bottom:-100%;
        width:14px;
        height:188px;
        background-color:#4d82ff;
        border-top-left-radius:7px;
        border-top-right-radius:7px;
        z-index:10;
        transition:transform .3s ease-in;
    }
    .normal{
        display:inline-block;
        height:22px;
        width:56px;
        background-image:url('/static/images/device-normal.png');
        background-repeat: no-repeat;
    }
</style>
