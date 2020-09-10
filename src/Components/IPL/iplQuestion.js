import React , { Component }from 'react'
import logo from '../images/vs-graphics_1200.jpg'
import { Link} from "react-router-dom";
import './ipl.scss'

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';



class Question extends Component {
  render() {
    return (
      
        <React.Fragment>
          <div className='ipl-q-container'>
            <Header/>
            <h1>ipl cuestion</h1>
            <div style={{ padding:"10px", fontSize: "16px"}}>
              <div className="">
                <div className='ipl-q-imgdiv' >
                  <img src={logo} className='ipl-q-img' alt="" />
                </div>
                <div className="main">
                  <p>
                    Guess who wins today?
                  </p>
                  <Link to="/confirm/Mumbai Indians" className='ipl-q-link' >Mumbai Indians</Link>
                  <Link to="/confirm/Chennai Super Kings"  className='ipl-q-link' >Chennai Super Kings</Link>
                </div>
              </div>
            </div>
            <Footer/>
          </div>  
        </React.Fragment>
    )
  }
}

export default Question;