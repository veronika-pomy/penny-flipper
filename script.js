//click flip the penny btn to random choose heads/tails for img
let pennyImg = document.querySelector("#flip-penny");

let countHeads = 0;
let countTails = 0;

pennyImg.addEventListener("click",function(){
    let outcome = Math.random();
    console.log(outcome)
    if (outcome < 0.5){
        document.querySelector("img").src = "./penny-heads.jpeg"
        countHeads++
        console.log("heads")
    } else {
        document.querySelector("img").src = "./penny-tails.jpeg"
        countTails++
        console.log("tails")
    }
    console.log(countHeads);
    console.log(countTails);

    document.querySelector("#num-heads").textContent = countHeads
    document.querySelector("#num-tails").textContent = countTails

    document.querySelector("#head-percent").textContent = Math.round(countHeads/(countHeads+countTails)*100)
    document.querySelector("#tails-percent").textContent = Math.round(countTails/(countHeads+countTails)*100)
})


//when clear scoreboard button is clicked clear the table (all table content set to 0) and set 
//img to the original heads picture 