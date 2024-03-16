import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-twilight';

function Level4() {
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
  
        // Check for eggs in the first 50 lines
        for (let i = 0; i < 50 && i < lines.length; i++) {
          const line = lines[i];
          if (line.includes('🥚')) {
            console.log("Egg found on line " + (i + 1) + ": " + line);
  
            // Check if the egg is between line 1 and 20
            if (i < 20) {
              eggBetweenLine1And20 = true;
            }
          }
        }
  
        // Redirect if egg found between line 1 and 20
        if (eggBetweenLine1And20) {
          console.log("Egg found between line 1 and 20!");
          window.location.href = '/end';
        }
  
        // Replace the next egg with fire emoji
        const index = prevContent.indexOf('🥚', lastReplacedIndex + 1);
        if (index !== -1) {
          console.log("Replacing egg with fire...");
          const newContent = prevContent.substring(0, index) + '🔥' + prevContent.substring(index + 1);
          setLastReplacedIndex(index);
          return newContent;
        } else {
          console.log("No more eggs found.");
        }
        return prevContent; // Ensure to return prevContent in all cases
      });
    }, 2000); // Checking every 3 seconds
  
    return () => clearInterval(interval); // Cleanup function to clear the interval when component unmounts
  }, [lastReplacedIndex, setContent]);
  
  
  
  
  
  
  
  


  
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
        readOnly={false}
      />
    </div>
  );
}

export default Level4;
