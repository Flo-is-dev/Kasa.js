import React from "react";

const Tag = ({ tags }) => {
  return (
    <div className="tagContainer">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tag;
