<template>
  <article>
    <!-- <h1 class="header">
        <span class="glb-for-screen">微羽物业大数据运营平台</span>
        <model-time style="float:right;margin: 30px 70px 0 0;"></model-time>
    </h1> -->
    <ul class="layout-tr">
      <li style="margin-top:-130px;">
        <left-side></left-side>
      </li>
      <li class="layout-td">
        <model-center></model-center>
      </li>
      <li style="margin-top:-130px;">
        <right-side></right-side>
      </li>
    </ul>
  </article>
</template>
<script>
  export default {
    components: {
      modelCenter: function () {
        return import('@/pages/components/center.vue')
      },
      leftSide: function () {
        return import('@/components/left-side.vue')
      },
      rightSide: function () {
        return import('@/pages/components/right-side.vue')
      },
      modelTime: function () {
        return import('@/pages/components/time.vue')
      }
    }
  }

</script>
<style scoped>
  .header {
    position:relative;  
    height: 192px;
    background-size: 9519px 160px;
    background-image: url('/static/images/title.png');
    background-repeat: no-repeat;
    background-position: center bottom;
  }

</style>
