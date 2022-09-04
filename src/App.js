import React from 'react';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import TextBox from './components/TextBox';
import Contact from './components/Contact';

import ContactTW from './components/ContactTW';

function App() {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />

      <ContactTW />
    </div>
  );
}

export default App;
