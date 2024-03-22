import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-twilight';

function Level4() {
  const [cursorPosition, setCursorPosition] = useState({ row: 0, column: 0 });
  const initialContent = `
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧PLACE THE EGGS BELOW!!!!!!💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧>>>                <<<<< 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧
  💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧 💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧






  
  
  
  
  
  
  
                                    🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
                                 🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
                              🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
                           🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
                          🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
                          🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚
  
  
  
  
  


                          ########################################################################################
                          #  Move eggs between line 1 and 20 into the water. To                                  #
                          #  select a region, use Ctrl + Space to set the mark,                                  # 
                          #  navigate to the end of the region,                                                  # 
                          #  then use Ctrl + W to cut/copy. To paste, position the cursor and press Ctrl + y     # 
                          ########################################################################################                                                                                       
                                                                                        #                              
                                                                                                                                  
                                                                                        #                      ██        ██                                                        
                                                                                        #                      ██▒▒██    ██▒▒██                                                      
                                                                                        #                    ██▒▒▒▒▒▒████▒▒▒▒▒▒██                                                    
                                                                                         #               ██████▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▓▓██                                                  
                                                                                          #            ██▒▒▒▒██▒▒▒▒██████▒▒▒▒▒▒▒▒██                                                  
                                                                                           #           ██▒▒▒▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒▒██                                                  
                                                                                            #        ▓▓████▒▒▒▒██▒▒░░▒▒░░▒▒████▒▒██                                                  
                                                                                             #       ██▓▓▓▓▒▒██▒▒░░░░░░░░░░▒▒▒▒████                                                  
                                                                                              #      ██▓▓▓▓████▒▒██░░▒▒░░░░░░░░░░██                                                  
                                                                                              #    ██░░░░░░██▒▒░░░░░░░░░░░░░░░░░░░░██                                                
                                                                                               # ██░░░░░░░░██▒▒░░▒▒░░▒▒░░░░░░░░░░░░██                                                
                                                                                                  ██░░░░░░██▒▒▒▒░░░░░░░░░░░░░░░░░░░░██                                              
                                                                                                    ████░░██▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░██                                            
                                                                                                        ████▒▒▒▒░░▒▒░░░░░░░░░░░░░░░░░░██                                            
                                                                                                          ██▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░██                                            
                                                                                                            ██▒▒▒▒░░▒▒░░░░░░░░░░░░░░░░▒▒▒▒                                          
                                                                                                            ██▒▒░░░░░░░░░░░░░░░░░░▒▒░░░░▓▓                                          
                                                                                                            ██▒▒░░▒▒░░░░░░▒▒░░░░░░░░▒▒░░▒▒▓▓                                  ▒▒    
                                                                                                            ██▒▒▒▒░░▒▒░░░░░░▒▒░░░░░░░░▒▒░░░░████                            ██░░██  
                                                                                                            ██▒▒▒▒░░░░▒▒░░░░▒▒▒▒░░░░▒▒██▒▒▒▒░░░░██                        ██░░░░██  
                                                                                                              ██▒▒░░░░░░▒▒░░▒▒██▒▒░░▒▒██████▒▒▒▒▒▒██                    ██░░░░░░██  
                                                                                                              ██▒▒▒▒░░░░▒▒░░▒▒██▒▒░░▒▒██░░░░██████░░██████          ████░░░░░░██    
                                                                                                            ██▒▒▒▒██▒▒▒▒██▒▒▒▒████▒▒▒▒██░░░░░░░░░░░░░░░░░░██████████░░░░░░░░██████  
                                                                                                            ██▒▒████▒▒████▒▒▒▒██░░██▒▒██▒▒████████████████░░░░░░░░░░░░░░░░░░░░░░░░▓▓
                                                                                                            ████░░██▒▒██░░██▒▒██░░▒▒██░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████░░░░░░░░░░░░░░░░░░██░░
                                                                                                          ▓▓▒▒▒▒░░▒▒▓▓▒▒░░▒▒██▒▒░░░░▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓░░░░░░░░░░░░░░░░██  
                                                                                                          ██░░░░░░░░▒▒░░░░░░▒▒░░░░░░░░██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░░░░░░░░░░░▓▓▓▓    
                                                                                                          ██░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░░░░░░░░░░░░░▓▓  
                                                                                                          ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░░░░░░░░░░░░░██    
                                                                                                            ██░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓██░░░░░░░░░░██      
                                                                                                            ██░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓████░░░░░░░░░░██        
                                                                                                            ██░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓████▓▓▓▓▒▒▓▓▓▓██░░░░░░░░██          
                                                                                                            ██░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒██▓▓▓▓██░░██▓▓▓▓████░░░░░░░░░░██          
                                                                                                              ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░████░░░░░░████░░░░░░░░░░░░░░██          
                                                                                                              ██░░░░░░░░░░░░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██            
                                                                                                                ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██            
                                                                                                                ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓              
                                                                                                                  ████░░░░░░░░░░░░░░░░░░▒▒▓▓░░░░░░░░░░░░░░░░░░░░░░██                
                                                                                                                    ██░░░░░░░░░░░░░░░░░░░░░░██░░░░░░░░░░░░░░░░░░██                  
                                                                                                                      ████░░░░░░░░░░░░░░░░░░░░██░░░░░░░░░░░░░░██                    
                                                                                                                        ██░░░░░░░░░░░░░░░░░░░░░░██░░░░░░██████                      
                                                                                                                          ██████████░░░░░░░░░░░░░░██░░██                            
                                                                                                                            ██░░██  ████████████████████                            
                                                                                                                        ██████░░██                ██░░██                            
                                                                                                                      ██░░░░░░░░░░██          ██████░░██                            
                                                                                                                        ████░░░░██░░██      ██░░░░░░░░░░██                          
                                                                                                                        ██░░▓▓░░██▓▓          ▓▓▓▓░░░░██░░▓▓                        
                                                                                                                        ██████░░██            ██░░██░░████                          
                                                                                                                              ▓▓              ██████░░██                            
                                                                                                                                                    ██                     
  
  








9


  `; // Initial content


  const [content, setContent] = useState(initialContent);
  const [lastReplacedIndex, setLastReplacedIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(prevContent => {
        const lines = prevContent.split('\n');
        let eggBetweenLine1And20 = false;
  
        for (let i = 0; i < 50 && i < lines.length; i++) {
          const line = lines[i];
          if (line.includes('🥚')) {
            console.log("Egg found on line " + (i + 1) + ": " + line);

            if (i < 20) {
              eggBetweenLine1And20 = true;
            }
          }
        }

        if (eggBetweenLine1And20) {
          console.log("Egg found between line 1 and 20!");
          window.location.href = '/chalange1';
        }
  
        const index = prevContent.indexOf('🥚', lastReplacedIndex + 1);
        if (index !== -1) {
          console.log("Replacing egg with fire...");
          const newContent = prevContent.substring(0, index) + '🔥' + prevContent.substring(index + 1);
          setLastReplacedIndex(index);
          return newContent;
        } else {
          console.log("No more eggs found.");
        }
        return prevContent; 
      });
    }, 2000); 
  
    return () => clearInterval(interval); 
  }, [lastReplacedIndex, setContent]);
  

  
    const handleCursorPositionChange = (selection) => {
    const position = selection.getCursor();
    setCursorPosition(position);
  };
  
  
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
          hScrollBarAlwaysVisible: true,
        }}
        keyboardHandler="emacs"
        value={content}
        onChange={handleChange}
        onCursorChange={handleCursorPositionChange}
      />
       <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 999, backgroundColor: '#000000', color: 'white', borderTop: '1px solid #ccc', padding: '5px' }}>
        <span>Row: {cursorPosition.row + 1}, Column: {cursorPosition.column + 1}, Levels: 6/6 completed</span>
      </div>
    </div>
  );
}

export default Level4;
