var hpbar = 100;
var score = 0;
var coins = 0;
var multiplier = 1;
var killedenemys = 0;
var hp = 10;


function kleiner() {
    hpbar = hpbar - 10;
    console.log(hpbar);
    document.getElementById("healthbar-green").style.width = hpbar + "%";
    document.getElementById("hppoints").innerHTML = (hp - 1) + " HP / 10 HP";
    hp--;
    if (hp === 0){
        document.getElementById("hppoints").innerHTML = "DEAD!";
        killedenemys++;
        document.getElementById("killedenemys").innerHTML = "<img src=\'images/skull.png\'>" + killedenemys + " / 10";
    }

    if (hp === -1){
        (hp = 10);
        document.getElementById("hppoints").innerHTML = "10 HP / 10 HP";
    }


    if (hpbar <= 0){
        hpbar = 110;

        document.getElementById("killed").style.display = "block";
        document.getElementById("killed").innerHTML = multiplier + "+";
        coins++;
        document.getElementById("coins").innerHTML = (coins * multiplier);
        if (killedenemys === 10){
            world2(killedenemys);
            killedenemys = 0;
        }

    }else{
        document.getElementById("killed").style.display = "none"
    }
    score = score + 10;


}
function world2(killedenemys) {
        document.getElementById("enemy1").style.backgroundImage = "url('images/enemy2.png')";
        document.getElementById("level").innerHTML = "Forest LVL 2";
        document.getElementById("type").innerHTML = "Gloom, LVL 2";
        killedenemys = 0;
        document.getElementById("killedenemys").innerHTML = "<img src=\'images/skull.png\'>" + killedenemys + " / 20";
/*        hp = 50;
        hpbar = 500;*/
}

function multiplierx2(coins){
    if (coins >= 5){
       document.getElementById("coins").innerHTML = (coins - 5);
       document.getElementById("multiplierx2").innerHTML = ("Bought!");
   /*    document.getElementById("coin1").style.display = "none";*/
       multiplier = 2;
    }
    if (coins < 5){
        document.getElementById("coins").innerHTML = (coins - 5) + " coins to go.";
    }
}
multiplierx2(coins);
/*

function enemylevel2(killedenemys, hpbar) {
    if (killedenemys === 10){
        hpbar = 200
    }
}
enemylevel2(killedenemys, hpbar);*/

