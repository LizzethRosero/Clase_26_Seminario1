function operaciones() {
let num1,num2;
num1=parseInt(document.getElementById('num1').value);
num2= parseInt( document.getElementById('num2').value);
sum= num1+num2;
res= num1-num2;
mul=num1*num2;
div=num1/num2;

alert("El resultdo de la suma es : "+ sum 
+"\n El resultado de la resta es:"+res
+"\n El resultado de la multiplicacion:"+mul
+"\n El resultado de la division :"+div)

}