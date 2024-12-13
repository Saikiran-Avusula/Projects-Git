import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'


const Header = () => {

    const CartCount = 0

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
                        <h2>Cart : <span>{CartCount}</span></h2>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header