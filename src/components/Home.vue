<template>
 <div id="home" class="parent">
  <div class="header">
    <div class="container">
      <div class="menu">
        <h1> ART FACTORY </h1>
        <span>  <i class="fa fa-bars" aria-hidden="true"></i> </span>
      </div>
    </div>  
         <div class="header_bg">
    <div id="container_bg" class="container nav_bg">
      <div class="logo">
        <span> ART FACTORY </span>
      </div>
      <div class="nav">
        <li><a href="#home"> Home </a></li> 
        <li><a href="#about"> About </a></li> 
        <li><a href="#services"> Services </a></li> 
        <li><a href="#frequist"> Frequently Question </a></li> 
        <li class="dropdown">
          <a href="#"> Dropdown</a>
          <ul>
              <li> <a href="#"> List 1</a> </li>
              <li> <a href="#"> List 2</a> </li>
              <li> <a href="#"> List 3</a> </li>
              <li> <a href="#"> List 4</a> </li>
              <li> <a href="#"> List 5</a> </li>
          </ul>            
        </li> 
        <li><a href="#contactus"> Contact Us </a></li> 
      </div>
    </div>
   </div>
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

import $ from"jquery";
$(document).ready(function(){
$(".dropdown").hover(function(){
  $(".dropdown ul").slideDown();
  },function(){
  $(".dropdown ul").slideUp();
});

$(".menu").click(function(){
$(".header_bg").slideToggle();

});


});

export default {
  name:"header",
}
</script>

<style lang="scss" scoped>
.menu{
  display: none;
  overflow: hidden;
  h1{
    display: inline;
    float: left;
    font-size: 25px;
    font-weight: 600;
  }
  span{
    float: right;
    font-size: 30px;
    margin-top: 15px;
  }
}
.dropdown{
  position: relative;
  ul{
    position: absolute;
    padding:0px;
    margin:0px;
    padding-left: 20px;
    display: none;
    li{
      list-style:none;
      line-height: 1.5;

    a{
      text-decoration: none;
    }

    }
  }
}

.header_bg{
  background-color: #2ea3e1;
    width: 100%;
    z-index: 10000;
}
  .container{
    width: 90%;
    margin: auto;

    .logo{
      display: inline;
      float: left;
      span{
        display: inline-block;
        padding: 15px;
        color: white;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 3px;
      }
    }
  .nav {
    display: inline;
    float: right;
    padding: 15px 0px;
    display: flex;
    li {
      cursor: pointer;
      padding: 0px 15px;
      font-size: 15px;
      a{
          color:white;
          &:hover{
            color: #f55858;
            background-color: unset ;
          &:focus{
            background-color: unset;
          }
          }

      }
      &.router-link-exact-active {
        color: #f55858;
      }
    }
    }
  }

/***end of nav********/
.header{
    background-image: url(../assets/images/banner-bg.png);
    background-repeat: no-repeat;
    padding-bottom: 90px;
  .container{
    .home{
      padding: 60px 0px;
      margin-bottom: 50px;
      .home_right{
        padding-top: 100px;
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
@media (max-width: 992px) {
.header_bg{
  display: none;
  .logo{
    float: none;
    display: none;
  }
  .nav{
    float: none;
    display: block;
    li{
      display: block;
      float: none;
      width: 100%;
    }
    .dropdown{
      ul{
        position: relative;
        li{
          width: 100%;
        }
      }
    }
  }


} 
.menu{
  display: block;
  color: white;
}
.header .container .home .home_left img{
  width: 80%;
  display: block;
  margin: auto;
}
.home_left{
  margin-top: 30px;
}
.header .container .home .home_right{
  padding-top: 0px;
  p{
    width: 100%;
    font-size: 15px;
    text-align: center;
  }
  h1{
    text-align: center;
    width: 100%;
    font-size: 29px;
    margin-top: 0px;
  }
  button{
    display: block;
    width: 40%;
    margin: auto;
    font-size: 13px;
    padding: 10px;
  }

}
}

</style>
