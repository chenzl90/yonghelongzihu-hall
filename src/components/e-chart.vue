<template>
    <div class="wrapper" ref="container"></div>
</template>
<script>
import echarts from 'echarts'
export default {
    props:{
        option:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    watch:{
        option:function(){
            this.chart.setOption(option)
        }
    },
    mounted:function(){
        this.init()
    },
    methods:{
        init:function(){
            this.chart=echarts.init(this.$refs.container);
            this.chart.setOption(this.option)
        }
    }
}
</script>