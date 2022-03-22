const submit_todo=()=>{
    let title=document.getElementById('title').value
    let desc=document.getElementById('desc').value
   
    let todos=[]
    let localTodos=localStorage.getItem('todos');
    console.log(localTodos);
    if(localTodos!=null){
        todos=JSON.parse(localTodos);
    }

    let objectTodo={
        id:Math.trunc(Math.random()*1000),
        title:title,
        desc:desc
    }

    todos.push(objectTodo);

    localStorage.setItem('todos',JSON.stringify(todos));
    location.reload();
    show_todo();
}

let show_todo=()=>{
    let content="";
    let todoarray=localStorage.getItem('todos');
    let todoString=JSON.parse(todoarray);

    if(todoarray==null){
        document.getElementById('data').innerHTML="<h1 >NO TODOS Available</h1>"
    }else{
        for(let todo of todoString.reverse()){
          let id=todo.id;
            content+=
            `
            <div class="col-md-4" style=" 5px solid red;">

            <div class="card m-2">
            <div class="card-header">
            <h3>${todo.title}</h3>
            </div>
            <div class="card-body">
              
              <p class="card-text">${todo.desc}</p>
           
            
              <button class="btn btn-warning btn-sm" onclick="deletetodo(${id})">Delete</button>

            </div>
          </div>

            </div>
            `
            
        }
        document.getElementById('data').innerHTML=content;
       
    }
}
let deletetodo=(id)=>{

    
    let todosarr=localStorage.getItem('todos');
    let tostr=JSON.parse(todosarr);
    var lists = tostr.filter(x => {
        return x.id != id;
      })
      localStorage.setItem('todos', JSON.stringify(lists));
     
      show_todo()
}
show_todo();