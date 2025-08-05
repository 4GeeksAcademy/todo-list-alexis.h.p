import { useState } from "react"

export const TodoList = ({todos}) => {

const [input, setInput] = useState("")
	const [hover, setHover] = useState(null)

	const handleInput = (e) => {
		setInput(e.target.value)
	}
	const enviar = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			setCompra([...todos, input])
			setInput("")
		}
	}
	const deleteItem = (i) => {
		let newCompra = todos.filter((_, index) => index !== i)
		setCompra(newCompra)
	}

	return (
		<div className="container">
			<div className="mx-auto row border border-black border-1 justify-content-center" style={{ maxWidth: "800px" }}>

				<h1 className="col-6 text-center">Lista de la todos</h1>


				<input
					className="form-control"
					placeholder="Producto para todosr"
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
								className="d-flex justify-content-between border"
								onMouseEnter={()=>setHover(index)}
								onMouseLeave={()=>setHover(null)}

							>
								<span>{element}</span>
								
								<span 
								onClick={()=>deleteItem(index)}
								className={hover === index ? "" : "d-none"}
								>
<button>hola</button>								</span>
							</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	);




}