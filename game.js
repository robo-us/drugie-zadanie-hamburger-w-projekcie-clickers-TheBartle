$('div.cookie').on('click', function() {
        $('div.cookie').toggleClass('active');
    });

let Money = 0;
var food = 100;
var health = 100;


let Click = 1;
let ClickUpgradeCost = 30;
let ClicksUpgrade = 0;

let help = new Audio('sound/54789.mp3');
let cor = new Audio('sound/Tink.mp3');
let icor = new Audio('sound/Dong.mp3');

let Bakers = 0;
let BakersCost = 50;
let BakersPower = 0;

let Grandma = 0;
let GrandmaCost = 400;
let GrandmaPower = 0;

let Grandad = 0;
let GrandadCost = 1000;
let GrandadPower = 0;

let CookieRoobot = 0;
let CookieRoobotCost = 2000;
let CookieRoobotPower = 0;

let BakersUpgrade = 0;
let BakersUpgradeCost = 200;

let GrandmaUpgrade = 0;
let GrandmaUpgradeCost = 425;

let GrandadUpgrade = 0;
let GrandadUpgradeCost = 800;

var xAlert = document.getElementsByClassName("alert");
let elemFood = document.getElementById("food");

function addMoney(number) {
    Money = Money + number;
    document.getElementById("MoneyCount").innerHTML = Money.toFixed(2);
}
function buyFood() {
  if (food <= 91) {
    if (Money >= 19) {
      Money = Money - 19;
      food = food + 9;
      document.getElementById("food").style.width = food + '%';
    }
  }
}
function BuyBakers() {
    if (Money >= BakersCost) {
        Money = Money - BakersCost;
        BakersCost = BakersCost + 14;
        Bakers = Bakers + 1;
        BakersPower = BakersPower + 0.3;
        document.getElementById("Bakers").innerHTML = Bakers;
        document.getElementById("BakersCost").innerHTML = BakersCost;
        cor.play();
    }
    else {
      icor.play();
    }
}
function BuyGrandma() {
    if (Money >= GrandmaCost) {
        Money = Money - GrandmaCost;
        GrandmaCost = GrandmaCost + 375;
        Grandma = Grandma + 1;
        GrandmaPower = GrandmaPower + 0.7;
        document.getElementById("Grandma").innerHTML = Grandma;
        document.getElementById("GrandmaCost").innerHTML = GrandmaCost;
        cor.play();
    }
    else {
      icor.play();
    }
}
function BuyGrandad() {
    if (Money >= GrandadCost) {
        Money = Money - GrandadCost;
        GrandadCost = GrandadCost + 429;
        Grandad = Grandad + 1;
        document.getElementById("Grandad").innerHTML = Grandad;
        document.getElementById("GrandadCost").innerHTML = GrandadCost;
        GrandadPower = GrandadPower + 1.5;
        cor.play();
    }
    else {
      icor.play();
    }
}
function BuyCookieRoobot() {
    if (Money >= CookieRoobotCost) {
        Money = Money - CookieRoobotCost;
        CookieRoobotCost = CookieRoobotCost + 679;
        CookieRoobot = CookieRoobot + 1;
        document.getElementById("CookieRoobot").innerHTML = CookieRoobot;
        document.getElementById("CookieRoobotCost").innerHTML = CookieRoobotCost;
        GrandadPower = GrandadPower + 4;
        cor.play();
    }
    else {
      icor.play();
    }
}
//------------------------------------------------------------------------------
function BuyBakersUpgrade() {
    if (Money >= BakersUpgradeCost) {
        Money = Money - BakersUpgradeCost;
        BakersUpgradeCost = BakersUpgradeCost + 150;
        BakersUpgrade = BakersUpgrade + 1;
        BakersPower = BakersPower * 2;
        document.getElementById("BakersUpgrade").innerHTML = BakersUpgrade;
        document.getElementById("BakersUpgradeCost").innerHTML = BakersUpgradeCost;
    }
    else {
      icor.play();
    }
}
function BuyGrandmaUpgrade() {
    if (Money >= GrandmaUpgradeCost) {
        Money = Money - GrandmaUpgradeCost;
        GrandmaUpgradeCost = GrandmaUpgradeCost + 400;
        GrandmaUpgrade = GrandmaUpgrade + 1;
        GrandmaPower = GrandmaPower * 2;
        document.getElementById("GrandmaUpgrade").innerHTML = GrandmaUpgrade;
        document.getElementById("GrandmaUpgradeCost").innerHTML = GrandmaUpgradeCost;
    }
    else {
      icor.play();
    }
}
function BuyGrandadUpgrade() {
    if (Money >= GrandadUpgradeCost) {
        Money = Money - GrandadUpgradeCost;
        GrandadUpgradeCost = GrandadUpgradeCost + 400;
        GrandadUpgrade = GrandadUpgrade + 1;
        GrandadPower = GrandadPower * 2;
        document.getElementById("GrandadUpgrade").innerHTML = GrandadUpgrade;
        document.getElementById("GrandadUpgradeCost").innerHTML = GrandadUpgradeCost;
    }
    else {
      icor.play();
    }
}
function BuyClickUpgrade() {
    if (Money >= ClickUpgradeCost) {
        Money = Money - ClickUpgradeCost;
        Click = Click + 1;
        ClicksUpgrade = ClicksUpgrade + 1;
        ClickUpgradeCost = ClickUpgradeCost + 170;
        document.getElementById("ClicksUpgrade").innerHTML = ClicksUpgrade;
        document.getElementById("ClickUpgradeCost").innerHTML = ClickUpgradeCost;
    }
}

