import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import AddPlayer from './Components/AddPlayer/AddPlayer';
import ConfirmPlayer from './Components/ConfirmPlayer/ConfirmPlayer';
import TrackPoints from './Components/TrackPoints/TrackPoints';
import LuckyDrawNotEntered from './Components/LuckyDraw/LuckyDrawNotEntered';
import LuckyDrawerEntered from './Components/LuckyDraw/LuckyDrawEntered';
import LuckyDrawResultDeclared from './Components/LuckyDraw/LuckyDrawResultDeclared';

function App() {
  return (
    <Router>
          <Route exact path='/' component={ScoreBoard} />
          <Route path='/add-player' component={AddPlayer} />
          <Route path='/confirm-player' component={ConfirmPlayer} />   
          <Route path='/lucky-drawer-enter' component={LuckyDrawNotEntered} />  
          <Route path='/lucky-drawer-entered' component={LuckyDrawerEntered} />  
          <Route path='/lucky-drawer-result' component={LuckyDrawResultDeclared} />  
          <Route path='/track-points' component={TrackPoints} />  
    </Router>
  );
}

export default App;
