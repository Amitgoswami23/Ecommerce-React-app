import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <AuthProvider>
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

              <PrivateRoute path="/inventrory">
                <Inventory />
              </PrivateRoute>

              
              <PrivateRoute path="/placeorder">
                <PlaceOrder />
              </PrivateRoute>

              <PrivateRoute path="/shipping">
                <Shipping />
              </PrivateRoute>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>

            </Switch>
          </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
