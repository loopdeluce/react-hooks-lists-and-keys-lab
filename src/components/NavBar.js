import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksJSX = links.map(link => <a href={'#'+ link} key={link}>{link}</a>)

  return (
  <nav>
    {linksJSX}
  </nav>);
}

export default NavBar;
