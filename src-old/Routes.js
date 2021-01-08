import React from 'react';
import Home from './Home'
import Blog from './Blog'
import AddPost from './AddPost'
import Post from './Post'

import { Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/new">
                <AddPost />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route path="/:postId" exact>
                <Post />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;