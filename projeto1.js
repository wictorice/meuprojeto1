function enviar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if(num.value.length == 0){
        window.alert('[ERROR]Faltam dados')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        num.focus()
        for(let c = 1; c <= 1000; c++){
            let item = document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item)

        }

    }
}