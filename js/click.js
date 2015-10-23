
clickArea.onclick=function(){
	realMoney=realMoney+clickAddMoney;
	console.log(realMoney);
	moneyText.innerHTML=realMoney;
}

clickUpgradeButton.onclick=function(){
	if(realMoney>clickUpCost){
		realMoney=realMoney-clickUpCost;
		moneyText.innerHTML=realMoney;
		clickUpCost=Math.floor(clickUpCost*2.2);
		clickAddMoney=Math.floor(clickAddMoney*1.7);
		moneyPerClick.innerHTML=clickAddMoney;
		clickUpCostText.innerHTML=clickUpCost;
	
	}
}

idleUpgradeButton.onclick=function(){
	if(realMoney>idleUpCost){
		realMoney=realMoney-idleUpCost;
		moneyText.innerHTML=realMoney;
		idleUpCost=Math.floor(idleUpCost*1.5);
		idleAddMoney=Math.floor(idleAddMoney+1);
		moneyPerSecond.innerHTML=idleAddMoney;
		idleUpCostText.innerHTML=idleUpCost;
	}
}