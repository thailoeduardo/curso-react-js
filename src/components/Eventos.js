import Button from "./evento/Buttons"

function Eventos() {
	function eventoClique() {
		console.log(`Click!!!`)
	}

	function eventoUm() {
		console.log(`evento Um!!!`)
	}

	function eventoDois() {
		console.log(`evento Dois!!!`)
	}

	return(
		<div>
			<p>Clique aqui para disparar o evento</p>
			<Button evento={eventoUm} texto="BTN 1" />
			<Button evento={eventoDois} texto="BTN dfsdfsdfnms" />
		</div>
	)
}

export default Eventos