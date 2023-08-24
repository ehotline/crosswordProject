import axios from "axios";
import jwtDecode from "jwt-decode";

export default class UserService {
    static async register(username, email, password) {
        const { data } = await axios.post(process.env.REACT_APP_API_URL + "users/register", {
            Username: username,
            Password: password,
            Email: email
        })
        this.#setToken(data.Token)
        return jwtDecode(data.Token)
    }
    
    static async login(username, password) {
        const { data } = await axios.post(process.env.REACT_APP_API_URL + "users/login", {
            Username: username,
            Password: password
        })
        this.#setToken(data.Token)
        return jwtDecode(data.Token)
    }

    static async check() {
        const { data } = await axios.get(process.env.REACT_APP_API_URL + "users/auth", { headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` } })
        return jwtDecode(data.Token)
    }

    static #setToken(token) {
        localStorage.setItem("Token", token)
    }
}