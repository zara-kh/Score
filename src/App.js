import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

function App() {
  return (
    <Router>
      <Route path='/' component={ScoreBoard} />
    </Router>
  );
}

export default App;
