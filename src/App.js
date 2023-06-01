// import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CreateBot from './Pages/CreateBot/CreateBot';
import { availableAssets } from './Pages/CreateBot/UtilityVariables';
import { getUntrackedAssets } from './Pages/CreateBot/UtilityFunctions';
import Demo from './Pages/Demo/Demo';
import demos from './Variables/demos';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [componentState, setComponentState] = useState({
    activePage: location.pathname || localStorage.getItem('activePage') || 'home',
    demos: demos,
    activeDemo: demos[0],
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
        xvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        figureData: [{
            yvals: [34, 12, 13, 4, 1, 13, 13, 41, 49, 9],
            title: "Example",
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
