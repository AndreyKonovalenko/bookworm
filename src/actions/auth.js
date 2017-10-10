import { USER_LOGGED_IN } from '../types'
import api from '../api'

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})
export const login = credentials => despatch =>
    api.user.login(credentials).then(user => despatch(userLoggedIn(user)))