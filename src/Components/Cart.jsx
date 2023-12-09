import '../ComponentCss/Cart.css'
import { Link } from 'react-router-dom'

const Cart = ({cartItems,handleProductDecrement,handleProductIncrement}) => {
  return (
    <section className='cart'>
      <div className="empty-cart-list">
        {
        cartItems.length == 0 &&
        <div>
            <p>Empty cart</p>
        <Link to = '/products'>Back to the products page</Link>
        </div>
        
        }
      </div>
      <div className="cartproducts-container">
        {cartItems.length > 0 &&
          <div>
            {cartItems.map((item)=> (
            <div className='cartproduct' key={item.id} >
              <div className='cartproduct-first'>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className='cartproduct-img'
                  />
                  <div className="cartproduct-title">{item.title}</div>
              </div>
              <div className="cartproduct-btns">
                <span className='btn incrementBtn' onClick={()=> handleProductIncrement(item)}>+</span>
                <span className="btn decrementBtn" onClick={()=> handleProductDecrement(item)}>-</span>
              </div>
              <div className="cartproduct-quantity">
                <label >{item.quantity} = </label>
                <label >${item.quantity * item.newPrice}</label>
                
              </div>
              
            </div>
          ))}
          </div>
        }
        
        
      </div>
    </section>
  )
}

export default Cart