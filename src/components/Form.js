import {useState} from 'react';

function Form () {

	function submitForm(e) {
		e.preventDefault();

		console.log('Formulario enviado');
		console.log(nome);
		console.log(senha);
	}

	const [nome, setNome] = useState();
	const [senha, setSenha] = useState();

	return (
		<div>
			<form onSubmit={submitForm}>
				<input type="text" placeholder="Nome" onChange={ (e) => setNome(e.target.value) }/> 
				<br/>
				<input type="passwrod" placeholder="senha" onChange={ (e) => setSenha(e.target.value) }/>
				<br/>
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}

export default Form