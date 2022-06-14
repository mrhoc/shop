import React from 'react';
import moment from 'moment'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaHeart } from 'react-icons/fa'
import { Card, Avatar,Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { postsStater$ } from '../../redux/selectors'
import { useCallback } from 'react';
import { updatePosts } from '../../redux/actions';

const { Meta } = Card;

const Post = ({ cardInfo }) => {

    const dispath = useDispatch();
    const data = useSelector(postsStater$)
    const handleLike = useCallback((like) => {
        console.log(like);
        if(like==='like'){
            dispath(updatePosts.updatePostRequest({ ...cardInfo, likeCount: cardInfo.likeCount + 1,liked:true }))
        }
        else{
            dispath(updatePosts.updatePostRequest({ ...cardInfo, likeCount: cardInfo.likeCount>0?cardInfo.likeCount -1:'0'  ,liked:false }))
        }
        
    }, [dispath, cardInfo])

    return (
        <Card 
            style={{
                width: 300,
                marginBottom:'30px'
            }}
            cover={
                <img
                    alt="example"
                    src={cardInfo.attachment ? cardInfo.attachment : 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                />
            }>
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={cardInfo.author}
                description={moment(cardInfo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            />
            <div className="additional">
                <h1 className="card__title">{cardInfo.title}</h1>
                <p>{cardInfo.content}</p>
                <ul className='list-sns'>
                    <li><span style={{marginRight:'5px'}}>{cardInfo.likeCount }</span>{cardInfo.liked? <FaHeart className='like' onClick={()=>{handleLike('unlike')}} />:  <FaHeart className='unlike' onClick={()=>{handleLike('like')}} />}</li>
                    <li><FaFacebookSquare /></li>
                    <li><FaTwitterSquare /></li>
                    <li><FaInstagramSquare /></li>
                </ul>

            </div>
        </Card>


    );
}

export default Post;