//Grandmas
window.setInterval(
    function(){
    addMoney(GrandmaPower);
}, 1000);
//Bakers
  window.setInterval(
      function(){
      addMoney(BakersPower);
  }, 1000);
window.setInterval(
      function(){
      addMoney(GrandadPower);
  }, 1000);

var foodTimer = window.setInterval(function(){
        if (food == 0) {
            food = 0;
        }
            else{
                food--;
            }

        elemFood.style.width = food + '%';
        if (food == 15) {
            help.play();
            xAlert[0].style.display = "block";
        };
            if (food == 10) {
                help.play();
                xAlert[0].style.display = "block";
            };
            if (food == 5) {
                help.play();
                xAlert[0].style.display = "block";
            }
}, 3500);
window.setInterval(
    function() {
        if (food == 0) {
            health = health - 1;
            let elemHealth = document.getElementById("health");
            elemHealth.style.width = health + "%";

        if (health == 0) {
            alert("GAME OVER!!!");
            location.reload();
            food = food + 1;
            }
    }
}
,300);
function shopOpen() {
    document.getElementById("shop").style.display = "block";
    document.getElementById("HamO").style.display = "none";
    document.getElementById("HamC").style.display = "block";
}
function shopClose() {
    document.getElementById("HamC").style.display = "none";
    document.getElementById("HamO").style.display = "block";
    document.getElementById("shop").style.display = "none";
}
//SAVE
function Save() {
    cor.play();
    localStorage.setItem("money", Money);
    localStorage.setItem("bakers", Bakers);
    localStorage.setItem("bakersCost", BakersCost);
    localStorage.setItem("bakersPower", BakersPower);
    localStorage.setItem("grandma", Grandma);
    localStorage.setItem("grandmaCost", GrandmaCost);
    localStorage.setItem("grandmaPower", GrandmaPower);
    localStorage.setItem("grandad", Grandad);
    localStorage.setItem("grandadCost", GrandadCost);
    localStorage.setItem("grandadPower", GrandadPower);
    localStorage.setItem("cookieRoobot", CookieRoobot);
    localStorage.setItem("cookieRoobotCost", CookieRoobotCost);
    localStorage.setItem("cookieRoobotPower", CookieRoobotPower);
    localStorage.setItem("bakersUpgrade", BakersUpgrade);
    localStorage.setItem("bakersUpgradeCost", BakersUpgradeCost);
    localStorage.setItem("click", Click);
    localStorage.setItem("clicksUpgrade", ClicksUpgrade);
    localStorage.setItem("clickUpgradeCost", ClickUpgradeCost);
    localStorage.setItem("food", food);
    localStorage.setItem("health", health);
};
function Load() {
    if("money" in localStorage){
        alert("Congratulations! Load saved.");
        cor.play();
        Money = Money = localStorage.getItem("money");

        Bakers = Bakers = localStorage.getItem("bakers"); Bakers++; Bakers--;
        BakersCost = BakersCost = localStorage.getItem("bakersCost"); BakersCost++; BakersCost--;
        BakersPower = BakersPower = localStorage.getItem("bakersPower"); BakersPower++; BakersPower--;

        Grandma = Grandma = localStorage.getItem("grandma"); Grandma++; Grandma--;
        GrandmaCost = GrandmaCost = localStorage.getItem("grandmaCost"); GrandmaCost++; GrandmaCost--;
        GrandmaPower = GrandmaPower = localStorage.getItem("grandmaPower"); GrandmaPower++; GrandmaPower--;

        Grandad = Grandad = localStorage.getItem("grandad"); Grandad++; Grandad--;
        GrandadCost = GrandadCost = localStorage.getItem("grandadCost"); GrandadCost++; GrandadCost--;
        GrandadPower = GrandadPower = localStorage.getItem("granadaPower"); GrandadPower++; GrandadPower--;

        CookieRoobot = CookieRoobot = localStorage.getItem("cookieRoobot"); CookieRoobot++; CookieRoobot--;
        CookieRoobotCost = CookieRoobotCost = localStorage.getItem("cookieRoobotCost"); CookieRoobotCost++; CookieRoobotCost--;
        CookieRoobotPower = CookieRoobotPower = localStorage.getItem("cookieRoobotPower"); CookieRoobotPower++; CookieRoobotPower--;

        BakersUpgrade = BakersUpgrade = localStorage.getItem("bakersUpgrade"); BakersUpgrade++; BakersUpgrade--;
        BakersUpgradeCost = BakersUpgradeCost = localStorage.getItem("bakersUpgradeCost"); BakersUpgradeCost++;     BakersUpgradeCost--;

        Click = Click = localStorage.getItem("click"); Click++; Click--;
        ClicksUpgrade = ClickUpgrade = localStorage.getItem("clicksUpgrade"); ClickUpgrade++; ClickUpgrade--;
        ClickUpgradeCost = ClickUpgradeCost = localStorage.getItem("clickUpgradeCost"); ClickUpgradeCost++; ClickUpgradeCost--;

        food = food = localStorage.getItem("food"); food++; food--;
        health = health = localStorage.getItem("health"); health++; health--;
    //-------------------------------------------------------//
    }
    else {
        icor.play();
        alert("You don't have SAVE!!! I can't load");
    }
};
function Reset() {
    let c = confirm("Do you want reset progress?");
    if (c == true) {
        localStorage.clear();
        alert("Cleared");
        location.reload();
    } else {
        alert("Not reset");
    }
};
