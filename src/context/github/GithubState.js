import React, { useReducer } from 'react';
import axios from 'axios';
import Githubcontext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = props => {
    const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
 }

 const [ state, dispatch ] = useReducer(GithubReducer, initialState);

return <Githubcontext.Provider
 value= {{
     users: state.users,
     user: state.user,
     repos: state.repos,
     loading: state.loading
 }}
>
{props.children}
</Githubcontext.Provider>
}

export default GithubState;