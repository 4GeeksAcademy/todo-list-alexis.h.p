import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {TodoList} from "./TodoList.jsx"
//create your first component
const Home = () => {
	const [todos, setTodos] = useState([])
	
	
	
	const getTodos = async () =>{   
		const url = "https://playground.4geeks.com/todo/users/manteca"
		const response = await fetch(url)	
		if (!response.ok ){
			console.log("usuario no encontrado")

		}
		const data = await response.json() 
		setTodos(data.todos)
	}
	const createTodos = () =>{console.log()}
    const deleteTodos = () =>{console.log()}	
	useEffect (()=>{getTodos()},[]) 
	
	
	
	
	
	return (
		<div>
        <TodoList todos={todos}/>    
        
		</div>
	);
};

export default Home;