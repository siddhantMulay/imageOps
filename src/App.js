import React from 'react';
import { Provider } from 'react-redux';

//Import Store
import dataStore from './redux/store';

//Import Common Styles
import './styles/common.scss';

//Import Common Components
import Header from './components/Common/Header/Header';

//Import Pages
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Provider store={dataStore}>
      <div className="App">
        <Header />
        <div className="pageContent">
          <Landing />
        </div>
      </div>
    </Provider>
  );
}

export default App;
