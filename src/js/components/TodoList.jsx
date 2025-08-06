import { useState } from "react"

export const TodoList = ({ todos, createTodo, getTodos, deleteTodo, updateTodo }) => {

	const [input, setInput] = useState("")
	const [hover, setHover] = useState(null)
	const [show, setShow] = useState(false)

	const handleInput = (e) => {
		setInput(e.target.value)
	}
	const enviar = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()

			if (input.trim() === "") {
				setShow(true)
				setTimeout(() => {
					setShow(false)
					return

				}, 3000)
			} else

				createTodo(input)
			setInput("")
			getTodos()
			getTodos()
		}
	}

	const deleteItem = (id) => {
		deleteTodo(id)
		getTodos()
		getTodos()
		getTodos()
	}

	const updateItem = (id) => {
		if (input.trim() === "") {
			setShow(true)
			setTimeout(() => {
				setShow(false)
				return

			}, 3000)
		} else
			updateTodo(id, input)
		getTodos()
		getTodos()

	}

	return (
		<div className="container">
			<div className="mx-auto row border border-black border-1 justify-content-center" style={{ maxWidth: "800px" }}>
				{show && (
					<div class="alert alert-danger" role="alert">
						Introduce algun valor
					</div>
				)}
				<h1 className="col-6 text-center">Lista de la compra</h1>
				<p className="text-center">Para editar un producto sigue estos pasos:
					<br /><strong>1:</strong> Introduce el nuevo valor/producto en la caja de texto de abajo,
					<br /><strong>2:</strong> Apreta el lapiz al lado de la papelera</p>

				<input
					className="form-control"
					placeholder="Introducir producto"
					type="text"
					style={{ width: "680px", }}
					onKeyUp={(e) => enviar(e)}
					value={input}
					onChange={(e) => handleInput(e)}
				/>

				<ul className="col-8 row justify-content-center mt-3">
					{todos.map((element, index) => (
						<div>
							<li key={element.id}
								className="d-flex border justify-content-between "
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(null)}

							>
								<span>{element.label}</span>
								<div>
									<span className={hover === index ? "" : "d-none"}
										onClick={() => updateItem(element.id)}
									> <i class="fa-solid fa-pen"></i> </span>
									<span
										onClick={() => deleteItem(element.id)}
										className={hover === index ? "" : "d-none"}
									>
										<i class="fa-solid fa-trash"></i>	</span>
								</div>
							</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	);




}