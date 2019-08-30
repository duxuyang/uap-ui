<template>
<label class="uap-switch">
    <input class="uap-switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <div class="uap-switch-core"></div>
    <div class="uap-switch-label"><slot></slot></div>
  </label>
</template>
<script>
/**
 * @param{boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 * @example
 * <uap-switch v-model="value"></uap-switch>
 * 
 */
  export default {
    name:'uap-switch',
    props:{
      value:{
        type: Boolean,
        default: false
      },
      disabled: {
      type: Boolean,
      default: false
    }
    },
    computed: {
      currentValue:{
        get(){
          return this.value;
        },
        set(val){
          this.$emit("input",val);
        }
      }
    },
  }
</script>

<style  scoped>
.uap-switch {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.uap-switch * {
    pointer-events: none;
}
.uap-switch-label {
    margin-left: 10px;
}
.uap-switch-label:empty {
    margin-left: 0;
}
.uap-switch-core {
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  box-sizing: border-box;
  background: #d9d9d9;
}
.uap-switch-core::after, .uap-switch-core::before {
  content: " ";
  top: 0;
  left: 0;
  position: absolute;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
  border-radius: 15px;
}
.uap-switch-core::after {
  width: 30px;
  height: 30px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
}
.uap-switch-core::before {
  width: 50px;
  height: 30px;
  background-color: #fdfdfd;
}
.uap-switch-input {
  display: none;
}
.uap-switch-input:checked + .uap-switch-core {
  border-color: #EF554A;
  background-color: #EF554A;
}
.uap-switch-input:checked + .uap-switch-core::before {
   -webkit-transform: scale(0);
  transform: scale(0); 
}
.uap-switch-input:checked + .uap-switch-core::after {
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
}

</style>