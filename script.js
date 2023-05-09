
const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label, placeholder)
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
    del.setAttribute('class','btn btn-primary')

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
    del.setAttribute('class','btn btn-primary')

    let el = document.createElement('input')
    el.setAttribute('class', ' mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type','radio')
    let lbl=document.createElement('label')
    lbl.textContent =label
    lbl.textContent ="you have inserted radio"
    lbl.setAttribute('class','mx-1 mt-1')
  
    wrap.append(el,lbl,del)
    document.querySelector("#elements").append(wrap) 
    id++
}
const appendButton = (label = "No label", placeholder = "No placeholder") => {

   let wrap = document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('button')
    del.setAttribute('onclick','document.getElementById("'+id+'").style.display="none"')
    del.textContent="delete"
    del.setAttribute('class','btn btn-primary')

    let el = document.createElement('button')
    el.setAttribute('class', 'btn btn-primary')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type','button')
    el.textContent = label;
    el.addEventListener('click', function() {
        alert('inserted button!');
    });
    let lbl = document.createElement('label');
    lbl.textContent = "You have inserted a button";
  
  
    wrap.append(el,lbl,del)
    document.querySelector("#elements").append(wrap) 
    id++
}
