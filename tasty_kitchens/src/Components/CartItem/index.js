import { Component } from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
import './index.css'

class CartItem extends Component {

    state = {
        quantity: 1,
    }

    onIncrement = () => {
        this.setState(prev => ({quantity: prev.quantity + 1}))
    }

    onDecrement = () => {
        if (this.state.quantity > 1) {
            this.setState(prev => ({quantity: prev.quantity - 1}))
        }
    }

    render() {
        const {itemDetails, updateQuantity} = this.props
        const {id, imageUrl, name, cost} = itemDetails
        const {quantity} = this.state
        updateQuantity(id, quantity)
    return(
        <li className='cart-item'>
            <div className='image-name-box'>
                <img src={imageUrl} alt="cart-img" className='cart-item-image' />
                <h2 className='cart-item-name'>{name}</h2>
            </div>
            <div className='quantity-box'>
                <AiOutlineMinusSquare className='cart-item-quantity-icon' onClick={this.onDecrement} />
                <h4 className='cart-item-quantity'>{quantity}</h4>
                <AiOutlinePlusSquare className='cart-item-quantity-icon' onClick={this.onIncrement} />
            </div>
            <div className='cart-price-box'>
                <h1 className='cart-item-price'><BiRupee /> {quantity * cost}</h1>
            </div>
            <img src={imageUrl} alt="cart img" className='mob-cart-item-image' />
            <div className='cart-item-details'>
                <h1 className='cart-item-name'>{name}</h1>
                <div className='mob-cart-quantity-box'>
                    <AiOutlineMinusSquare className='cart-item-quantity-icon' onClick={this.onDecrement} />
                    <h4 className='cart-item-quantity'>{quantity}</h4>
                    <AiOutlinePlusSquare className='cart-item-quantity-icon' onClick={this.onIncrement} />
                </div>
                <h1 className='cart-item-price'><BiRupee /> {quantity * cost}</h1>
            </div>
        </li>
    )        
    }
    
}

export default CartItem