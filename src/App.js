// import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CreateBot from './Pages/CreateBot/CreateBot';
import { availableAssets } from './Pages/CreateBot/UtilityVariables';
import { getUntrackedAssets } from './Pages/CreateBot/UtilityFunctions';
import Demo from './Pages/Demo/Demo';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [componentState, setComponentState] = useState({
    activePage: location.pathname || localStorage.getItem('activePage') || 'home',
    action: "do-your-math",
    fullAssetList: availableAssets,
    untrackedAssets: getUntrackedAssets(availableAssets, []),
    trackedAssets: [],
    constraintCount: 1,
    variables: [],
    portfolios: [{name: "xiv", value: ""}],
    fundamentals: [],
    market: "US",
    index: "N/A",
    limit: 100,
    portfolioSize: 0,
    strategy: `Write something...`,
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

  useEffect(()=>{
    navigate(componentState.activePage)
  }, [componentState, navigate])

  return (
    <div className="App">
      <Navbar componentState={componentState} setComponentState={setComponentState} />
      <Routes>
        <Route exact path="/home" element={<CreateBot componentState={componentState} setComponentState={setComponentState}/>} />
          <Route exact path="/demo" element={<Demo componentState={componentState} setComponentState={setComponentState}/>} />
          <Route path="/" element={<CreateBot componentState={componentState} setComponentState={setComponentState}/>} />
      </Routes>
    </div>
  );
}

export default App;
