const config={
    start:0,
    count:0,
    time:1000,
    cycle:100
};
function Count(option){
    Object.assign(this,config,option||{});
}
Count.prototype.init=function(start,end,fn){
    let time=this.time;
    let cycle=this.cycle;
    let unit=Math.ceil((end-start)/(time/cycle));
    unit=unit>1?unit:1;
    let remainder=(end-start)%unit;
    let that=this;

    this.count=start;
    clearInterval(this.timerId);
    this.timerId=setInterval(function(){
        if(that.count+unit>end){
            clearInterval(that.timerId);
            that.count+=remainder;
        }else{
            that.count+=unit;
        }
        fn(that.count,that.beauty(that.count));
    },cycle);
}
Count.prototype.beauty=function(val){
    if(!val||val===''){return '';}
    val=val.toString();
    var betterVal='',
        a=[],
        index=val.indexOf('.'),
        l=parseInt(val).toString().length;

    for(var i=l;i>=3;i-=3){
        a[a.length]=val.slice(i-3,i);
    }
    if(l%3!==0){
        a[a.length]=val.slice(0,l%3);
    }
    for(i=a.length-1;i>0;i--){
        betterVal+=a[i]+',';
    }
    betterVal+=a[0];
    if(index!==-1){
        betterVal+=val.slice(index,val.length);
    }
    return betterVal;
}

export default Count