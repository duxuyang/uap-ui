<template>
  <div >
    <div :class="classObject">
      <ul class="uap-actionsheet-list" >
        <li v-for="( item, index ) in actions" :key="index" class="uap-actionsheet-listitem" @click.stop="itemClick(item, index)">{{ item }}</li> 
      </ul>
      <a class="uap-actionsheet-button" @click.stop="currentValue = false" >取消</a>
    </div>
    <div class="uap-modal"  v-show="currentValue"></div>
  </div>
  
</template>

<script>
  export default {
    name:'uap-actions',
    props:['actions',"value"],
    data() {
      return {
        currentValue:this.value,
        classObject:{
          uapactionsheet:true,
          uapshow:false
        }
      }
    },
    methods:{
      itemClick(item, index){
        this.$emit('getdata', item);
         this.currentValue = false;
      }
    },
    watch: {
      value(val){
        val?this.classObject.uapshow=true:this.classObject.uapshow=false;
        this.currentValue=val;
      },
      currentValue(val){
        this.$emit('input', val);
      }
    },
  }
</script>

<style lang="less" scoped>

.uapactionsheet {
  position: fixed;
  background: #e0e0e0;
  width: 100%;
  text-align: center;
  bottom: -142px;
  left: 0;
  right: 0;
  transition: bottom .3s ease-out;
  z-index: 1001;
  // -webkit-transition: -webkit-transform .3s ease-out;
  // transition: -webkit-transform .3s ease-out;
  // transition: transform .3s ease-out;
  // transition: transform .3s ease-out, -webkit-transform .3s ease-out;
}
.uapshow{
   bottom: 0;
}

.uap-actionsheet-list {
  list-style: none;
  padding: 0;
  margin-bottom: 5px;
}
.uap-actionsheet-listitem {
  border-bottom: solid 1px #e0e0e0;
}
.uap-actionsheet-listitem, .uap-actionsheet-button {
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  color: #333;
  background-color: #fff;
}
.uap-actionsheet-listitem:active, .uap-actionsheet-button:active {
  background-color: #f0f0f0;
}

.uap-modal{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
  z-index: 1000;
}



</style>