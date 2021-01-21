<template>
    <div id="frequist" class="frequentlyquestions">
        <div class="container">
            <h1 class="text-center">  Frequently Asked Questions  </h1>
            <p class="text-center">Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien. Nunc euismod risus ac lobortis congue. Sed erat quam.</p>
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <div class="fq_p1">
                        <h2>Class aptent taciti sociosqu ad litora torquent per conubia</h2>
                        <p>Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.</p>
                        <p>Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem ipsum dolor sit amet.</p>
                        <p> Email: <a href="#"> email@company.com </a> </p>
                        <button> CONTACT US  </button>
                    </div>
                </div>

                <div class="col-md-6 col-xs-12">
                    <div class="fq_p2">
                        <div class="category">
                            <h3 class="press"> First Common Question </h3>
                            <div class="active info">
                              <p> Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti </p>
                              <p>Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                            </div>
                        </div>
                        <div class="category">
                            <h3 class="press"> Second Common Question </h3>
                            <div class=" info">
                              <p>Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros iaculis, tempor quam sit amet, scelerisque mi. Quisque eu risus eget nunc porttitor vestibulum at a ante.</p>
                              <p>Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend tortor, eu luctus orci sagittis in. In blandit fringilla mollis.</p>
                            </div>
                        </div>
                        <div class="category">
                            <h3 class="press"> Third Common Question </h3>
                            <div class=" info">
                              <p>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim.</p>
                              <p>Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra.</p>
                            </div>
                        </div>
                        <div class="category">
                            <h3 class="press"> Fourth Common Question </h3>
                            <div class=" info">
                              <p>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim.</p>
                              <p>Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra.</p>
                            </div>
                        </div>
                        <div class="category">
                            <h3 class="press"> Fifth Common Question </h3>
                            <div class=" info">
                              <p>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim.</p>
                              <p>Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra.</p>
                            </div>
                        </div>                                              
                    </div>
                </div>                
            </div>
        </div>
    </div>    
</template>
<script>
import $ from "../../node_modules/jquery/dist/jquery.min";
$(document).ready(function(){
$(".fq_p2 .category").on("click",".press",function(){
    $(this).parent().parent().find('.info').slideUp();
    $(this).next().slideToggle();
});


});
export default {
    name:"frequentlyquestions",
}
</script>

<style lang="scss" scoped>
.frequentlyquestions{
    padding: 130px 0px;
    margin-bottom: 50px;
  margin-top: 100px;
    .container{
        h1{
            margin-bottom: 30px;
            font-size: 42px;
        }
        >p{
            font-size: 16px;
            width: 46%;
            margin: auto;
            line-height: 1.8;
            color: grey;
            margin-bottom: 70px;    
        }
        .fq_p1{
            h2{
                font-weight: 600;
                line-height: 1.4;
                margin-bottom: 40px;
                margin-top: 0px;
            }
            p{
                font-size: 16px;
                line-height: 1.8;
                color: 4a4a4a;
                margin-bottom: 20px;
            }
            p:last-of-type{
                a{
                    text-decoration: none;
                    font-family: system-ui;

                }
            }
            button{
                outline-style: none;
                border: 0;
                padding: 10px 23px;
                color: white;
                background-color: #00b4c6;
                border-radius: 54px;
                &:hover{
                    transition: 1s all;
                    transform: ease-in-out;
                    background-color: #007bff;
                }
            }
        }
        .fq_p2{
            .category{
                background-color:#d3d3d321;
                margin-bottom: 5px;
                padding: 0px 15px;
                overflow: hidden;
                .info{
                    display: none;
                }
                .active{
                    display: block;
                }
                h3{
                    color: #007bff;
                    outline-style: none;
                    cursor: pointer;
                    font-size: 20px;
                    padding: 0px;
                    margin-bottom: 20px;
                }
                p{
                    padding: 10px 0px;
                    font-size: 16px;
                    color: #6e6666;
                }
                p:last-of-type{
                    margin-bottom: 15px;
                }
            }
        }
        }

}
@media (max-width: 992px) {
    .frequentlyquestions .container .row .col-xs-12 {
        margin: 30px 0px;
    }
    .frequentlyquestions .container{
        >p{
            width: 98%;
            text-align: center;
        }
    }
    .frequentlyquestions .container .fq_p1{
    h2{
        font-size: 26px;
    }

}



}
</style>

