import logo from './logo.png';
import './mainpage.css'

const Header= ({subtitle}) => (
 <header className="row">
     <div className="col-md-5">
         <img src={logo} className='logo' alt='logohere' />
     </div>
     <div className="col-md-7 subtitle">
        {subtitle} 
         </div>
 </header>

);

export default Header