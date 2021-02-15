kalkulator
<html>
<head>
<title>Kalkulator</title>
<meta charset="utf-8" />
<style type="text/css">
#calculator {
    background: #eaeaea;
    margin: 0 auto;
    padding: 35px 25px 35px 25px;
    width: 200px;
    text-align: center;
}
#calculator button {
    padding: 10px;
    width: 40px;
}
#calculator input[type="text"] {
    padding: 10px;
    width: 147px;
    margin-bottom: 5px;
}
</style>
<script>
function Calculator(operator) 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;  

    switch(operator) 
    {
        case '+':
            var result = parseFloat(a) + parseFloat(b);         
        break;
        case '-':
            var result = parseFloat(a) - parseFloat(b);         
        break;  
        case 'x':
            var result = parseFloat(a) * parseFloat(b);         
        break;  
        case '/':
            var result = parseFloat(a) / parseFloat(b);         
        break;    
    }

    document.getElementById('result').value = '= ' + result;
}
</script>
</head>
<body>
<form id="calculator">
    <input type="text" id="a" placeholder="a" />
    <input type="text" id="b" placeholder="b" />
    <input type="text" id="result" placeholder="=" disabled="disabled" />
    <button type="button" onclick="Calculator(this.innerHTML)">+</button> 
    <button type="button" onclick="Calculator(this.innerHTML)">-</button>
    <button type="button" onclick="Calculator(this.innerHTML)">x</button>   
    <button type="button" onclick="Calculator(this.innerHTML)">/</button>
</form>
</body>
</html>