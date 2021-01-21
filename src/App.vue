<template>
<div class="parent">
  <Home/>
  <About/>
  <Services/>
  <Frequiest/>
  <ContactUS/>
  <div class="container">
    <div class="top">
      <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
    </div>  
  </div>
</div>  
</template>

<script>
import Home from"./components/Home.vue";
import About from"./components/About.vue";
import Services from"./components/Services.vue";
import Frequiest from "./components/Frequiest.vue";
import ContactUS from"./components/ContactUS.vue";


export default {
  components:{Home,About,Services,ContactUS,Frequiest}

}

</script>
<style lang="scss" scoped>
.top{
  color:white ;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: #f55858;
  font-size: 25px;
  cursor: pointer;
}
</style>
