OPEN_API_KEY = ""

function talk()
{
    data = {
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: "이순신 장군이 누구지?"
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
        console.log(response)
    }).fail(
    
    )
}

talk()