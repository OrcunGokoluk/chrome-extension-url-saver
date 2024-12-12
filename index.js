let myLeads=[];



const inputEl =document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); 
const urlContainer=document.getElementById("url-container")


let listItem = " "
let listItems=[];

let getItemsInStorage=JSON.parse(localStorage.getItem("myLeads"))
if(getItemsInStorage!=null)
{
    myLeads=JSON.parse(localStorage.getItem("myLeads"))
    renderLeads();
}

inputBtn.addEventListener("click", function(){
    const text=inputEl.value;
    const trimmed=text.trim();
    if(trimmed!=""&&!trimmed.includes(" "))
    {
        myLeads.push(inputEl.value)

        localStorage.setItem("myLeads",JSON.stringify(myLeads));


        renderLeads()
        inputEl.value = ""
        inputEl.focus();
    } 
})

function renderLeads() {
    listItem=" "
    for(let i in myLeads){
        listItem += `<li><a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a></li>; `;
    }
    listItems=listItem.split(";")
    listItems.reverse();
    let liItem=listItems.toString();
    liItem=liItem.replaceAll(',',' ')

    urlContainer.innerHTML=liItem;
    console.log(liItem)

}