import React from "react";
import { Spring } from "react-spring/renderprops";
import "./App.css";

function FirstPost() {
  return (
    <Spring
      from={{ opacity: 0.4, marginTop: -100 }}
      to={{ opacity: 1, marginTop: 100 }}
    >
      {props => (
        <div style={props} className="App">
          <article className="post">
            <h1>My first posts</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate rerum reprehenderit consectetur porro similique
              reiciendis ex consequuntur tempore! Similique, pariatur
              harum.Facilis, accusantium quam labore incidunt soluta
              suscipit ipsa omnis.
            </p>
          </article>
        </div>
      )}
    </Spring>
  );
}

export default FirstPost;