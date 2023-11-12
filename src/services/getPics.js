// import axios from "axios";

// axios.defaults.baseURL = "https://pixabay.com/api/"

const BASE_URL = "https://pixabay.com/api"
const API_KEY = "29317703-ef6f9bdce3d80f6e1cfb4e8df"
export const getPics = (searchedPics) => {
    fetch(`${BASE_URL}/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
`).then(response=> response.json).then(pics => console.log(pics))
}