<template>
    <div class="frequentlyquestions">
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
                        <button > CONTACT US  </button>
                    </div>
                </div>

                <div class="col-md-6 col-xs-12">
                    <div class="fq_p2">
                        <details>
                            <summary> First Common Question </summary>
                            <p> Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti </p>
                            <p>Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                        </details>
                        <details>
                            <summary> First Common Question </summary>
                            <p> Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti </p>
                            <p>Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                        </details>
                        <details>
                            <summary> First Common Question </summary>
                            <p> Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti </p>
                            <p>Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                        </details>                        
                    </div>            
                </div>                
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name:"frequentlyquestions",
}
</script>
<style lang="scss" scoped>
.frequentlyquestions{
    padding: 130px 0px;
    margin-bottom: 50px;

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
            details{
                summary{
                    outline-style: none;
                    cursor: pointer;
                    font-size: 23px;
                    padding: 10px 0px;
                }
                p{
                    padding: 10px 5%;
                    font-size: 16px;
                }
            }
        }



        }

}


</style>