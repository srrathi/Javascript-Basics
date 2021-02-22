// function getHistory(){
// 	return document.getElementById("history-value").innerText;
// }
// function printHistory(num){
// 	document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
// 	return document.getElementById("output-value").innerText;
// }
// function printOutput(num){
// 	if(num==""){
// 		document.getElementById("output-value").innerText=num;
// 	}
// 	else{
// 		document.getElementById("output-value").innerText=getFormattedNumber(num);
// 	}	
// }
// function getFormattedNumber(num){
// 	if(num=="-"){
// 		return "";
// 	}
// 	var n = Number(num);
// 	var value = n.toLocaleString("en");
// 	return value;
// }
// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
// 	operator[i].addEventListener('click',function(){
// 		if(this.id=="clear"){
// 			printHistory("");
// 			printOutput("");
// 		}
// 		else if(this.id=="backspace"){
// 			var output=reverseNumberFormat(getOutput()).toString();
// 			if(output){//if output has a value
// 				output= output.substr(0,output.length-1);
// 				printOutput(output);
// 			}
// 		}
// 		else{
// 			var output=getOutput();
// 			var history=getHistory();
// 			if(output==""&&history!=""){
// 				if(isNaN(history[history.length-1])){
// 					history= history.substr(0,history.length-1);
// 				}
// 			}
// 			if(output!="" || history!=""){
// 				output= output==""?output:reverseNumberFormat(output);
// 				history=history+output;
// 				if(this.id=="="){
// 					var result=eval(history);
// 					printOutput(result);
// 					printHistory("");
// 				}
// 				else{
// 					history=history+this.id;
// 					printHistory(history);
// 					printOutput("");
// 				}
// 			}
// 		}
		
// 	});
// }
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
// 	number[i].addEventListener('click',function(){
// 		var output=reverseNumberFormat(getOutput());
// 		if(output!=NaN){ //if output is a number
// 			output=output+this.id;
// 			printOutput(output);
// 		}
// 	});
// }

var result;

function funcPlus(){
	document.getElementById("output-value").innerHTML += "+";
}
function funcSub(){
	document.getElementById("output-value").innerHTML += "-";
}
function funcDivide(){
	document.getElementById("output-value").innerHTML += "/";
}
function funcMultiply(){
	var flag=1;
	document.getElementById("history-value").innerHTML = document.getElementById("output-value").innerHTML;
	document.getElementById("output-value").innerHTML ="";
	document.getElementById("output-value").innerHTML += func(num);
}
function funcBack(){
	// var len = document.getElementById("output-value").innerHTML.length;
	document.getElementById("output-value").innerHTML="";
}
function func(num){
	var number=num;
	document.getElementById("output-value").innerHTML += number;
	return number;
}
function funcEquals(){
	if(flag==1){
		var e1=Number(document.getElementById("output-value").innerHTML);
		var e2=Number(document.getElementById("history-value").innerHTML);
		alert(e1+"*"+e2);
		document.getElementById("output-value").innerHTML="";
		document.getElementById("output-value").innerHTML=e1*e2;
	}
}