import React from 'react';
import Post from '../post';
import Firebase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { postsStater$, modalState$ } from '../../redux/selectors';
import { useEffect } from 'react'
import { Row, Col, Modal, Button } from 'antd'
import { FaPlusCircle } from 'react-icons/fa'

import { useCallback, useState, useRef } from 'react';

const ListPost = () => {
    const arr=['1','2','3','4']
    console.log(arr.splice(1,3));
    //get data form create posts

    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    });
    //dispath action get data API
    const dispath = useDispatch();
    const posts = useSelector(postsStater$);
    console.log(posts);
    useEffect(() => {
        dispath(actions.getPosts.getPostsRequest())
    }, [dispath]);

    //show create Modal
    const { isShow } = useSelector(modalState$)

    const hanleOpenModal = useCallback(() => {
        dispath(actions.showModal());
       
    }, [dispath])

    //hide modal
    const onClose = useCallback(() => {
        dispath(actions.hideModal())
        setData({
            title: '',
            content: '',
            attachment: ''
        })
        titleRef.current.focus()
    })
    const handleHideModal = useCallback(() => {
        onClose()
    }, [dispath])
    //focus input when open modal
    const titleRef = useRef();

    const handleOk = useCallback(() => {

        if (data.title !== '' && data.content !== '') {
            dispath(actions.createPosts.createPostRequest(data));
            onClose()
        }

    }, [data, onClose, dispath])



    return (
        <>

            <Row gutter={30}>
                {posts.map(post => <Col span={8} key={post._id}><Post cardInfo={post}></Post></Col>)}
            </Row>

            <div className='create__post' onClick={hanleOpenModal}><FaPlusCircle /></div>

            <Modal title="Them bai viet" visible={isShow} onCancel={handleHideModal} footer={null}>
                <form >
                    <input required ref={titleRef} value={data.title} onChange={(e) => { setData({ ...data, title: e.target.value }) }} placeholder='Nhập tiêu đề' style={{ width: '100%', marginBottom: '10px' }}></input>
                    <textarea required value={data.content} onChange={(e) => { setData({ ...data, content: e.target.value }) }} style={{ width: '100%', height: '150px' }} placeholder='Nhập nội dung'></textarea>
                    <Firebase64 value={data.attachment} style={{ display: 'block' }} accept="image/*" mutiple={false} type="file" onDone={({ base64 }) => setData({ ...data, attachment: base64 })} />
                    <div>
                        <Button type="submit" htmlType='button' style={{ marginTop: "20px" }} onClick={handleOk} >Thêm bài viết</Button>

                    </div>
                </form>

            </Modal>

        </>
    );
}

export default ListPost;
