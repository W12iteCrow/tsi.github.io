let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

const mainButton = Telegram.WebApp.MainButton;

btn1.addEventListener("click", function(){
	if (mainButton.isVisible) {
		mainButton.hide();
	}
	else {
		mainButton.setText("Вы выбрали товар 1!");
		item = "1";
		mainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
