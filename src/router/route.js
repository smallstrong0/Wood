import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router'


const Search = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('/Users/smallstrong/Desktop/github/whale/react/Wood/src/container/search').default)
    }, 'Search')
}


const RouteConfig = (
    <Router>
        <Route path="/" getComponent={Search}/>
    </Router>
)

export default RouteConfig
