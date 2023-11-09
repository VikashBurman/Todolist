import React, { useState } from "react";
import fTodoList from "./fTodoList";

const App = () =>{
  const [inputList,setInputList] = useState("");
  const[items,setItems] = useState([]);

  const inputEvents =(event)=>{
    setInputList(event.target.value);
  }

  const listOfItems = () =>{
    setItems((oldItem)=>{
      return [...oldItem,inputList];
    })
    setInputList("");
  }
  const deleteItems =(id)=>{
    console.log(id);
    setItems((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
          return index !== id;
      })
    })
  }
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type="text" placeholder="Add an Item" onChange={inputEvents} value={inputList}/>
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemValue,ind)=>{
              {/* return <fTodoList text = {itemValue}/>; */}
              return (<>
              <div className="todo-item-container">
                <i class="fa-solid fa-trash" onClick={()=>deleteItems(ind)}></i>
                <li>{itemValue}</li>
                </div>
              </>);
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;
