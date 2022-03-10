import React from "react";

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

const NoH2 = ({ children }) => {
    console.log(children)
    const anchor = getAnchor(children.props.children);
    const link = `#${anchor}`;
    return (
      <h2 id={anchor} style={{ visibility: 'hidden', margin: '0px', height: '0px' }}>
        <a href={link} className="anchor-link">
          §
        </a>
        {children}
      </h2>
    );
  };
  export default NoH2;