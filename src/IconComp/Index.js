import React from 'react';
import Home from './HomeSvg';
import Email from './EmailSvg';
import Menu from './Menu';
import Back from './Back';

const components = {
  Home,
  Email,
  Menu,
  Back,
};

const IconGenerator = ({tagName, ...props}) => {
  const TagName = components[tagName];

  if (TagName) {
    return <TagName {...props} />;
  } else {
    return null;
  }
};

export default IconGenerator;
