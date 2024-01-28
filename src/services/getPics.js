import axios from "axios";

const BASE_URL = "https://pixabay.com/api"
const API_KEY = "29317703-ef6f9bdce3d80f6e1cfb4e8df"

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        per_page: 12,
    }
})

export const getPics = async (query, page = 1) => {
    try {
        const { data } = await instance.get("/", {
            params: {
            page,
            q: query,
            key: API_KEY,
            image_type: 'photo',
            per_page: 12,
            orientation: 'horizontal',
            safesearch: true,
            }
        });
        return data;
    }
    catch (error) {
        throw new Error(`Failed to fetch pictures: ${error.message}`);
    }
}