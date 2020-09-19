var div1 = document.getElementsByClassName("container")[0];
var div2 = document.createElement("div");
div2.style.cssText =
  "width:300px;height:300px;background-color:orange;border-radius:10px";
div1.appendChild(div2);

var div3 = document.createElement("div");
div3.style.cssText =
  "width:98%;height:70px;background-color:white ;margin:3px;border-radius:8px; text-align:right;font-size:20px;";
div2.appendChild(div3);

var div4 = document.createElement("div");
div4.style.cssText = "margin:5px";

div2.appendChild(div4);
var one = document.createElement("button");
one.innerText = "1";
one.style.cssText = "width:50px;height:50px;margin:5px";
one.addEventListener("click", () => (div3.innerText += "1"));
div4.appendChild(one);

var two = document.createElement("button");
two.innerText = "2";
two.style.cssText = "width:50px;height:50px;margin:3px";
two.addEventListener("click", () => (div3.innerText += "2"));
div4.appendChild(two);

var three = document.createElement("button");
three.innerText = "3";
three.style.cssText = "width:50px;height:50px;margin:3px";
three.addEventListener("click", () => (div3.innerText += "3"));
div4.appendChild(three);

var four = document.createElement("button");
four.innerText = "4";
four.style.cssText = "width:50px;height:50px;margin:3px";
four.addEventListener("click", () => (div3.innerText += "4"));

div4.appendChild(four);

var five = document.createElement("button");
five.innerText = "5";
five.style.cssText = "width:50px;height:50px;margin:3px";
five.addEventListener("click", () => (div3.innerText += "5"));
div4.appendChild(five);

var six = document.createElement("button");
six.innerText = "6";
six.style.cssText = "width:50px;height:50px;margin:5px";
six.addEventListener("click", () => (div3.innerText += "6"));
div4.appendChild(six);

var seven = document.createElement("button");
seven.innerText = "7";
seven.style.cssText = "width:50px;height:50px;margin:3px";
seven.addEventListener("click", () => (div3.innerText += "7"));
div4.appendChild(seven);

var eight = document.createElement("button");
eight.innerText = "8";
eight.style.cssText = "width:50px;height:50px;margin:3px";
eight.addEventListener("click", () => (div3.innerText += "8"));
div4.appendChild(eight);

var nine = document.createElement("button");
nine.innerText = "9";
nine.style.cssText = "width:50px;height:50px;margin:3px";
nine.addEventListener("click", () => (div3.innerText += "9"));
div4.appendChild(nine);

var zero = document.createElement("button");
zero.innerText = "0";
zero.style.cssText = "width:50px;height:50px;margin:3px";
zero.addEventListener("click", () => (div3.innerText += "0"));
div4.appendChild(zero);

var add = document.createElement("button");
add.innerText = "+";
add.style.cssText = "width:50px;height:50px;margin:6px";
div4.appendChild(add);

var sub = document.createElement("button");
sub.innerText = "-";
sub.style.cssText = "width:50px;height:50px;margin:3px";
div4.appendChild(sub);

var mul = document.createElement("button");
mul.innerText = "*";
mul.style.cssText = "width:50px;height:50px;margin:3px";
div4.appendChild(mul);

var div = document.createElement("button");
div.innerText = "/";
div.style.cssText = "width:50px;height:50px;margin:3px";
div4.appendChild(div);

var mod = document.createElement("button");
mod.innerText = "%";
mod.style.cssText = "width:50px;height:50px;margin:3px";
div4.appendChild(mod);

var equal = document.createElement("button");
equal.innerText = "=";
equal.style.cssText = "width:50px;height:30px; margin:5px";
div4.appendChild(equal);

var clear = document.createElement("button");
clear.innerText = "c";
clear.style.cssText = "width:160px;height:30px; margin:3px;font-size:20px";
clear.addEventListener("click", () => (div3.innerText = " "));
div4.appendChild(clear);

var dot = document.createElement("button");
dot.innerText = ".";
dot.style.cssText = "width:50px;height:30px; margin:3px;font-size:20px";
dot.addEventListener("click", () => (div3.innerText += "."));
div4.appendChild(dot);

//getting elements

var num1 = null;
var num2 = null;
var op = null;
sub.addEventListener("click", function() {
  num1 = parseFloat(div3.innerText);
  console.log("num1:", num1);
  div3.innerText = "";
  op = "-";
  console.log(op);
});
mul.addEventListener("click", function() {
  num1 = parseFloat(div3.innerText);
  console.log("num1:", num1);
  div3.innerText = "";
  op = "*";
  console.log(op);
});
div.addEventListener("click", function() {
  num1 = parseFloat(div3.innerText);
  console.log("num1:", num1);
  div3.innerText = "";
  op = "/";
  console.log(op);
});
mod.addEventListener("click", function() {
  num1 = parseFloat(div3.innerText);
  console.log("num1:", num1);
  div3.innerText = "";
  op = "%";
  console.log(op);
});
add.addEventListener("click", function() {
  num1 = parseFloat(div3.innerText);
  console.log("num1:", num1);
  div3.innerText = "";
  op = "+";
  console.log(op);
});
equal.addEventListener("click", total);
function total() {
  num2 = parseFloat(div3.innerText);
  console.log("num2:", num2);
  var total = null;
  switch (op) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;

    case "*":
      total = num1 * num2;
      break;
    case "/":
      total = num1 / num2;
      break;
    case "%":
      total = num1 % num2;
      break;
  }
  console.log("total:", total);
  div3.innerText = total;
}
