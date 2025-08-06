import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodoList } from "./TodoList.jsx"
//create your first component
const Home = () => {
	const [todos, setTodos] = useState([])



	const url = "https://playground.4geeks.com/todo/"

	const getTodos = async () => {
		const response = await fetch(url + "users/manteca")
		if (!response.ok) {
			console.log("usuario no encontrado")

		}
		const data = await response.json()
		setTodos(data.todos)
	}


	const createTodo = async (label) => {
		const response = await fetch(url + "todos/manteca", {
			method: "POST",
			body: JSON.stringify({
				label: label,
				is_done: false,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});



	}
	const deleteTodo = async (id) => {

		const response = await fetch(url + "todos/" + id, {
			method: "DELETE"
		}
		)

  
	}

	const updateTodo = async (id,label) => {
		const response = await fetch(url + "todos/" + id, {
			method: "PUT",	
		    body: JSON.stringify({
				label: label,
				is_done: false,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}
	    )
	}
	
	useEffect(() => { getTodos() }, [])





	return (
		<div>
			<TodoList todos={todos} createTodo={createTodo} getTodos={getTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />

		</div>
	);
};

export default Home;