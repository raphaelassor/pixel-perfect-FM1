import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './cmps/Header'
import {Footer} from './cmps/Footer'
import { Contact } from './pages/Contact'

export function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  )
}

