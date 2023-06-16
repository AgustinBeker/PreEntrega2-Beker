const products = [
    {
        id: '1',
        name: 'Marca tiento',
        price: 2800,
        category: 'Conjuntos',
        img: '	https://i.postimg.cc/FH2pSdvc/Conjunto1.jpg',
        stock: 25,
        description: 'Descripcion de Conjunto'
    },
    {
        id: '2', 
        name: 'Lody Underwear', 
        price: 1200, 
        category: 'Boxers', 
        img: 'https://i.postimg.cc/pXNP0xvH/Boxer1.jpg', 
        stock: 5, 
        description: 'Descripcion de Lody Underwear'
},
    {
        id: '3', 
        name: 'Saphirus', 
        price: 1200, 
        category: 'Saphirus', 
        img: 'https://i.postimg.cc/fRnpnTqw/Saphirus1.jpg', 
        stock: 8, 
        description: 'Descripcion de Saphirus'
},
{
    id: '4',
    name: 'Marca tiento',
    price: 2800,
    category: 'Conjuntos',
    img: 'https://i.postimg.cc/jS5dGcD6/Conjunto2.jpg',
    stock: 25,
    description: 'Descripcion de Conjunto'
},
{
    id: '5',
    name: 'Marca tiento',
    price: 2800,
    category: 'Conjuntos',
    img: 'https://i.postimg.cc/fyn1vz9q/Conjunto3.jpg',
    stock: 25,
    description: 'Descripcion de Conjunto'
},
{
    id: '6',
    name: 'Marca tiento',
    price: 2800,
    category: 'Conjuntos',
    img: '	https://i.postimg.cc/TYPJ48Jt/Conjunto4.jpg',
    stock: 25,
    description: 'Descripcion de Conjunto'
}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter    (prod => prod.category === productCategory))
        }, 500)
    })

}