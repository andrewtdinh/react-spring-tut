import React from "react";
import { Trail } from "react-spring/renderprops";
import "./styles.css";

const posts = [
  { title: "My first post", id: 1 },
  { title: "My second post", id: 2 },
  { title: "My Third post", id: 3 },
  { title: "My Fourth post", id: 4 }
];

function AllPosts() {
  return (
    <Trail
      items={posts}
      keys={post => post.id}
      from={{ marginLeft: -20, opacity: 0 }}
      to={{ marginLeft: 20, opacity: 1 }}
    >
      {post => props => (
        <div style={props} className="post">
          {post.title}
        </div>
      )}
    </Trail>
  );
}

export default AllPosts;