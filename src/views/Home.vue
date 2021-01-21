<template>
 <div class="parent">
  <div class="header">
    <div class="container">
      <div class="home">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="home_right">
              <h1> Art Factory is free <span> for YOU </span> </h1>
              <p> This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website. </p>
              <button > FIND OUT MORE </button>
            </div>
          </div>  
          <div class="col-md-6 col-xs-12">
              <div class="home_left">
              <img src="../assets/images/slider-icon.png" />
            </div>
          </div>  
        </div>
         
      </div>  
    </div> 

  </div>
 </div>
</template>

<script>

export default {
  name:"header",
}
</script>

<style lang="scss" scoped>
.header{
    background-image: url(../assets/images/banner-bg.png);
  .container{
    .home{
      padding: 60px 0px;
      margin-bottom: 50px;
      .home_right{
        h1{
          font-size: 60px;
          color: white;
          line-height: 1.4;
          span{
            font-weight: 600;
          }
        }
        p{
          color: white;
          font-size: 17px;
          line-height: 1.7;
          font-family: system-ui;
          margin: 30px 0px;
        }
        button{
          outline: none;
          border: 0;
          padding: 13px 30px;
          border-radius: 60px;
          font-size: 14px;
          color: white;
          background-color: #f55858;
          &:hover{
            transition: 0.5s all;
            background-color: #007bff;
          }
        }
      }
      .home_left{
        img{
          width: 100%;
        }
      }
    }
}

}


</style>
