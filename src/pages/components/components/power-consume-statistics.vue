<template>
    <div class="layout-tr">
        <e-chart style="height:340px;width:340px;" :option="option"></e-chart>
    </div>
</template>
<script>
export default {
    props:{
        option:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    components:{
        eChart:function(){
            return import('@/components/e-chart');
        }
    }
}
</script>
<style scoped>

</style>
