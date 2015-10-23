var moneyText=document.getElementById("moneyId");
var clickArea=document.getElementById("clickArea");
var realMoney=0;
var clickAddMoney=50;
var idleUpCost=25;
var clickUpCost=25;
var clickUpgradeButton=document.getElementById("clickUpgrade");
var idleUpgradeButton=document.getElementById("idleUpgrade");
var idleAddMoney=0;
var moneyPerSecond=document.getElementById("moneyPerSecond");
var moneyPerClick=document.getElementById("moneyPerClick");
var clickUpCostText=document.getElementById("clickUpCostText");
var idleUpCostText=document.getElementById("idleUpCostText");
init();
function init(){
	idleMoney();
	moneyPerClick.innerHTML=clickAddMoney;
	clickUpCostText.innerHTML=clickUpCost;
	idleUpCostText.innerHTML=idleUpCost;
}
function idleMoney(){
	realMoney=realMoney+idleAddMoney;
	moneyText.innerHTML=realMoney;
	setTimeout("idleMoney()",1000);
}