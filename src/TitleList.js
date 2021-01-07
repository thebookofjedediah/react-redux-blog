import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TitleList(){
  const { posts } = useSelector(store => store)
  const postsArr = [];
  for (const [key, value] of Object.entries(posts)) {
    postsArr.push({id: key, ...value})
  }

  return (
        <>
        {postsArr.map(post => (
            <h1>{post.title}</h1>
        ))}
        </>
  )
}