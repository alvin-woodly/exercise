console.log("hello world");

const beoordelingswaardes = JSON.parse(localStorage.getItem("beoordelingswaardes")) ?? {
    geweldig:0,
    goed:0,
    slecht:0,
    barslecht:0
}



//alle beoordelingen(clickable divs) ophalen:
const beoordelingen = Array.from(document.querySelectorAll(".beoordeling"));
console.log(beoordelingen[0]);

//alle ratings (h3 in de ratingscontainer in html) opslaan in een variable:
const geweldig = document.querySelector("#geweldigrating");
console.log(geweldig)
geweldig.innerText = beoordelingswaardes.geweldig;
const goed = document.querySelector("#goedrating");
console.log(goed);
goed.innerText = beoordelingswaardes.goed;
const slecht = document.querySelector("#slechtrating");
console.log(slecht);
slecht.innerText = beoordelingswaardes.slecht;
const barslecht = document.querySelector("#barslechtrating");
console.log(barslecht);
barslecht.innerText = beoordelingswaardes.barslecht;


//alle beoordelingen doorlopen en eventlistner torvoegen:
beoordelingen.forEach((beoordeling)=>{
    beoordeling.addEventListener("click",(event)=>{
        //de waarde van de beoordeling ophalen en in kleine letters zetten:
        const beoordelingswaarde=  String(event.currentTarget.children[0].innerText.trim().toLowerCase());
        //test als het de juiste is:
        console.log(beoordelingswaarde);

        //de waarde opsturen naar de backend voor de optelling

        //ik gebruik voorlopig localstorage om de waardes op te slaan
        // eerst de optelling in de variable beoordelingswaardes aanpassen, hier is zijn de totale beoordelingswaardes opgeslaan
        beoordelingswaardes[beoordelingswaarde] += 1;
        

        //de beoordelingswaarde weer in localstorage opslaan:
        localStorage.setItem("beoordelingswaardes", JSON.stringify(beoordelingswaardes));
        let aangepastewaarde = JSON.parse(localStorage.getItem("beoordelingswaardes"));
        geweldig.innerText = aangepastewaarde.geweldig;
        goed.innerText = aangepastewaarde.goed;
        slecht.innerText = aangepastewaarde.slecht;
        barslecht.innerText = aangepastewaarde.barslecht;
        console.log(aangepastewaarde);
    });
});