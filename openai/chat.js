$(document).ready(function(){

    OPEN_API_KEY = ""

    let txtMsg = document.getElementById("txtMsg")
    let txtOut = document.getElementById("txtOut")

    let gimage = document.getElementById("gimage")
    let gimage2 = document.getElementById("gimage2")
    
    $("#btnSend").click(function(){
        talk();
    })

    $("#btnDraw").click(function(){
        draw();
    })

    function talk()
    {
        let squestion = txtMsg.value;


        data = {
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: squestion
                }
            ]
        }
        $.ajax({
            type:"post",
            url: "https://api.openai.com/v1/chat/completions",
            headers: {
                "Authorization":"Bearer " + OPEN_API_KEY
            },
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(function(response){
            // console.log(response)
            txtOut.value = response.choices[0].message.content;
        }).fail(function(error){
            console.log(error);
            errormsg = error.status + ":" + error.responseJSON.error.code + " - " + error.messsage;
            alert(errormsg)
        })
    }

    function draw()
    {
        let squestion = txtMsg.value;

        data = {
            prompt: squestion,
            n:2,
            size:"512x512"
        }
        $.ajax({
            type:"post",
            url: "https://api.openai.com/v1/images/generations",
            headers: {
                "Authorization":"Bearer " + OPEN_API_KEY
            },
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(function(response){
            // console.log(response)
            gimage.src = response.data[0].url;
            gimage2.src = response.data[1].url;
        }).fail(function(error){
            console.log(error);
            errormsg = error.status + ":" + error.responseJSON.error.code + " - " + error.messsage;
            alert(errormsg)
        })
    }

})