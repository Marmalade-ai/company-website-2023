import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header>
    <nav>
      <h1><StaticImage
        src="../images/Marmalade_Logo_trans_white_M_100.svg"
        alt="The Marmalade AI Logo."
        title="Marmalade AI, Inc."
        width={40}
      /> Marmalade AI</h1>
    </nav>
  </header>
);

export default Header;
