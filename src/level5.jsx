import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-twilight';

function Level5() {
  const initialContent = `
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧PLACE THE EGGS BELOW!!!!!!💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  
  
  
  
  
  
  
  
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  
  
  
  
  
  
  🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
  🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
  🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
  
  
  
  
  
  
  
  

  













  `; // Initial content
  const [content, setContent] = useState(initialContent);
  const [lastReplacedIndex, setLastReplacedIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(prevContent => {
        let index = prevContent.indexOf('🥚', lastReplacedIndex + 1);
        let allEggsInLines1To11 = true;
        while (index !== -1) {
          const line = prevContent.substring(0, index).split('\n').length;
          if (line > 11) {
            allEggsInLines1To11 = false;
          }
          if (line <= 11) {
            index = prevContent.indexOf('🥚', index + 1);
          } else {
            const newContent = prevContent.substring(0, index) + '🔥' + prevContent.substring(index + 1);
            setLastReplacedIndex(index);
            if (prevContent.indexOf('🥚', index + 1) === -1) {
              // If no more eggs are found, redirect to '/end'
              window.location.href = '/end';
            }
            return newContent;
          }
        }
        if (allEggsInLines1To11) {
          // If all eggs are in lines 1 to 11, redirect to '/end'
          window.location.href = '/end';
        }
        clearInterval(interval);
        return prevContent;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [lastReplacedIndex, setContent, setLastReplacedIndex]);

  const handleChange = newContent => {
    setContent(newContent);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
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
          fontSize: 20,
        }}
        keyboardHandler="emacs"
        value={content}
        onChange={handleChange} // Added missing onChange prop
        readOnly={false}
      />
    </div>
  );
}

export default Level5;
