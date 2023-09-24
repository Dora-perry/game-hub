import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:'237797d3a1b245ccba43fdc729605fea'
    }
})