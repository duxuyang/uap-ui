<template>
  <div>
    <button :class="['uap-button','uap-button-'+type,'uap-button-' + size]" @click="handleClick">
      <div class="uap-button-text"><slot></slot></div>
    </button>
  </div>
</template>

<script>
/**
 * type  类型  default 默认 primary danger
 * size  大小   large normal small
 */
  export default {
     name: 'uap-button',
    props:{
      type: {
         type: String,
         default: 'default',
      },
      size:{
        type: String,
        default: 'normal'
      }
    },
    data() {
      return {
        
      }
    },
    methods:{
      handleClick(e){
        this.$emit('click', e);
      }
    }
  }
</script>

<style lang="less" scoped>

.uap-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 18px;
  height: 41px;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center
}
.uap-button::after{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0;
  content: " ";
}
.uap-button:active::after {
    opacity: .4
}
.uap-button-default {
  color: #656b79;
  background-color: #f6f8fa;
  box-shadow: 0 0 1px #b8bbbf;
}
.uap-button-primary {
  color: #fff;
  background-color: #26a2ff;
}
.uap-button-danger {
  color: #fff;
  background-color: #ef4f4f;
}


.uap-button-large {
  display: block;
  width: 100%
}
.uap-button-normal {
  display: inline-block;
  padding: 0 12px;
}
.uap-button-small {
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}


</style>