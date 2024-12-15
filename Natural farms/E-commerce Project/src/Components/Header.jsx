import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { CartStateContext } from './Context' // we used this, due to it is maintaining state of application i.e,. "value={state}"
import { useContext } from 'react'



const Header = () => {

    // another way ....!
    // const state = useContext(CartStateContext)
    // const cartItemsCount = state.cart.length

    // 8. ekada before ela undade
    // onst CartItemsCount = 0, --> denni CartStateContext, useCotext dwara 
    // cart count andedi update avutadhi
    // 9. "useContext(CartStateContext).cart.length" ==> taken because, cart lo
    // add iyye prathidi array of object format lo untadhi, So, vati lo unna items ni batti,
    // cart lo unna count incremenet avutadhi
    // 10th  point move to context.jsx

    // "cartItems" taken from initial state in "context.jsx"
    const CartItemsCount = useContext(CartStateContext).cart.length
    // ****  & use CartStateContext, because, here we have update products count.

    return (
        <>
            {/* <h1 style={{ textAlign: 'center' }}>Header Part</h1> */}
            <div style={{ border: '2px solid', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'yellowgreen' }}>

                <Link to={'/'}>
                    <div>
                        <img src={Logo} alt={'Logo Image'} width={100} height={100} />
                    </div>
                </Link>

                {/* nav bar eleements */}
                <nav>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </nav>


                <Link to={"/cart"}>
                    <div>
                        <h2>Cart : <span>{CartItemsCount}</span></h2>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header