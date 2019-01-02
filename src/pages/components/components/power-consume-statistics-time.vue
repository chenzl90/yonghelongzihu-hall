<template>
  <section>
    <h2 class="title">能耗实时统计情况</h2>
    <e-chart :option="option" style="height:360px;"></e-chart>
  </section>
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
  .title {
    margin-bottom: 20px;
    color: #fff;
    font-size: 24px;
    line-height: 1.2;
  }
</style>