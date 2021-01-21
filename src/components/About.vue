<template>
  <div id="about" class="about">
    <div class="container">
      <h1> About </h1>
        <div class="row">
          <div class="col-md-7 col-xs-12">
            <div class="about_left">
              <img src="../assets/images/left-image.png">
            </div>
          </div>
          <div class="col-md-5 col-xs-12">
            <div class="about_right">
              <h1> Vivamus sodales nisi id ante molestie venenatis </h1>
              <p> This template is <a href="#">last updated on 20 August 2019 </a> for main menu drop-down arrow and sub menu text color. Duis auctor dolor eu scelerisque vestibulum. Vestibulum lacinia, nisl sit amet tristique condimentum. </p>
              <p>Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a, ultrices nisi.</p>
              <button> DISCOVER MORE </button> 
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-xs-12">
            <div class="about_right2">
              <h2> Curabitur aliquam eget tellus id porta </h2>
              <p> Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit. Aenean in feugiat purus. </p>
              <div class="info">
                <div class="icon">
                  <img src="../assets/images/about-icon-01.png">
                </div>
                <div class="para">
                  <h3>Nulla ultricies risus quis risus</h3>
                  <p>You can use this website template for commercial or non-commercial purposes.</p>
                </div>    
              </div>
              <div class="info">
                <div class="icon">
                  <img src="../assets/images/about-icon-02.png">
                </div>
                <div class="para">
                  <h3>Donec consequat commodo purus</h3>
                  <p>You have no right to re-distribute this template as a downloadable ZIP file on any website.</p>
                </div>    
              </div>
              <div class="info">
                <div class="icon">
                  <img src="../assets/images/about-icon-03.png">
                </div>
                <div class="para">
                  <h3>Sed placerat sollicitudin mauris</h3>
                  <p>If you have any question or comment, please contact us on TemplateMo.</p>
                </div>    
              </div>
            </div>     
          </div> 
          <div class="col-md-7 col-xs-12">
            <div class="about_left2">
              <img src="../assets/images/right-image.png">
            </div>
          </div> 
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name:"about",
}
</script>

<style lang="scss" scoped>

.about{
  padding-top: 100px;
  margin-bottom: 50px;
  margin-top: 100px;
  .container{
    >h1{
      color: #007bff;
      position: relative;
      &::before{
        position: absolute;
        content: "";
        width:150px ;
        border-bottom:3px solid  #007bff;
        bottom: -10px;
        left: 0px;
      }
    }
    .row{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      .about_left{
        overflow: hidden;
        img{
          width: 100%;
         
        }
      }
      .about_right{
        h1{
          color: black;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.3;
          margin: 30px 0px;
        }
        p{
          color: grey;
          font-size: 15px;
          line-height: 1.5;
          margin: 35px 0px;
        }
        button{
          outline: none;
          border: 0;
          padding: 13px 30px;
          border-radius: 60px;
          font-size: 14px;
          color: white;
          background-color:  #007bff;
          margin: 40px 0px;
          &:hover{
            background-color: #00b4c6;
          }
        }
      }
      .about_right2{
        margin: 150px 0px;
        overflow: hidden;
        h2{
          color: black;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.3;
          margin: 30px 0px;
        }
        >p{
          color: grey;
          font-size: 15px;
          line-height: 1.5;
          margin: 30px 0px;
        }
        
        .info{
          display: flex;
          margin-top: 30px;
          .icon{
            height: 77px;
            img{
              width: 100%;
            }
          }
          .para{
            margin-left: 15px;
            h3{
              margin-top: 0px;
            }
            >p{
              margin-top: 15px;
              color: grey;
              font-size: 15px;
              line-height: 1.5;
            }
          }
          
        }
      }
      .about_left2{
        margin: 140px 0px;
        padding-top: 35px;
        img{
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 992px) {
.about .container .row:first-of-type{
  display: flex;
  flex-direction: row-reverse;
}
.about .container .row .about_left img , .about .container .row .about_left2 img{
  width: 70%;
  display: block;
  margin: auto;

}
.about .container .row .about_right2{
  margin: 20px 0px;
}
.about .container .row .about_left , .about .container .row .about_left2{
  margin: 0px 0px;
  padding:0px;
}
.about .container > h1{
  margin-bottom: 50px;
}

}


</style>