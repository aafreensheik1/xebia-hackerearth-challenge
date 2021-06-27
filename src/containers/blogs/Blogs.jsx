import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from '../../components';

import './blogs.scss';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(undefined);
  const history = useHistory();

  const handleSearch = searchText => {
    if (searchText.length < 3) {
      setFilteredPosts(undefined);
    } else {
      const filteredPosts = posts.filter(post => {
        const { title, body } = post;
        return title.includes(searchText) || body.includes(searchText);
      });
      setFilteredPosts(filteredPosts);
    }
  };

  const handleClick = id => {
    history.push(`/blogs/${id}`);
  };

  useEffect(() => {
    if (posts.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(payload => setPosts(payload));
    }
  }, []);
  return (
    <div>
      <input
        className="blogs-search"
        placeholder="Type here to search"
        onChange={e => handleSearch(e.target.value)}
      />
      <div className="blogs-container">
        {(filteredPosts ?? posts).map(({ title, body, id }) => (
          <Card onClick={() => handleClick(id)} className="blog-card">
            <h4>{title}</h4>
            <p>{body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
