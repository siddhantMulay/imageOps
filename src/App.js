import React from 'react';

//Import Common Styles
import './styles/common.scss';

//Import Common Components
import Header from './components/Common/Header/Header';

//Import Pages
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <Landing />
      </div>
    </div>
  );
}

export default App;
