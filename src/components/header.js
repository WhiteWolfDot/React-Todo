import React from "react";

function Header() {
  return (
    <header>
      <div id="header-content">
        <div id="logo">
          <a className="links" href="https://github.com/WhiteWolfDot">
            whitewolfdot
          </a>
        </div>
        <div style={{ float: "right" }}>
          <a
            className="links"
            href="https://github.com/WhiteWolfDot/React-Todo/issues/new"
          >
            Report a problem
          </a>
          <a className="links" href="mailto:shinjithkanhangad@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
