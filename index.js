let urlList=[];
let listItem = " "
let listItems=[];

const inputEl =document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); 
const urlContainer=document.getElementById("url-container")
const deleteBtn=document.getElementById("delete-btn");

const deleteInfo=document.getElementById("delete-info");
deleteInfo.style.display="none";

deleteBtn.addEventListener("click",function()
{
    deleteInfo.style.display="block"
})

inputEl.addEventListener("focus",function()
{
    deleteInfo.style.display="none"
})


deleteBtn.addEventListener("dblclick",function()
{
    urlList=[];
    localStorage.clear();
    deleteInfo.style.display="none"
    renderListOfURL();
})


let getItemsInStorage=JSON.parse(localStorage.getItem("urlList"))
if(getItemsInStorage!=null)
{
    urlList=JSON.parse(localStorage.getItem("urlList"))
    renderListOfURL();
}

inputBtn.addEventListener("click", function(){
    const text=inputEl.value;
    const trimmed=text.trim();
    if(trimmed!=""&&!trimmed.includes(" "))
    {
        urlList.push(inputEl.value)

        localStorage.setItem("urlList",JSON.stringify(urlList));


        renderListOfURL()
        inputEl.value = ""
        inputEl.focus();
    } 
})

function renderListOfURL() {

    listItem=" ";
    for(let i in urlList){

        listItem += `<li><a href="${urlList[i]}" target="_blank"> ${urlList[i]} </a></li>; `;
    }

    listItems=listItem.split(";")
    listItems.reverse();
    let liItem=listItems.toString();
    liItem=liItem.replaceAll(',',' ')

    urlContainer.innerHTML=liItem;
    console.log(liItem)

}