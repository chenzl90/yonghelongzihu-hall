<template>
  <section id="tower-model" class="tower-model">
    <!--房间数及入住率-->
    <span class="room-occupancy">
      <span style="margin-right:30px;font-size:48px;color:#0febff;">52%</span>入住<br>
      <span style="margin-right:30px;font-size:48px;color:#126be7;">48%</span>空置
    </span>
    <span class="room-total">房间数<br><span style="font-size:35px;">{{rooms}}个</span></span>
    <!--商铺数及入住率-->
    <span class="room-occupancy" style="top:1263px;left:147px;">
      <span style="margin-right:30px;font-size:48px;color:#0febff;">52%</span>入住<br>
      <span style="margin-right:30px;font-size:48px;color:#126be7;">48%</span>空置
    </span>
    <span class="room-total" style="top:1098px;">商铺数<br><span style="font-size:35px;">{{shops}}个</span></span>
    <!--人口统计-->
    <span style="position:absolute;left:2726px;top:392px;font-size:27px;color:#fff;">
      总人数<span style="margin-left:30px;font-size:50px;color:#0febff;">{{totalNumber}}</span><br>
      总车数<span style="margin-left:30px;font-size:50px;color:#126be7;">{{totalNumberCar}}</span>
    </span>
    <span style="position:absolute;left:3265px;top:414px;font-size:27px;color:#fff;line-height: 1.2;">
      男女比例<br><span style="font-size:84px;color:#0febff;">1:1</span>
    </span>
    <!--车位统计-->
    <span class="room-occupancy" style="left:2893px;top:1228px;">
      <span style="margin-right:30px;font-size:48px;color:#0febff;">52%</span>购买<br>
      <span style="margin-right:30px;font-size:48px;color:#126be7;">48%</span>空闲
    </span>
    <span class="room-total" style="left:2752px;top:1563px;line-height: 1.4;">
      剩余停车位<br>
      <span style="font-size:48px;color:#0febff;">{{parkingSpace||0}}/</span>
      <span style="font-size:32px;color:#fff;">3200</span>
    </span>
  </section>
</template>
<script>
  import Elevator from '@/js/Elevator.js'
  import FloorState from '@/js/floor-state.js'
  import Count from '@/js/animation-count.js'
  export default {
    data: function () {
      return {
        elevatorPositions: [{
            top: 432,
            left: 747,
            doorSide: 'Right'
          },
          {
            top: 238,
            left: 1540,
            doorSide: 'Left'
          },
          {
            top: 246,
            left: 1761,
            doorSide: 'Right'
          },
          {
            top: 174,
            left: 2272,
            doorSide: 'Left'
          },
          {
            top: 398,
            left: 2522,
            doorSide: 'Left'
          }
        ],
        remainParkingSpace:0,
        remainParkingSpaceLoading:true,
        totalNumber:36000000,
        totalNumberCar:0,
        parkingSpace:0,
        shops:12000,
        rooms:12000
      }
    },
    mounted: function () {
      this.init();
    },
    watch:{
      '$root.parkingSpace':function(value){
        let count=new Count();
        let count2=new Count();
        let that=this;
        count.init(0,32000-value[0],function(value,beauty){
          that.parkingSpace=value;
        })
        count2.init(0,value[0],function(value,beauty){
          that.totalNumberCar=beauty;
        })
      }
    },
    methods: {
      init: function () {
        let that = this;
        this.count();
        this.$nextTick().then(function () {
          that.addElevators();
          that.addFloorsState();
        })
      },
      addElevators: function () {
        this.elevatorPositions.forEach(function (value) {
          let elevator = new Elevator({
            container: '#tower-model',
            top: value.top,
            left: value.left,
            doorSide: value.doorSide
          });
          elevator.init();
        })
      },
      addFloorsState: function () {
        let floorState = new FloorState({
          container: '#tower-model'
        });
        floorState.setTempreture();
      },
      count:function(){
        let count=new Count();
        let count2=new Count();
        let count3=new Count();
        let count4=new Count();
        let that=this;
        count.init(0,this.totalNumber,function(value,beauty){
          that.totalNumber=beauty;
        });
        count2.init(0,this.totalNumberCar,function(value,beauty){
          that.totalNumberCar=beauty;
        });
        count3.init(0,this.rooms,function(value,beauty){
          that.rooms=beauty;
        });
        count4.init(0,this.shops,function(value,beauty){
          that.shops=beauty;
        });
      }
    }
  }

</script>
<style scoped>
  .tower-model {
    position: relative;
    width: 3479px;
    height:2050px;
    margin: 0 auto;
    background-size: 3479px 1968px;
    background-image: url('/static/images/building.png');
    background-repeat: no-repeat;
    background-position: center top;
  }

  .room-occupancy {
    position: absolute;
    left: 80px;
    top: 350px;
    width: 240px;
    height: 180px;
    color: #fff;
    font-size: 30px;
  }

  .room-total {
    position: absolute;
    left: 620px;
    top: 468px;
    font-size: 20px;
    color: #fff;
  }
</style>
