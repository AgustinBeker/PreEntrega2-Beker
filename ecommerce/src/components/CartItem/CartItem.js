

const CartItem = ({item}) => {
    return (
        <div>
            <h4>{item.name}</h4>
            {/* <p>Cantidad: {quantity} </p> */}
            <p>Precio: $ {item.price} </p>
        </div>
    )
}

export default CartItem