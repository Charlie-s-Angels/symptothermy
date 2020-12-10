import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Welcome from './Welcome.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Welcome" component = {Welcome} title = "Welcome" initial = {true} />
      </Scene>
   </Router>
)
export default Routes
