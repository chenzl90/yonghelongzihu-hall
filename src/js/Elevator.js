let config={
    container:'body',
    width:'38px',
    height:'56px',
    color:'#fff',
    doorStyle:'#0f5eff',
    left:0,
    top:0,
    floorHeight:''
};
function Elevator(option){
    Object.assign(this,config,option||{});
    let element=document.createElement('div');
    element.style.position='absolute';
    element.style.left=this.left;
    element.style.top=this.top;
    element.style.width=this.width;
    element.style.height=this.height;
    element.style.backgroundColor=this.color;
    element.style.borderRightStyle=`6px solid ${this.doorStyle}`;
    this.element=element;
}
Elevator.prototype.animation=function(){

}
export default Elevator