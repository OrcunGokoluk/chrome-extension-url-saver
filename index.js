let urlList=[];
let listItem = " "
let listItems=[];

const inputEl =document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); 
const urlContainer=document.getElementById("url-container")
const deleteBtn=document.getElementById("delete-btn");
const currentBtn=document.getElementById("current-btn");

const deleteInfo=document.getElementById("delete-info");
deleteInfo.style.display="none";

currentBtn.addEventListener("click", function()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        urlList.push(tabs[0].url);
        localStorage.setItem("urlList", JSON.stringify(urlList) );
        renderListOfURL(urlList)
    })
})

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
    renderListOfURL(urlList);
})


let getItemsInStorage=JSON.parse(localStorage.getItem("urlList"))
if(getItemsInStorage!=null)
{
    urlList=JSON.parse(localStorage.getItem("urlList"))
    renderListOfURL(urlList);
}

inputBtn.addEventListener("click", function(){
    const text=inputEl.value;
    const trimmed=text.trim();
    if(trimmed!=""&&!trimmed.includes(" "))
    {
        urlList.push(inputEl.value)

        localStorage.setItem("urlList",JSON.stringify(urlList));


        renderListOfURL(urlList)
        inputEl.value = ""
        inputEl.focus();
    } 
})

function renderListOfURL(listOfUrl) {

    listItem=" ";
    for(let i=0;i<listOfUrl.length;i++){

        listItem += `<li><i class="fa-regular fa-circle"></i><a href="${listOfUrl[i]}" target="_blank"> ${listOfUrl[i]} </a></li>; `;
    }

    listItems=listItem.split(";")
    listItems.reverse();
    let liItem=listItems.toString();
    liItem=liItem.replaceAll(',',' ')

    urlContainer.innerHTML=liItem;
    console.log(liItem)

}