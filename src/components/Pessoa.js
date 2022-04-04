
/**
 * 
 * 
 * @param {*} props 
 * @returns 
 */
 const Pessoa = ({nome, idade, cargo}) => {
	return(
		<div>
			<p>Nome: {nome} !</p>
			<p>Idade: {idade} !</p>
			<p>Cargo: {cargo} !</p>
		</div>	
	)
};

export default Pessoa;