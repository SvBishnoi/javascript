const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.getElementById('decrement')
const counterEl= document.getElementById('counter')
const ulElement = document.getElementById('list-items')

let counter = 0

function incrementCounter(){
    
    counter++
    counterEl.innerText = counter
    
//create an element
    const li = document.createElement('li')
    li.setAttribute('data-counter',counter)

    
    if(counter % 2 === 0){
        li.style.background = 'red'
    }else{
        li.style.background = 'yellow'
    }

    li.innerHTML = '<b>something :</b>'+counter 
    /*
    const b= document.createElement('b')

    const textNode = document.createTextNode('counter :'+counter)
    li.appendChild(textNode)
    b.appendChild(textNode)

    // append an element
     */
    ulElement.appendChild(li)


}
function decrementCounter(){
    
    const li = ulElement.querySelector('[data-counter="'+counter+'"]')

    //const number = parseInt(li.getAttribute('data-counter'),10)

    li.remove()
    
    counter--
    counterEl.innerText = counter
}

incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)