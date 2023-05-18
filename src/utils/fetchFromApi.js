import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '346ba98da2msh093caf121cbd662p128567jsn6a50868677ef',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}