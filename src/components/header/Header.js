import { useState, useEffect } from "react"
import "./style.css"

const Header = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

            setVisible(true);

    },[])

    return (
      <>
      <header className="header">
        <div  className={!visible ? 'hide' : 'visible'}>
       <div className="header__wrapper">
           <h1 className='header__title'>
               <strong>Hi, my name is <em>Ilya</em></strong><br />
               a frontend developer
           </h1>
           <div className="header__text">
               <p>with passion for learning and creating.</p>
           </div>
       </div>
       </div>
   </header>
   </>		
	);
}

export default Header;