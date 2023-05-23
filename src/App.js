// import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CreateBot from './Pages/CreateBot/CreateBot';
import { availableAssets } from './Pages/CreateBot/UtilityVariables';
import { getUntrackedAssets } from './Pages/CreateBot/UtilityFunctions';

function App() {
  const location = useLocation()
  const [componentState, setComponentState] = useState({
    activePage: location.pathname || localStorage.getItem('activePage') || 'home',
    action: "do-your-math",
    fullAssetList: availableAssets,
    untrackedAssets: getUntrackedAssets(availableAssets, []),
    trackedAssets: [],
    constraintCount: 1,
    variables: [],
    strategies: [{name: "xiv_bot", value: ""}],
    fundamentals: [],
    market: "US",
    index: "N/A",
    limit: 100,
    portfolioSize: 0,
    strategy: `You can write your strategy here.`,
    expressionArray: [],
    figureDetails: {
        backdate_period: 10,
        graph_type: "line",
        xvals: [],
        figureData: [{
            yvals: [],
            title: "",
            lineGraphStyle: {}
        }],
        plotVariables: []
    }
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<CreateBot componentState={componentState} setComponentState={setComponentState}/>} />
      </Routes>
    </div>
  );
}

export default App;
