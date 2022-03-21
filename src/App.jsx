import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import TabBar from './components/TabBar'
import Movie from './pages/Movie'
import Detail from './pages/Movie/detail'
import Cinema from './pages/Cinema'
import Mine from './pages/Mine'

const App = () => {
    return (
        <div>
            <Header />
             {/* 注册路由 */}
             <Switch>
                    <Route path="/movie" component={Movie} />
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/mine" component={Mine} />
                    <Route path='/detail/:movieId'  component={Detail}/>
                    <Redirect to="/movie"/>
            </Switch>

            <TabBar />
        </div>
    );
}

export default App;
