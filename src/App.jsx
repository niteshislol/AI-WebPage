import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;