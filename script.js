document.querySelectorAll('form span').forEach(item => {
    item.addEventListener('click', (e) => {
        addVal(item.innerHTML);
    })
})



function addVal(valor) {
    if (valor == 'CE')
        document.calc.exp.value = '';
    else if (valor == '=')
       try {
        document.calc.exp.value = eval(document.calc.exp.value.replaceAll(',' , '.')).toString().replaceAll('.' , ',');
       } catch (e) {
        document.calc.exp.value = '';
       }
    else
        document.calc.exp.value += valor;
}