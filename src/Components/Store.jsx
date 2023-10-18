import { NavBar } from "./Navbar"
import { useEffect, useState } from "react"
import PropTypes, { func } from 'prop-types'
import  '../Styles/store.css'

function Store () {
    const [fetchedItems, setFetchedItems] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [cartStatus, setCartStatus] = useState(false)

    function handleCartAdd (item) {
        let finalArray = cartItems.filter(cartItem => cartItem._id !== item._id)
        class newItem {
            constructor (title, amount, _id) {
                this.title = title,
                this.amount = amount,
                this._id = _id
            }
        }
        if (finalArray.length < cartItems.length) {
            let existingItem = cartItems.findIndex(cartItem =>                 
                cartItem._id === item._id
            )
            const theArray = cartItems
            theArray[existingItem] = new newItem(theArray[existingItem].title, theArray[existingItem].amount + 1, theArray[existingItem]._id)
            finalArray = [...theArray]
            console.log(theArray)
        } else {
            finalArray = [...finalArray, item]
        }
        setCartItems(finalArray)
    }

    function handleCartRemove (item) {

    }

    function handleCartPopup () {
        !cartStatus ? setCartStatus(true) : setCartStatus(false)
    }

    useEffect(() => {
       fetch('https://api.storerestapi.com/products?limit=10')
        .then(data => data.json())
        .then(json => setFetchedItems(json))
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            <NavBar onClick={handleCartPopup} />
            <div className="store">
                {
                    fetchedItems ? 
                    fetchedItems.data.map(item => {
                        item.amount = 1
                        return <StoreItem onClick={() => {
                            handleCartAdd(item)
                        }} key={item._id} price={item.price} title={item.title} />
                    })

                    : <p>loading...</p>
                }
            </div>
            {
                cartStatus ? <CartPopup onClick={() => handleCartRemove} cartItemsArray={cartItems} /> : ''
            }
        </>
    )
}

function StoreItem ({ title, price, id, onClick }) {
    return (
        <div className="item" key={id}>
            <h4>{title}</h4>
            <p>{'$' + price}</p>
            <button onClick={onClick}>Add To Cart</button>
        </div>
    )
}

function CartPopup ({ cartItemsArray, onClick }) {
    return (
        <div className="cartPopup">
            <h1>Cart</h1>
            {
                cartItemsArray.map(item => {
                    return (
                        <div key={item._id}>
                            <p>{item.title}</p>
                            <p>Amount: {item.amount}</p>
                            <button onClick={onClick}>Remove</button>
                        </div>
                    )
                })
            }
        </div>

    )
}

CartPopup.propTypes = {
    cartItemsArray: PropTypes.array,
    onClick: PropTypes.func,
}

StoreItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    onClick: PropTypes.func
}

export default Store