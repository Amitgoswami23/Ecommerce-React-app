import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
          <Header />
        <Switch>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/order">
            <OrderReview />
          </Route>

          <Route path="/inventrory">
            <Inventory />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
