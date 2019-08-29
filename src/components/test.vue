<template>
  <div class="main">
    <uap-button type="default" size="large">default</uap-button>
    <uap-button type="primary" size="large">primary</uap-button>
    <uap-button type="danger" size="large">danger</uap-button>
   
  </div>
</template>

<script>
import  uapButton from './ui/button/button'
  export default {
    components:{
      uapButton
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="less" scoped>
  .main{
    width:100%;
    padding:10px 20px;
  }





</style>