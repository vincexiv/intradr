// import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CreateBot from './Pages/CreateBot/CreateBot';
import { availableAssets } from './Pages/CreateBot/UtilityVariables';
import { getUntrackedAssets } from './Pages/CreateBot/UtilityFunctions';
import Footer from './Components/Footer/Footer';
import Strategies from './Pages/Strategies/Strategies';
import Backtesting from './Pages/Backtesting/Backtesting';

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
    bots: [{name: "xiv_bot", value: ""}],
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
      {/* <BrowserRouter> */}
        <Navbar />
        <Routes>
            <Route path="/" element={<CreateBot componentState={componentState} setComponentState={setComponentState}/>} />
            <Route path='/strategies' element={ <Strategies /> } />
            <Route path='/backtesting' element={ <Backtesting /> } />
        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
