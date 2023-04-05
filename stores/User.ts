import { defineStore } from 'pinia'
/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode'

// We cannot use app config yet as it is not yet hydrated
const UserURL = 'https://v1-others-test.mercury.infinity-api.net/api/user'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            user: {}, // User profile - name, pics, ..
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
            if (!this.token) return
            // We can call getUser from server
            this.getUserFromServer()
        },
        async getUserFromServer() {
            const { data: user } = await useAuthLazyFetch(`${UserURL} / me`, {})
            this.user = user
        },
        deleteToken() {
            this.token = ''
            this.user = {}
        },
        isLoggedIn() {
            return Boolean(this.token)
        },
        getTokenData() {
            const token = this.token
            if (!token) throw new Error(`User not logged in`)
            return jwt_decode(token)
        },
    },
})
