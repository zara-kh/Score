import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import mainSpinner from './mainSpinner'
import './spinner.scss'
import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';

function Spinner() {
  //reference to Populate the Spinner in specified div 
  const refSpinner = useRef(null)
  //reference to Populate result in specified div 
  const refResult = useRef(null)
  //pass integer value you as many time you want the user to spin 
  const refSpin = useRef(2)
  //reference data to be displayed in the spinner in array combination of label and value
  const data = useRef([
    {
      label: 'SUZUKI',
      value: 1,
    },
    {
      label: 'FERRARI',
      value: 2,
    },
    {
      label: 'Ajay',
      value: 3,
    },
  ]);

  useEffect(() => {
    mainSpinner(refSpinner.current, refResult.current, refSpin.current, data.current)
  }, [])

  return (
    <>
    <div className='s-container'>
      <Header/>
      <div className='s-goback'>
         <Link to='add-player'> Go back </Link>
      </div>

      <h1>Spinner</h1>
        <div id="spinner"  className='s-spinner'  ref={refSpinner} />

        <div id="action"  className='s-action'>
          <p ref={refResult}>  </p>
        </div>

        <Footer/>        
     </div>
    </>
  )
}

export default Spinner
