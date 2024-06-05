export default function LoginForm() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const username = event.target[0].value
		const password = event.target[1].value

		if (username === "admin" && password === "admin") {
			window.location.href = "/dashboard"
		} else {
			alert("Usuario o contraseña incorrectos")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-group mt-4">
				<div className="input-group-text bg-dark">
					<img
						src="../../public/username-icon.svg"
						alt="username-icon"
						height="15rem"
					/>
				</div>
				<input
					id="username"
					className="form-control bg-light"
					type="text"
					placeholder="Usuario"
				/>
			</div>
			<div className="input-group mt-1">
				<div className="input-group-text bg-dark">
					<img
						src="../../public/password-icon.svg"
						alt="password-icon"
						height="15rem"
					/>
				</div>
				<input
					id="password"
					className="form-control bg-light"
					type="password"
					placeholder="Contraseña"
				/>
			</div>
			<div className="d-flex justify-content-around mt-2">
				<div className="d-flex align-items-center gap-1">
					<input className="form-check-input" type="checkbox" />
					<div className="pt-1 fw-semibold">Recordarme</div>
				</div>
				<div className="pt-1">
					<a href="#" className="text-decoration-none fst-italic">
						¿Olvidaste tu contraseña?
					</a>
				</div>
			</div>
			<button type="submit" className="boton-login btn text-white d-flex mt-4">
				Iniciar Sesión
			</button>
		</form>
	)
}
