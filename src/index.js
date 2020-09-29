let input = document.querySelector('input');
let listArea = document.querySelector('#list-area');
// let CHECK = `fas fa-check-circle`;

let id = 0;
let list = [];

document.addEventListener('keyup', (event)=>{
    if (event.which === 13 && input.value !== ''){
        let task = input.value;
        let listItem = document.createElement('div');

        listItem.className = 'list-item';
        listItem.id = id.toString();

        listItem.innerHTML = `<i class="fa fas fa-circle-o check" ></i>
                                <p id="text">${task}</p>
                                <i class="material-icons delet">delete</i>`;

        listArea.appendChild(listItem);

        list.push({
            id : id,
            task : task,
            done : false,
            delet : false
        });
        id++;
        input.value = '';
    }
});

listArea.addEventListener('click', (event)=>{
    let element = event.target;
    if(element.classList.contains('check')){
        doneToDo(element);
    } else if (element.classList.contains('delet')){
        delet(element);
    }
})

function doneToDo(element){
    element.classList.toggle('fa-circle-o');
    element.classList.toggle('fa-check-circle');
}

function delet(element){
    element.parentNode.style.display = 'none'
}