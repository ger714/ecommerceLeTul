import './App.css';

/*Componentes*/
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'

/*React Router Dom*/
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route activeClassName="selected" exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/categories/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
