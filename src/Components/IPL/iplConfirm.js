import React, {Component} from 'react'
import {Link} from "react-router-dom";
import logo1 from '../images/Chennai_Super_Kings.jpg'
import logo2 from '../images/Chennai_Super_Kings.jpg'
import './ipl.scss'

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';




class Confirm extends Component {
    render() {
        
    const { handle } = this.props.match.params;
    let logo = ''
    if (handle === "Mumbai Indians") {
        logo = logo1
    }
    else {
        logo = logo2
    }

    return (
        <React.Fragment>
          <div className='ipl-c-container'>
            <Header title='IPL Confirm'/>

            <div style={{marginTop:'30px', padding:"10px", fontSize: "16px"}}>
              <div>
                <div className='ipl-c-imgdiv'>
                  <img src={logo} className='ipl-c-img' alt="" />
                </div>
                <div className="main">
                  <p>
                    You have chosen :
                  </p>
                  <p>
                    {handle}
                  </p>
                  <Link to="#"  className='ipl-c-link'> Confirm</Link>
                  <Link to="/question"  className='ipl-c-link' > Go back</Link>
                </div>
              </div>
            </div>

            <Footer/>
          </div>
        </React.Fragment>
    )
  }
}
export default Confirm;