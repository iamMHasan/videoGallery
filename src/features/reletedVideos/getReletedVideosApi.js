import axios from '../../utilities/axios'

// tags_like=tips&tags_like=debounce&id_ne=1&_limit=3

export const getReletedVideos = async ({id, tags}) => {
    const limit = 5;
    const queryString = tags?.length > 0 ? tags.map(tag => `tags_like=${tag}`).join('&') + `id_ne=${id}&_limit=${limit}` : `id_ne=${id}&_limit=${limit}`
    const response = await axios.get(`/videos?${queryString}`)

    return response.data
}