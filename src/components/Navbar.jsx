import React from 'react';
import { Link } from 'react-router';



const Navbar = () => {
    return (
        <header>

        
        <div className='nav'>
            <div className='left'>
            <div className='logo'>
                <img className='logoimg' src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png" alt="" />
            </div>
            <div className='foodapp'>FOODIE LAB</div>
            </div>

            <div className='right'>
            <Link className=' nav1' to={'/'} >Home</Link>
            <Link className=' nav1' to={'/about'}> About</Link>
            <Link className=' nav1' to={'/contacts'}> Contact Us</Link>
            
           
             </div>
        </div>
        </header>



    )
}

export default Navbar;