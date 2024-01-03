import './style.css'

interface Todo{
     title:string,
     isCompleted : boolean,
    readonly id:string,
}

const todos:Array<Todo> = [];

const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;


const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

const generateTodo = (title:string, isCompleted:boolean, id:string) => {
       
    const todo:HTMLDivElement = document.createElement("div");
    todo.className = "todo";
    const checkBox:HTMLInputElement = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "isCompleted";
    checkBox.checked = isCompleted;
    checkBox.onchange = () =>{
        paragraph.className  = checkBox.checked? "textCut" : "";  
        const idx = todos.findIndex((item) => item.id === id ) 
        todos[idx].isCompleted = true;
    }
    
    // create  p for title

    const paragraph:HTMLParagraphElement = document.createElement("p");
    paragraph.innerText = title;
    paragraph.className  = isCompleted? "textCut" : "";    
    // creating delete button
    const btn:HTMLButtonElement = document.createElement("button");
     btn.className = "btn";
     btn.innerText = "X";
     btn.onclick = () =>{
        deleteTodo(id);
     }
      
     todo.append (checkBox,paragraph,btn);
     
     todoContainer.append(todo);
}
const deleteTodo = (id:string) =>{
    const idx = todos.findIndex(item => item.id == id);
    todos.splice(idx, 1);
    renderTodo(todos);
}
const renderTodo = (todos:Array<Todo>):void =>{
    
    todoContainer.innerHTML = "";
    todos.forEach((item) =>{
         generateTodo(item.title,item.isCompleted, item.id);
    })
    

}


myForm.onsubmit = (e) =>{
    e.preventDefault();

   const todo:Todo = {
      title : todoInput.value,
      isCompleted: false,
      id: String(Math.random()*1000),
   }
  todos.push(todo);

  todoInput.value = "";
  renderTodo(todos);
}