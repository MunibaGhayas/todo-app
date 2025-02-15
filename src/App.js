import { useState } from 'react';
import './App.css';
import image from "./asset/book.png"
function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    let todo = event.target.elements.todo.value;
    if(!todoList.includes(todo)){
      let final = [...todoList, todo]
      setTodoList(final)
    } else{
      alert('Already include');
    }

  };

  let list = todoList.map((value, index)=> {
    return(
      <TodoItems value={value} key={index} indexNum={index} todoList={todoList} setTodoList={setTodoList}/>
    )
  })

  return (
    <div className="App">
      <div className="todo-app">
            <h2>To Do List <img src={image} alt="" /></h2>
            <form onSubmit={addTodo}>
                <input type="text" name='todo' placeholder=" Enter your task"/>
                <button type="submit">Save</button>
            </form>
            <div className='listdiv'>
              <ul>
                {list}
              </ul>
            </div>
      </div>
    </div>
  );
}

function TodoItems({value, indexNum, todoList, setTodoList}) {
  const [status, setStatus] = useState(false);

  const deleteRow = ()=>{
    let finalData = todoList.filter((val, i)=> i !== indexNum)
    setTodoList(finalData);
  }
  const statusUpdate = ()=>{
    setStatus(!status);
  }
  return(
    <li className={status? "todocomplete" : ""} onClick={statusUpdate}>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}

export default App;
