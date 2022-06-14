import { INIT_STATE } from "../../constants";
import { createPosts, getPosts, getType,updatePosts } from "../actions";

console.log(updatePosts.updatePostSuccess().type);

export default function postsReducer(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: true,
            }
        case getType(createPosts.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case getType(updatePosts.updatePostSuccess):
           
            
            return {
                ...state,
                data: state.data.map((post) =>
                post._id === action.payload._id ? action.payload : post,
                )
            
              
            }
        default:
            return state;

    }
}