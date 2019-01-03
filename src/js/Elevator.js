let config = {
  container: 'body',
  width: '38',
  height: '56',
  color: '#fff',
  doorStyle: '#0f5eff',
  fullLoadColor: '#f53b81',
  fontSize: 20,
  doorSide: 'Right',
  left: 0,
  top: 0,
  floors: 18
};

function Elevator(option) {
  let that = this;
  Object.assign(this, config, option || {});
  let element = document.createElement('div');
  element.className = 'layout-tr-center';
  element.style.fontSize = `${this.fontSize}px`;
  element.style.position = 'absolute';
  element.style.left = `${this.left}px`;
  element.style.top = `${this.top}px`;
  element.style.width = `${this.width}px`;
  element.style.height = `${this.height}px`;
  element.style.backgroundColor = this.color;
  element.style[`border${this.doorSide}`] = `6px solid ${this.doorStyle}`;
  this.element = element;
  this.element.addEventListener('transitionend', function () {
    that.clear();
  }, false)
}
Elevator.prototype.clear = function () {
  this.element.style[`border${this.doorSide}`] = `6px solid ${this.doorStyle}`;
  this.element.style.color = this.doorStyle;
  this.element.textContent = '';
}
Elevator.prototype.loading = function () {
  if (Math.random() < 0.2) {
    this.element.style[`border${this.doorSide}`] = `6px solid ${this.fullLoadColor}`;
    this.element.style.color = this.fullLoadColor;
    this.element.textContent = '满';
  } else {
    this.element.style[`border${this.doorSide}`] = `6px solid ${this.doorStyle}`;
    this.element.style.color = this.doorStyle;
    this.element.textContent = '';
  }
};
Elevator.prototype.animation = function () {
  let displacement = Math.ceil(Math.random() * this.floors) * this.height;
  let time = Math.sqrt(Math.sqrt(displacement));
  let that = this;
  this.loading();
  this.element.style.transition = `transform ${Math.ceil(time*1000)}ms cubic-bezier(0.32, 0.01, 0.57, 1)`;
  this.element.style.transform = `translateY(${displacement}px)`;
  setTimeout(function () {
    that.animation()
  }, 10000 * Math.random() + time * 1000)
}
Elevator.prototype.init = function () {
  let that = this;
  document.querySelector(this.container).appendChild(this.element);
  setTimeout(function () {
    that.animation()
  }, 100)
}
export default Elevator
