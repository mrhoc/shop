import React from 'react';
import axios from 'axios';
import {List} from 'antd'
import { useEffect, useState } from 'react';
const News = () => {
    const [posts, setposts] = useState([]);

    const URL = 'https://jsonplaceholder.typicode.com';
    useEffect(() => {
        axios.get(`${URL}/posts`)
            .then(res => {
                const postsData = res.data;
                setposts(postsData)
            })
            .catch(error => console.log(error));
    }, []);
    console.log(posts);
    return (
        <div>
            <List>
                {posts&&posts.map(post=><List.Item key={post.id}>{post.title}</List.Item>)}
            </List>
        </div>          
    );
}

export default News;
