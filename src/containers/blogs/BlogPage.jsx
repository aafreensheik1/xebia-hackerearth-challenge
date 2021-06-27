import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './blogs.scss';

export default function BlogPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(payload => setPost(payload));
  }, [id]);

  return (
    <div className="blog-page">
      <h1>{post.title}</h1>
      <p>{post.body.repeat(10)}</p>
    </div>
  );
}
