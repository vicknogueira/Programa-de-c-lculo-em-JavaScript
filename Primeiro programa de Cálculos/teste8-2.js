function somar(){
    var tn1 = window.document.getElementById('txt1') 
    var tn2 = window.document.querySelector('input#txt2')
    var res = window.document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var somei = n1 + n2
    res.innerHTML = somei
}