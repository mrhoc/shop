import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api/index'

function* fetchPostsSagas(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (error) {
        console.error(error)
        yield put(actions.getPosts.getPostsFailure(error))
    }

}


function* createPostSagas(action) {
    try {
        const post = yield call(api.createPost,action.payload);
        yield put(actions.createPosts.createPostSuccess(post.data))
    } catch (error) {
        console.error(error)
        yield put(actions.createPosts.createPostFailure(error))
    }

}

function* updatePostSagas(action) {
    try {
        const post = yield call(api.updatePost,action.payload);
        yield put(actions.updatePosts.updatePostSuccess(post.data))
    } catch (error) {
        console.error(error)
        yield put(actions.updatePosts.updatePostFailure(error))
    }

}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSagas)
    yield takeLatest(actions.createPosts.createPostRequest, createPostSagas)
    yield takeLatest(actions.updatePosts.updatePostRequest, updatePostSagas)
  
}

export default mySaga