
/*Создаем функцию, которая на входе принимает параметр*/
/*Вешаем слушатель и проверяем состояние загрузки страницы - readystatechange*/
/*Если состояние interactive(дерево построено, но доп.ресурсы еще загружаются), то выполняем нашу переданную функцию, загружаем DOM и снова выполняем функцию*/

function doBeforeAndAfterDOMContentLoaded(somethingDO) {
	document.addEventListener('readystatechange', () => {
		
		  if (document.readyState === "interactive") {
		  	somethingDO();
		    document.addEventListener('DOMContentLoaded', () => {
		    	somethingDO()
		    });
		  }
	})
}

/*Создаем функцию, которая выводит алерт и запись в консоль*/
function somethingDO() {
	alert("Что-то происходит!");
	console.log("Что-то происходит!")
}

/*Передаём функции параметр(вторую функцию с алертом и текстом в консоли*/
doBeforeAndAfterDOMContentLoaded(somethingDO);

/*Создаем слушатель, который выводит алерт и запись в консоль о загрузке DOM после полной загрузки DOM*/
document.addEventListener('DOMContentLoaded', () => {
	alert("DOM загружен");
	console.log("DOM загружен")
})
