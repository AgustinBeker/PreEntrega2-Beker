import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='ListGroup'>
            {products.map (prod => <Item key={prod.categoryId} {...prod}/>)}
        </div>
    )
}

export default ItemList