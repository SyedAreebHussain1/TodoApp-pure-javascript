var list = document.getElementById('list')

function addTodo() {
    var todoItem = document.getElementById('todo-item')
    // create li 
    var li = document.createElement('li')
    var liTxt = document.createTextNode(todoItem.value)
    li.appendChild(liTxt)
    // console.log(li)
    list.appendChild(li)

    // create Edit button
    var editBtn = document.createElement('button')
    var editTxt = document.createTextNode('UPDATE')
    editBtn.appendChild(editTxt)
    editBtn.setAttribute('onclick', 'updateTodo(this)')
    editBtn.setAttribute('class', 'updateBtn')
    li.appendChild(editBtn)
    // console.log(editBtn)

    // create delete button
    var deleteBtn = document.createElement('button')
    var deleteTxt = document.createTextNode('CANCEL')
    deleteBtn.appendChild(deleteTxt)
    deleteBtn.setAttribute('onclick', 'removeTodo(this)')
    deleteBtn.setAttribute('class', 'removeBtn')
    li.appendChild(deleteBtn)
    // console.log(deleteBtn)

    todoItem.value = ''
}
function updateTodo(e){
    var valueEdit = prompt('Edit Todo',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = valueEdit
}
function removeTodo(e){
    e.parentNode.remove()
}
function clearTodo(){
    list.innerHTML = ''
}








































































