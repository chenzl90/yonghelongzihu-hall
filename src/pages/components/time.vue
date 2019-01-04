<template>
  <div style="font-size:36px;color:#0febff;text-align:center;">
      {{clock[0]}}<span :style="visible?'':'opacity:0'">:</span>{{clock[1]}}
      <div style="font-size:18px;">{{date}}</div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        visible:true,  
        clock:['00','00'],
        date: '2018/12/19'
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      init: function () {
        let that = this;
        this.timerId = setInterval(function () {
            let time=new Date();
            that.clock=time.toTimeString().slice(0,5).split(':')
            that.date=`${time.getFullYear()}/${time.getMonth()+1}/${time.getDate()}`;
            that.visible=!that.visible;
        },1000)
        this.$once('hook:beforeDestroy', function () {
          clearInterval(that.timerId)
        })
      }
    }
  }

</script>