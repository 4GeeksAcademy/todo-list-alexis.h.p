import { useState } from "react"

export const TodoList = () => {

const [input, setInput] = useState("")
	const [compra, setCompra] = useState([])
	const [hover, setHover] = useState(null)

	const handleInput = (e) => {
		setInput(e.target.value)
	}
	const enviar = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			setCompra([...compra, input])
			setInput("")
		}
	}
	const deleteItem = (i) => {
		let newCompra = compra.filter((_, index) => index !== i)
		setCompra(newCompra)
	}

	return (
		<div className="container">
			<div className="mx-auto row border border-black border-1 justify-content-center" style={{ maxWidth: "800px" }}>

				<h1 className="col-6 text-center">Lista de la compra</h1>


				<input
					className="form-control"
					placeholder="Producto para comprar"
					type="text"
					style={{ width: "680px", }}
					onKeyUp={(e) => enviar(e)}
					value={input}
					onChange={(e) => handleInput(e)}
				/>

				<ul className="col-8 row justify-content-center mt-3">
					{compra.map((element, index) => (
						<div>
							<li key={index}
								className="d-flex justify-content-between border"
								onMouseEnter={()=>setHover(index)}
								onMouseLeave={()=>setHover(null)}

							>
								<span>{element}</span>
								
								<span 
								onClick={()=>deleteItem(index)}
								className={hover === index ? "" : "d-none"}
								>
									<i class="fa-solid fa-trash"></i>
								</span>
							</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	);




}