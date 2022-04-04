
import PropTypes from 'prop-types';
import Item from './Item';

function ItemAnoELancamento({marca, ano_lancamento}) {
	return (
		<>
		<li>
			{marca} - {ano_lancamento}
			</li>
		</>
	)
}


ItemAnoELancamento.protoTypes = {
	marca: PropTypes.string.isRequired,
}

ItemAnoELancamento.defaultProps = {
	marca: 'Faltou a marca',
	ano_lancamento: 0
}

export default ItemAnoELancamento;