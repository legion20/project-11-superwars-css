let finalh = document.getElementById("hero_score");
let finalv = document.getElementById("villian_score");

function random(limit){
    return Math.floor(Math.random()*limit);
}

function play(){
    let herosum = 0;
    let villiansum = 0;
    for(let i=1; i<=2; i++){
        let hero = document.getElementById(i);
        let tempscore = random(100);
        hero.innerHTML = tempscore;
        herosum+=tempscore;
        tempscore = random(20);
        while(tempscore===0){
            tempscore = random(20);
        }
        document.getElementById("h"+i).src = "images/super-"+tempscore+".png";
    }
    for(let i=3; i<=4; i++){
        let villian = document.getElementById(i);
        let tempscore = random(100);
        villian.innerHTML = tempscore;
        villiansum+=tempscore;
        tempscore = random(20);
        while(tempscore===0){
            tempscore = random(20);
        }
        document.getElementById("v"+i).src = "images/super-"+tempscore+".png";
    }
    if(herosum>villiansum){
        let temp = finalh.innerHTML;
        temp++;
        finalh.innerHTML = temp;
        if(temp >= 10){
            alert("Hero WINS!!!");
            location.reload();
        }
    }
    else{
        let temp = finalv.innerHTML;
        temp++;
        finalv.innerHTML = temp;
        if(temp >= 10){
            alert("Villian WINS!!!");
            location.reload();
        }
    }
}
