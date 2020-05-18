import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
   <div>
      {console.log('Footer')}
      <h4 className="Footer-text">Copyright 2020</h4>
   </div>
);

// const Footer: React.FC = React.memo(() => (
//    <div>
//       {console.log('Footer')}
//       <h4 className="Footer-text">Copyright 2020</h4>
//    </div>
// ));

export default Footer;
