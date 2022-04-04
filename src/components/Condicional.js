import { useState } from "react";

export default function Condicional() {

	const [email, setEmail] = useState();
	const [userEmail, setUserEmail] = useState();

	function enviarForm(e) {
		e.preventDefault();
		setUserEmail(email)
	}

	function limparEmail() {
		setUserEmail()
	}

	return (
		<div>
			<h2>Formulário</h2>

			<from>
				<input 
				type="text" 
				placeholder="Email"
				onChange={(e) => setEmail( e.target.value ) }
				/>
				<button type="submit" onClick={enviarForm}>Enviar</button>
				{userEmail}
			</from>

			{userEmail && (
				<div>

					<button onClick={limparEmail}>Limpar email</button>
				</div>
			)
			}

		</div>
	)

}