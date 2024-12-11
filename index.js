let myLeads=[];


const inputEl =document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); 
const urlContainer=document.getElementById("url-container")


inputBtn.addEventListener("click", function(){
    const text=String(inputEl.value);
    const trimmed=text.trim();
    if(trimmed!=""&&!trimmed.includes(" "))
    {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        renderLeads()
    } 
})

function renderLeads() {
    
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `<li><a href="https://${myLeads[i]}" target="_blank">${myLeads[i]} </a></li>`
    }
    urlContainer.innerHTML = listItems  
}