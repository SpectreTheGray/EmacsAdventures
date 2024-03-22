import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-twilight';

function Level3() {
  const [cursorPosition, setCursorPosition] = useState({ row: 0, column: 0 });
  const [content, setContent] = useState(`
    🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱
    🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱paste the cows here.🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱
    🧱                                                                       🧱                                                                 
    🧱                                                                       🧱                                                               
    🧱                                                                       🧱                       
    🧱                                                                       🧱 
    🧱                                                                       🧱
    🧱                                                                       🧱
    🧱                                                                       🧱
    🧱                                                                       🧱 
    🧱                                                                       🧱          
    🧱                                                                       🧱
    🧱                                                                       🧱                                               
    🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🌾🌾🌾🌾🌾🌾🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱
    🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱


    🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄
    🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄
    🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄🐄
    


                                     +&-
                                _.-^-._    .--.
                             .-'   _   '-. |__|
                            /     |_|     \\|  |
                           /               \\  |
                          /|     _____     |\\ |
                           |    |==|==|    |  |
       |---|---|---|---|---|    |--|--|    |  |
       |---|---|---|---|---|    |==|==|    |  |
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

                                             
                  ░░░░░░░░░░░░░░░░░░░░░░░░░░                
                ░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░              
                ░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░              
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              
                ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒              
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒    
          ░░▒▒▓▓▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▓▓▓▓░░░░░░░░    
              ▓▓▓▓░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░▓▓▓▓            
              ▓▓▓▓░░░░░░░░░░░░░░░░▒▒░░░░░░░░▓▓▓▓            
              ░░▓▓░░░░░░████░░░░░░░░████░░░░▓▓░░            
              ░░░░░░░░░░██  ░░░░░░░░██  ░░░░░░░░            
  ░░  ░░  ░░  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ~to select a region, use Ctrl + Space, then to cut (delete) the selected text, press Ctrl + w, to copy the selected text, and to paste, press Ctrl + y. 
  ▒▒  ▒▒  ▒▒  ▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░             
  ▒▒  ▒▒  ▒▒  ▒▒  ░░░░░░░░░░░░░░░░░░░░░░░░░░                
  ▒▒  ▒▒  ▒▒  ▒▒    ░░░░░░░░░░░░░░░░░░░░░░                  
  ▒▒░░▒▒▒▒▒▒▒▒▒▒      ░░░░░░░░░░░░░░░░░░                    
    ░░  ▒▒    ░░    ░░  ░░░░░░░░░░░░░░                      
        ▒▒          ░░▓▓▒▒░░░░░░░░░░▒▒▓▓░░                  
        ░░        ░░░░▓▓▒▒░░░░▒▒░░░░▒▒▓▓░░░░                
        ▒▒      ░░░░░░▓▓▒▒░░░░▒▒░░░░▒▒▓▓░░░░░░              
        ▒▒      ░░░░▒▒▓▓▒▒░░░░▒▒░░░░▒▒▓▓░░░░░░              
        ▒▒    ░░░░▒▒  ▓▓▒▒░░░░▒▒░░░░▒▒▓▓  ▒▒░░░░            
        ▒▒    ░░▒▒    ▓▓▒▒░░░░▒▒░░░░░░▓▓  ▒▒░░░░            
        ▒▒  ░░░░▒▒    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░              
        ░░░░░░░░      ▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓░░░░                
        ░░░░░░░░      ▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓░░░░                
        ▒▒            ▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▓▓░░░░░░              
        ▒▒            ▓▓▓▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓░░░░░░              
        ▒▒            ▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓░░                  
        ▒▒            ▓▓▓▓▓▓      ▓▓▓▓▓▓                    
        ▒▒            ▓▓▓▓░░      ░░▓▓▓▓                    
        ▒▒            ▓▓▓▓          ▓▓▓▓                    
        ▒▒            ▓▓▓▓          ▓▓▓▓                    
        ▒▒            ▓▓▓▓          ▓▓▓▓                    
        ▒▒            ████          ████                    
        ▒▒            ████          ████                    
        ▒▒          ██████          ██████                  
        ▒▒        ████████          ████████    
                    
  `);

  useEffect(() => {
    const lines = content.split('\n');
    const cowLines = lines.slice(0, 16); // Extract lines 1 to 16 very important lines 
    const hasCows = cowLines.some(line => line.includes('🐄'));
    if (hasCows) {
      console.log('You win!');
      window.location.href = '/level4'; 
    }
  }, [content]);


  const handleCursorPositionChange = (selection) => {
    const position = selection.getCursor();
    setCursorPosition(position);
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
          fontSize: 16,
        }}
        keyboardHandler="emacs"
        value={content}
        onChange={setContent}
        onCursorChange={handleCursorPositionChange}
      />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 999, backgroundColor: '#000000', color: 'white', borderTop: '1px solid #ccc', padding: '5px' }}>
        <span>Row: {cursorPosition.row + 1}, Column: {cursorPosition.column + 1}, Levels: 5/6 completed</span>
      </div>
    </div>
  );
}

export default Level3;
