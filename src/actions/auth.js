import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types'
import api from '../api'

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})
export const login = credentials => despatch =>
    api.user.login(credentials).then(user => {
        localStorage.bookwormJWT = user.token
        despatch(userLoggedIn(user))
    })

export const logout = () => despatch => {
    localStorage.removeItem('bookwormJWT')
    despatch(userLoggedOut())
}