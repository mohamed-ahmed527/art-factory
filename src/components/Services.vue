<template>
 <div id="services" class="parent">
    <div class="services">
        <h1> Services </h1>
        <div class="container">
           <div class="row">
               <div class="col-md-4">
                    <div class="box">
                        <div class="icon">
                            <img src="../assets/images/service-icon-01.png" />
                        </div>
                        <h2> First Box Services  </h2>
                        <p>Pellentesque vitae urna ut nisi viverra tristique quis at dolor. In non sodales dolor, id egestas quam. Aliquam erat volutpat. </p>
                        <button >READ MORE</button>
                    </div>                
               </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="icon">
                            <img src="../assets/images/service-icon-02.png" />
                        </div>
                        <h2> Second Box Services  </h2>
                        <p>Quisque finibus libero augue, in ultrices quam dictum id. Aliquam quis tellus sit amet urna tincidunt bibendum. </p>
                        <button >READ MORE</button>
                    </div>                
               </div>

                <div class="col-md-4">
                    <div class="box">
                        <div class="icon">
                            <img src="../assets/images/service-icon-03.png" />
                        </div>
                        <h2> Third Box Services  </h2>
                        <p>Aenean vulputate massa sed neque consectetur, ac fringilla quam aliquet. Sed a enim nec eros tempor cursus at id libero. </p>
                        <button >READ MORE</button>
                    </div>                
               </div>               


        </div>

        </div>
    </div>
 </div>
</template>

<script>
export default {
  name:"services",
}
</script>

<style lang="scss" scoped>
#services{
    padding-top: 100px;

}
.services{
    background-color:#00b4c6 ;
    padding: 130px 0px;
    margin-bottom: 50px;
    >h1{
    text-align: center;
    color: white;
    margin-bottom: 60px;
    margin-top: 0px;
    }
    .container{
    .row{
        .box{
            background-color: white;
            text-align: center;
            padding: 30px 25px;
            &:hover{
                cursor: pointer;
                .icon img{
                    transition: 1s all;
                    transform: ease-in-out;
                    background-color: #007bff;
                    }
                button{
                    transition: 1s all;
                    transform: ease-in-out;
                    background-color: #007bff;
                    }
            }
            .icon{

                img{
                    background-color: #00b4c6;
                    padding: 20px;
                    border-radius: 100%;
                }
            }
            h2{
                font-size: 20px;
                font-weight: 600;
                margin: 30px 0px;
            }
            p{
                margin: 25px 0px;
                color: grey;
                line-height: 2;
            }
            button{
                outline-style: none;
                border: 0;
                padding: 10px 23px;
                color: white;
                background-color: #00b4c6;
                border-radius: 54px;
            }
        }
    }
  }
}
@media (max-width: 992px) {
.services .container .row .box {
    margin: 30px 0px ;
}
.services .container .row .box {
    p{
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    font-size: 17px;
    line-height: 1.5;
    }
    h2{
        margin-bottom: 20px;
    }

}


}
</style>