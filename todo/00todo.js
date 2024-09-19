function addItem()
{
    console.log("addItem 함수 호출됨")

    todo = document.getElementById('item')
    list = document.getElementById("todolist")

    listitem = document.createElement('li')
    listitem.innerText = todo.value
    listitem.className = "list-group-item list-group-item-action list-group-item-warning"

    xbtn = document.createElement('button')
    xbtn.innerText = "x"

    fbtn = document.createElement('button')
    fbtn.className = "close"
    fbtn.innerHTML = "&#33"
    fbtn.onclick = (e) =>
    {
        pnode = e.target.parentNode;
        pnode.style.textDecoration="line-through";
    }


    // onclick 지원 방법 1 - 함수 적용
    // xbtn.onclick = xbtnclick

    // onclick 지원 방법 2 - 익명함수 적용
    // xbtn.onclick = function(e)
    // {
    //     pnode = e.target.parentNode;
    //     list = document.getElementById('todolist')
    //     list.removeChild(pnode)
    // }

    // onclick 지원 방법 3 - 화살표함수 적용

    xbtn.onclick = (e) => {
        pnode = e.target.parentNode;
        list = document.getElementById('todolist')
        list.removeChild(pnode)
    } 

    xbtn.className = "close"


    listitem.appendChild(xbtn)
    listitem.appendChild(fbtn)
    list.appendChild(listitem)

}

function xbtnclick(e)
{
    pnode = e.target.parentNode;
    list = document.getElementById('todolist')
    list.removeChild(pnode)
}