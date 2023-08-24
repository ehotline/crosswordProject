import axios from "axios"

export default class CrosswordService {
    static async getAll() {
        const response = await axios.get(process.env.REACT_APP_API_URL + "crosswords")
        return response
    }

    static async add(crossword) {
        const response = await axios.post(process.env.REACT_APP_API_URL + "crosswords", {
            Title: crossword.Title,
            Description: crossword.Description,
            Rows: crossword.Rows,
            Columns: crossword.Columns
        })
        return response
    }

    static async remove(id) {
        try {
            const response = await axios.delete(process.env.REACT_APP_API_URL + "crosswords/" + id)
            return response
        } catch (e) {
            console.log(e);
        }
    }
}