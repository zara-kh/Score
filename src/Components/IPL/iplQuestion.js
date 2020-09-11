import React , { Component }from 'react'
import logo from '../images/vs-graphics_1200.jpg'
import { Link} from "react-router-dom";
import './ipl.scss'

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';
import GoBack from '../GoBack/GoBack';
import Close from '../Close/Close';



class Question extends Component {
    constructor(props){
      super(props)
    }

  render() {
    return (
      
        <React.Fragment>
          <div className='ipl-q-container'>
            <Header title='IPL Question'/>
            <div className='goback-close'>
                <GoBack goback={this.props}/>
                <Close/>
            </div>
            
            <div style={{marginTop:'30px', padding:"10px", fontSize: "16px"}}>
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