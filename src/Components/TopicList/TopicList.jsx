import { useEffect, useState } from 'react';
import postData from '../../data/post_data.json';
import './TopicList.css';

export default function TopicList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be using an array of dummy data
    setPosts(postData);
  }, []);

  const displayTopics = posts.map((post) => {
    return <li key={post.id}>{post.title}</li>;
  });
  return (
    <div className="TopicList">
      <h1>Latest Blog Posts...</h1>
      <ul>{displayTopics}</ul>
    </div>
  );
}
