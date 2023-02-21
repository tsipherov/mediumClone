import React from "react";

const TagList = ({ tags }) => {
  const tagList = tags.map((tag) => (
    <li key={tag} className="tag-default tag pill tag-outline">
      {tag}
    </li>
  ));
  return <ul className="tag-list">{tagList}</ul>;
};

export default TagList;
