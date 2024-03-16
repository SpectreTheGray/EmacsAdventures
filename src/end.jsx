import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-twilight';

function End() {
  const [content, setContent] = useState('');
  const textToType = `\n\nThanks for playing my very minimal viable product\n\n -Jonathan!`;

  useEffect(() => {
    const typeText = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= textToType.length) {
          setContent(textToType.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            scrollPage();
          }, 3000); 
        }
      }, 100); 

      return () => clearInterval(interval); 
    };

    typeText();
  }, [textToType]);

  const scrollPage = () => {
    window.scrollBy(0, 5); 
    const scrolldelay = setTimeout(() => {
      scrollPage();
    }, 50);
    if (window.scrollY >= document.body.clientHeight - window.innerHeight) {
      clearTimeout(scrolldelay);
      setTimeout(() => {
        window.location.href = '/';
      }, 1000); 
    }
  };

  return (
    <div style={{ display: 'flex', height: '200vh', overflow: 'hidden' }}>
      <AceEditor
        mode="text"
        theme="twilight"
        width="100%"
        height="100%"
        setOptions={{
          useWorker: false,
          showPrintMargin: false,
          highlightActiveLine: false,
          tabSize: 2,
          fontSize: 40,
          readOnly: true, 
          showGutter: false
        }}
        keyboardHandler="emacs"
        value={content}
        style={{ color: '#00FF00' }} 
      />
    </div>
  );
}

export default End;
