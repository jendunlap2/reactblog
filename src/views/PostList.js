import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';


export default function PostList(props){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://kekambas-blog.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            {posts.map((p, i) => <PostCard key={i} post={p} />)}
        </div>
    )
}