

console.log("hello world");


const postsContainer= document.getElementById("posts");

const users = [];

async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users",{method:"GET", headers:{"Content-type":"application/json"}});
        response.ok ? console.log("success") : console.log("failed");
        const data = await response.json();
        for(let i = 0; i < data.length; i++)
        {
           users.push(data[i]);
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

getPosts().then(()=>{
    users.forEach((user)=>{
        console.log(user.name); 
    })
});


