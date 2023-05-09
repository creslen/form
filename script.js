
const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break


    }
}
let id= 0
const appendText = (label = "No label", placeholder = "No placeholder") => {
    let wrap = document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('button')
    del.setAttribute('onclick','document.getElementById("'+id+'").style.display="none"')
    del.textContent="delete"

    let el = document.createElement('input')
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type','text')
    let lbl=document.createElement('label')
    lbl.textContent =label
    lbl.setAttribute('class','mx-1 mt-1')

    wrap.append(lbl,el,del)
    document.querySelector("#elements").append(wrap) 
    id++
}

const appendRadio = (label = "No label", placeholder = "No placeholder") => {

   let wrap = document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('button')
    del.setAttribute('onclick','document.getElementById("'+id+'").style.display="none"')
    del.textContent="delete"

    let el = document.createElement('input')
    el.setAttribute('class', ' mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type','radio')
    let lbl=document.createElement('label')
    lbl.textContent =label,"you have inserted radio"
    lbl.textContent ="you have inserted radio"
    lbl.setAttribute('class','mx-1 mt-1')
  
    wrap.append(lbl,el,del)
    document.querySelector("#elements").append(wrap) 
    id++
}

