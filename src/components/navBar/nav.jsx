// import './nav.css'
import './color-1.css'
import './color-2.css'
import './color-3.css'
import './color-4.css'
import './color-5.css'
// import './pot'
import Home from '../home/home'
import {FaHome,FaUser,FaList,FaBriefcase,FaComment} from 'react-icons/fa'



const Nav = () => {
    return (
        <div className='main-container'>
            <div className="aside" id='aside'>
                <div className="logo">
                    <a href="/"><span>N</span>goma</a>
                </div>
                <div className="nav-toggler" id='nav-toggler'>
                    <span></span>
                </div>
                <ul className="nav" id='nav'>
                    <li id='li'><a href="/" id='a'><i><FaHome/></i>Home</a></li>
                    <li id='li'><a href="/about" id='a'><i className='fa fa-home'><FaUser/></i>About</a></li>
                    <li id='li'><a href="/service" id='a'><i className='fa fa-home'><FaList/></i>Services</a></li>
                    <li id='li'><a href="/portfolio" id='a'><i className='fa fa-home'><FaBriefcase/></i>portfolio</a></li>
                    <li id='li'><a href="/contact" id='a'><i className='fa fa-home'><FaComment/></i>Contact</a></li>
                    
                </ul>
            </div>
            
        </div>
    );
}

export default Nav;
