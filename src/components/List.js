import Item from './Item';
import ItemAnoELancamento from './ItemAnoELancamento.js';

const List = () => {
	return (
		<>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<Item marca="Ferrari"/>
				<Item marca="Teste"/>
				<ItemAnoELancamento marca="Tesla"/>
				<ItemAnoELancamento ano_lancamento={1987}/>
			</ul>
		</>
	)
}

export default List;