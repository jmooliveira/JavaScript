const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListImput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListImput.value
    if(listName === null || listName ==='') return
    const list = createList(listName)
    newListImput.value = null
    lists.push(list)
    render()

})

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function createList(name){
    return{id: Date.now().toString(), name: name }
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}


render()