console.log('\'Allo \'Allo!');

var list = document.getElementById("list");
var todo = document.getElementById("todo");
function addTodo() {
    list.innerHTML += '<li class="list-group-item"><input onclick="check(this)"type="checkbox" name="cross"> <span>'+todo.value+'</span> <span class="pointer delete glyphicon glyphicon-remove" onclick="remove(this)"></span></li>'
    localStore();
    todo.value = '';
}

function localStore(){
    window.localStorage.setItem("list", list.innerHTML);
    getValues();
}

function getValues() {
    var storedValues = window.localStorage.getItem("list");
    if(!storedValues) {
        list.innerHTML = '<li>No todos</li>'
    } else {
        list.innerHTML = storedValues;
    }

}

function check (e) {
    var node = e.parentNode.children[1];
    if (node.className === 'checked') {
        node.className = '';
    } else {
        node.className = 'checked';
    }
};

function remove(node){
    node.parentNode.parentNode.removeChild(node.parentNode);
}