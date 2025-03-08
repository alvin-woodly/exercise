console.log("hello world");

async function getToDO(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos",{method:"GET",headers:{"content-type":"application/json"}});
        response.ok ? console.log("success") : console.log("failed");
        const data = await response.json();
        return Array.from(data);
    }
    catch(exception)
    {
        console.log(exception);
    }
}

const listToDoItems = [];

getToDO().then(data =>{
    listToDoItems.push(...data); 
    displayTodo(listToDoItems)
});


//display the list of items
function displayTodo(items){
    items.forEach((todoItem)=>{
        //create a list with items
        const list = document.querySelector("#lists ul")
        const listItem = document.createElement("li");
        const item = document.createElement("div");
        item.classList.add("item");

        //create the header for a task:
        const ItemHeader = document.createElement("h3");
        ItemHeader.innerText = "Title: " + todoItem.title;

        //create a status for each task:
        const status = document.createElement("p");
        let statusText = todoItem.completed ? "Completed" : "Not Completed";
        status.innerText = "Status: " + statusText;

        if(statusText === "Completed")
        {
            status.style.color = "green";
        }
        else{
            status.style.color = "red";
        }
        
        //append items to each other
        item.appendChild(ItemHeader);
        item.appendChild(status);
        listItem.appendChild(item);
        list.appendChild(listItem);

        //create delete button:
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.innerText = "Delete";
        
        //create a eventlistner for delete button:
        deleteButton.addEventListener("click",(event)=>{
       
           const listItem = event.currentTarget.parentElement.parentElement;
           const divelement = event.target.parentElement;

           divelement.style.backgroundColor = "red";
            setTimeout(()=>{
                if(listItem)
                {
                    console.log(listItem);
                    listItem.remove(); // Remove the entire list item (li element) after 2 seconds
                }else{
                    console.log("Parent element is null");
                }
            },2000)
        });

        //add delete button to item
        item.appendChild(deleteButton);
        
    });
}
