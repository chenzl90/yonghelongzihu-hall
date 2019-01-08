import lowerUrl from '@/../static/images/towera-floor-state-lower.png'
import higherUrl from '@/../static/images/towera-floor-state-higher.png'
import lowerUrlb from '@/../static/images/towerb-floor-state-higher.png'
import higherUrlb from '@/../static/images/towerb-floor-state-lower.png'
const towers = [{
    name: 'A塔',
    frequency:0.6,
    floors: [4,8,11]||[1,11,11],
    floorHeight:96,
    perFloorRooms: 60,
    duration:180000,
    state: {
      height: 76,
      width: 696,
      top: 396,
      left: 2247,
      url: [lowerUrlb, higherUrlb],
      style: 'float:right;margin-top:-76px;'
    }
  },
  {
    name: 'B塔',
    frequency:0.6,
    floors: [5,9,11]||[1,11,11],
    floorHeight:96,
    perFloorRooms: 60,
    duration:180000,
    state: {
      height: 128,
      width: 969,
      top: 366,
      left: 415,
      url: [lowerUrl, higherUrl]
    }
  }
];
let config = {
  container: 'body'
};

function FloorState(option) {
  Object.assign(this, config, option || {});
  this.tempretureRange = [18, 25];
}
FloorState.prototype.addState = function (option, state) {
  let element = document.createElement('div');
  let container = document.querySelector(this.container);
  let stateConfig = option.state;
  element.className='animation-fade-in';
  element.style.position = 'absolute';
  element.style.fontSize = '18px';
  element.style.color = '#fff';
  element.style.paddingTop = '50px';
  element.style.paddingLeft = '10px';
  element.style.left = `${stateConfig.left}px`;
  element.style.top = `${stateConfig.top+option.displacement}px`;
  element.style.width = `${stateConfig.width}px`;
  element.style.height = `${stateConfig.height}px`;
  element.style.backgroundImage = `url(${state?stateConfig.url[0]:stateConfig.url[1]})`;
  element.style.backgroundRepeat = 'no repeat';
  element.innerHTML = `<span style="line-height:1.2;${stateConfig.style}">
    <span style="float:left;margin-right:40px;">位置<br><span style="font-size:34px;color:#0febff;">${option.position}</span></span>
    <span style="float:left;">当前温度<br><span style="font-size:34px;color:${state?'#0f5eff':'#f63b81'};">${option.tempreture}度</span></span>
  <span>`;
  container.appendChild(element);
  setTimeout(function () {
    container.removeChild(element)
  }, option.duration);
};
FloorState.prototype.setTempreture = function () {
  let that = this;
  towers.forEach(function (value) {
    for (let i = value.floors[0]; i <= value.floors[1]; i++) {
      let tempreture = Math.ceil(Math.random() * 40);
      let room = Math.ceil(Math.random() * value.perFloorRooms);
      if (tempreture < that.tempretureRange[0]) {
        if (Math.random()<value.frequency) {
          setTimeout(function(){
            that.addState({
              position: `${value.name}${that.beauty(i)}${that.beauty(room)}`,
              tempreture: tempreture,
              displacement: (value.floors[2]-i) * value.floorHeight,
              state: value.state,
              duration:value.duration
            }, true);
          },10000*Math.random())
        }
      } else if (tempreture > that.tempretureRange[1]) {
        if (Math.random()<value.frequency) {
          setTimeout(function(){
            that.addState({
              position: `${value.name}${that.beauty(i)}${that.beauty(room)}`,
              tempreture: tempreture,
              displacement: (value.floors[2]-i) * value.floorHeight,
              state: value.state,
              duration:value.duration
            }, false);
          },60000*Math.random())
        }
      }
    }
  })
  setTimeout(function () {
    that.setTempreture()
  }, 240000)
};
FloorState.prototype.beauty = function (value) {
  if (value < 10) {
    return `0${value}`
  } else {
    return `${value}`
  }
}
export default FloorState
