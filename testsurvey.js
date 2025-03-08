let ratings = JSON.parse(localStorage.getItem("ratings")) ?? {
    good:0,
    ok:0,
    bad:0,
    verybad:0
}


console.log("hello world")


const surveyRatings = document.querySelectorAll(".rating");


surveyRatings.forEach((rating)=>{
    rating.addEventListener("click",(event)=>{
        const rating = String(event.currentTarget.children[0].innerText).trim().toLowerCase();
        ratings[rating] += 1;
        localStorage.setItem("ratings",JSON.stringify(ratings));
        console.log(JSON.parse(localStorage.getItem("ratings")));
    })
});

console.log(ratings);
console.log(surveyRatings);