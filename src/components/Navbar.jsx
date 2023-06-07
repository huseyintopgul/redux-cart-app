import { FiShoppingCart } from 'react-icons/fi';
import './styles/Navbar-style.css';

const Navbar = ({setShow}) => {
    return (
        <nav>
            <div className='navbar'>
                <span onClick={()=>setShow(true)}>My Shopping</span>
                <div className='navbar-icon'>
                    <span>
                        <FiShoppingCart size={30} />
                    </span>
                    <span>0</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar