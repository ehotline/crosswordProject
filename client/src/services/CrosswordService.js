import axios from "axios"

export default class CrosswordService {
    static async getAll() {
        const response = await axios.get(process.env.REACT_APP_API_URL + "Crosswords")
        return response
    }
}