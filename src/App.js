import Sidebar from './layouts/Sidebar'
import React from 'react';
import Header from './layouts/Header';
import PageContainer from './layouts/PageContainer';
import { StockConditionPage } from './pages/StockConditionPage/StockConditionPage';
import { StockInfoPage } from './pages/StockInfoPage/StockInfoPage';
import { Route, Routes } from 'react-router';
import { ThemeInfoPage } from './pages/ThemeInfoPage/ThemeInfoPage';
import { ThemeConditionPage } from './pages/ThemeConditionPage/ThemeConditionPage';
import { StockCondition } from './pages/StockConditionPage/components/StockCondition';
import ThemeFilterPage from './pages/ThemeFIlterPage';
import PorfolioPage from './pages/PortfolioPage';

function App() {

  return (
    <div className="App">
      <div className='main-container'>    
        <Sidebar/>
      <PageContainer>
        <Header/>
        <Routes>
          <Route path='/' element={<StockConditionPage/>}>
            {/* <Route index path='volumeUp' element={<StockCondition/>}/> */}
            <Route path=':condition' element={<StockCondition/>}/>
          </Route>
          <Route path='/theme' element={<ThemeConditionPage/>}></Route>
          <Route path='/stock_info' element={<StockInfoPage/>}></Route>
          <Route path='/theme_info' element={<ThemeInfoPage/>}></Route>
          <Route path='/theme_filter' element={<ThemeFilterPage/>}></Route>
          <Route path='/portfolio' element={<PorfolioPage/>}></Route>
       </Routes>
       </PageContainer>     
      </div>
 
    </div>
  );
}

export default App;

