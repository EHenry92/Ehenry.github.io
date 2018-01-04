import React, {Component} from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import {Main, Projects, About, Contact, Resume, Home} from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/work" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route component={Home} />
          </Switch>
        </Main>
      </Router>
    )
  }
}
