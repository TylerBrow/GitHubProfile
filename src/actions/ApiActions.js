import store from '../store'
import axios from 'axios'
// so we can use store.dispatch()

export function getUser(){
    axios.get('https://api.github.com/users/TylerBrow').then(resp => {
        store.dispatch({
            type: 'GET_USER',
            payload: resp.data
        })
    })
}


export function getRepo() {
    axios.get('https://api.github.com/users/TylerBrow/repos').then(resp => {
        store.dispatch({
            type: 'GET_REPO',
            payload: resp.data
        })
    })
}