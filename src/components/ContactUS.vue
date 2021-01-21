<template>
    <div id="contactus" class="ContactUS">
        <div style="margin:0px" class="row">
            <div style="padding:0px" class="col-md-6 col-xs-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13739.598858542282!2d31.51900481801342!3d30.58037630704622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f044ed84e6db%3A0xc970f35c23cfc0a3!2z2KfZhNiy2YLYp9iy2YrZgtiMINin2YTYrdix2YrYsdmK2Iwg2KfZiNmEINin2YTYstmC2KfYstmK2YLYjCDYp9mE2LTYsdmC2YrYqQ!5e0!3m2!1sar!2seg!4v1610846627064!5m2!1sar!2seg" width="100%" height="484" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div style="padding:0px" class="col-md-6 col-xs-12">
                <form>
                    
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <input placeholder="Full Name" type="text">
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <input placeholder="Email" type="mail">
                        </div>
                        <div class="col-xs-12">
                            <textarea placeholder="Your Message">  </textarea>
                        </div>
                        <button type="submit"> Submit </button>                           
                    </div>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:"ContactUS",
}

</script>
<style lang="scss" scoped>
.ContactUS{
    padding: 130px 0px;
    form{
        background-color: #007bff;
        padding: 50px 50px;
        .row{
            display: flex;
            flex-wrap: wrap;
            input{
                display: block;            
                width: 100%;
                background-color: #fafafa4d;
                border: 0;
                height: 50px;
                color: white;
                padding: 10px;
                outline-style: none;           
            }
            textarea{
                display: block;
                width: 100%;
                margin-top: 50px;
                height: 200px;
                padding: 10px;
                background-color: #fafafa4d;
                border: 0px;
                color: white;  
                outline-style: none;  
            }
            button{
                display: block;
                margin: auto;
                border: 0px;
                padding: 10px 40px;
                margin-top: 40px;
                outline-style: none;
                font-size: 17px;
                border-radius: 63px;
                background-color: #f55858;
                color: white;    
            }
        }
    }
}
@media (max-width:992px){
    input{
        margin: 10px 0px;
    }
}
.ContactUS form{
    padding:40px 20px;

}
.ContactUS >.row >.col-xs-12{
    margin-bottom: 0px;
}
</style>