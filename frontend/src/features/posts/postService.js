import axios from 'axios'

const API_URL = '/posts/'


//Create new Post
const createPost = async(postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(API_URL, postData, config)

    return response.data
}

//Get Posts
const getPosts = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL , config)

    return response.data
}

const postService = {
    createPost,
    getPosts
}

export default postService