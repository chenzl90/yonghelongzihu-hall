<template>
  <article>
    <h1 class="header"><span class="glb-for-screen">微羽物业大数据运营平台</span></h1>
    <ul class="layout-tr">
      <li></li>
      <li class="layout-td">
          <model-center></model-center>
      </li>
      <li></li>
    </ul>
  </article>
</template>
<script>
  export default {
      components:{
         modelCenter:function(){
             return import('@/components/center.vue')
         } 
      }
  }

</script>
