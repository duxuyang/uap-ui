import Vue from 'vue'
import vueToastMessage from './toast.vue';
//扩展实例构造器
let ToastConstructor = Vue.extend(vueToastMessage);
/**
 *Array toastPool 存储vue构造器 一个页面使用过程中多次使用toast，只需实例化一次即可
 *
 * getAnInstance  获取构造器实例化
 * 
 * duration  持续时间  默认3秒  传0或者不传默认一直状态
 * uapToast  打开弹框
 * success  成功提示
 * fail   失败提示
 * cancel  取消提示
 * close  关闭loading
 * mask  Boolean  阴影背景  默认没有
 * type  String  类型
 */

let toastPool = [];
let instance=null;
let uapToast;
let getAnInstance = () => {
  if (toastPool.length > 0) {
    instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor();
}

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};


//文字提示
 uapToast=(options= {})=>{
  let duration = options.duration || 2000;
   instance =getAnInstance();
  if(typeof options==='string'){
    instance.message = options;
  }else if(typeof options==='object'){
    instance.message=options.message;
  }else{
    return ;
  }
    instance.uapclassbox.uapcontext=true;
    options.mask?instance.mask=true:instance.mask=false;
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    Vue.nextTick(function() {
      setTimeout(()=>{
        document.body.removeChild(instance.vm.$el);
        returnAnInstance(instance);
        instance.uapclassbox.uapcontext=false;
      }, duration)
    });
}


//loading
uapToast.loading=(options= {})=>{
  let duration = options.duration;
   instance =getAnInstance();
  if(typeof options==='string'){
    instance.message = options;
  }else if(typeof options==='object'){
    instance.message=options.message;
  }else{
    return ;
  }
    options.mask?instance.mask=true:'';
    instance.type="loading";
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.closed = false;
    Vue.nextTick(function() {
      if(duration){
        setTimeout(()=>{
          document.body.removeChild(instance.vm.$el);
          returnAnInstance(instance);
          instance.type="";
          instance.closed = true;
        },duration)
      }
    });
    
}
//关闭
uapToast.loading.close=()=>{
  if(instance && !instance.closed){
    document.body.removeChild(instance.vm.$el);
    instance.closed = true;
    toastPool.push(instance);
  }
}
//成功
uapToast.success=(options= {})=>{
    instance =getAnInstance();
    resolves(instance,options,"success");
}

//失败
uapToast.fail=(options= {})=>{
   instance =getAnInstance();
   resolves(instance,options,"fail");
}
//取消
uapToast.cancel=(options= {})=>{
   instance =getAnInstance();
   resolves(instance,options,"cancel");
}

let isd=true;
function resolves(instance,options,types){
  if(!isd) return ;
  isd=false;
  let duration = options.duration || 2000;
  if(typeof options==='string'){
    instance.message = options;
  }else if(typeof options==='object'){
    instance.message=options.message;
  }else{
    return ;
  }
  instance.type=types;
  options.mask?instance.mask=true:instance.mask=false;
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  Vue.nextTick(function() {
    setTimeout(()=>{
      document.body.removeChild(instance.vm.$el);
      returnAnInstance(instance);
      instance.type="";
      isd=true;
    }, duration)
  });
}





export default uapToast