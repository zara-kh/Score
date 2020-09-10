import React from 'react';
// import { Link } from 'react-router-dom';
// import HamburgerMenu from 'react-hamburger-menu';
import './header.scss';



export default function Header({ title = 'India vs West Indies' }) {

    // const [isMenuOpen, toggleMenu] = useState(false)

    // const menuhandleClick = () => {
    //     toggleMenu(!isMenuOpen)
    // }

    return (
        <div className='header'>
            <p>{title}</p>
        </div>

        
        // <div className='header'>
        //     <HamburgerMenu
        //       isOpen={isMenuOpen}
        //       menuClicked={menuhandleClick}
        //       width={20}
        //       height={20}
        //       strokeWidth={2}
        //       rotate={0}
        //       color='black'
        //       borderRadius={0}
        //       animationDuration={0.5} 
        //   />
        //   {
        //       isMenuOpen 
        //       && <div className='h-p'>
        //             <Link to='/add-player'><p>Add Player</p></Link>
        //             <Link to='/confirm-player'><p>Confirm Player</p></Link>
        //             <Link to='/lucky-drawer-enter'><p>Lucky Drawer Enter</p></Link>
        //             <Link to='/lucky-drawer-entered'><p>Lucky Drawer Entered</p></Link>
        //             <Link to='/lucky-drawer-result'><p>Lucky Drawer Result</p></Link>
        //             <Link to='/track-points'><p>Track Points</p></Link>
        //             <Link to='/spinner'><p>Spinner</p></Link>
        //             <Link to='/confirm/:handle'><p>Confirm</p></Link>
        //             <Link to='/question'><p>Question</p></Link>
        //         </div>
        //   }
        // </div>
    )
}
