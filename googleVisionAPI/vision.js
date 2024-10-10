GOOGLE_API_KEY = ""


function processFile(event)
{
    content = event.target.result;
    imagestring = content.replace("data:images/jpg;base64", '')
    document.getElementById("gimage").src = content
}

function uploadFiles(files)
{
    file = files[0]

    reader = new FileReader()
    reader.onloadend = processFile
    reader.readAsDataURL(file)
}

function analyze()
{
    data = {
        "request":[{
            "image":{
                content: imagestring
            },
            "features":
            {
                type:"FACE_DETECTION",
                maxResults:10
            }
        }]
    }
    $.ajax({
        type:"post",
        url: "https://vision.googleapis.com/v1/images:annotates"+"keys="+GOOGLE_API_KEY,
        headers: {
            "Accept": "application/json",
            "Content-Type" : "application/json",
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function(response){
        console.log(response)
        // txtOut.value = response.choices[0].message.content;
    }).fail(function(error){
        console.log(error);
        // errormsg = error.status + ":" + error.responseJSON.error.code + " - " + error.messsage;
        // alert(errormsg)
    })
}