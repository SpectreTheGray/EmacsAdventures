import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/keybinding-emacs';
import 'ace-builds/src-noconflict/theme-twilight';

function Level2() {
  const [content, setContent] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ row: 0, column: 0 });

  useEffect(() => {
    fetchEditorContent();
  }, []);

  const handleEditorChange = (newContent) => {
    const diff = getChangeDiff(content, newContent);
    console.log('Editor content changed:', diff);

    // Check if the flag emoji was added anywhere in the new content
    if (newContent.includes('🚩')) {
      // Update flag position when the flag is added
      const flagIndex = newContent.indexOf('🚩');
      const linesBeforeFlag = newContent.substr(0, flagIndex).split('\n').length;
      const flagColumn = flagIndex - newContent.lastIndexOf('\n', flagIndex) - 1;
      const position = { row: linesBeforeFlag, column: flagColumn };
      console.log('Flag position:', position);
      if (position.row === 56) {
        console.log('Flag is on line 56.');
        window.location.href = '/level3'; // Redirect to Level3 if the flag is on line 56
      }
    }

    setContent(newContent);
  };

  const handleCursorPositionChange = (selection) => {
    const position = selection.getCursor();
    setCursorPosition(position);
    console.log('Cursor position:', position);
  };

  const fetchEditorContent = async () => {
    try {
      const response = await mockFetchContent();
      setContent(response);
    } catch (error) {
      console.error('Error fetching editor content:', error);
    }
  };

  const mockFetchContent = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const flag = '🚩';
        const gamecontent = `


        _   __                                         _     _                _   __  
        \\ \\ / /                                        |  |  | |              | | /  | 
         \\ V /___  _   _   _ __   __ _ ___ ___  ___  __|   | | | _____   _____| | \`| | 
          \\ // _ \\| | | | | '_ \\ / _\` / __/ __|/ _ \\/   _\` | | |/ _ \\ \\ / / _ \\ |  | | 
          | | (_) | |_| | | |_) | (_| \\__ \\__ \\  __/ (_  | | | |  __/\\ V /  __/ | _| |_
          \\_/\\___/ \\__,_| | .__/ \\__,_|___/___/\\___|\  \ __,_| |_|\\___| \\_/ \\___|_| \\___/
                          | |                                                        
                          |_|                                              

        Ctrl-P: Move to the previous line
        Ctrl-N: Move to the next line
        Ctrl-B: Move to the previous character
        Ctrl-F: Move to the next character
        Ctrl-D: Delete the character
        Ctrl-space: to select a region
        Ctrl-w: to copy and delete that region
        Ctrl-y: pasts anything in clipboard
        Copy the flag  by starting behind the flag and hitting Ctrl-space move to the other side of the flag and then click Ctrl-W to copy it to clipboard and then to paste click Ctrl-y
        copy the flag to the bottom of the staris where it tells you to paste
        
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> find the flag copy the flag and move it to where it belongs at the bottom of the stairs <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


                                        )\\         O_._._._A_._._._O         /(
                                        \`--.___,'=================\`.___//,--'/
                                        \`--._.__                 __._,--'/
                                            \\  ,. l\`~~~~~~~~~~~~~~~'l ,.  /
                                __            \\||(_)!_!_!_.-._!_!_!(_)||/            __
                                \\\\-.__        ||_|____!!_|;|_!!____|_||        __,-'//
                                \\\\    \`==---='-----------'='-----------\`=---=='    //
                                | \`--.                                         ,--' |
                                \\  ,.\`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',.  /
                                    \\||  ____,-------._,-------._,-------.____  ||/
                                    ||\\|___!\`======="!\`======="!\`======="!___|/||
                                    || |---||--------||-| | |-!!--------||---| ||
                            __O_____O_ll_lO_____O_____O|| |'|'| ||O_____O_____Ol_ll_O_____O__
                            o H o o H o o H o o H o o |-----------| o o H o o H o o H o o H o
                        ___H_____H_____H_____H____O =========== O____H_____H_____H_____H___
                                                    /|=============|\\
                        ()______()______()______() '==== +-+ ====' ()______()______()______()
                        ||{_}{_}||{_}{_}||{_}{_}/| ===== |_| ===== |\\{_}{_}||{_}{_}||{_}{_}||
                        |      ||      ||     / |==== s(   )s ====| \\     ||      ||      ||
                        ======================()  =================  ()======================
                        ----------------------/| ------------------- |\\----------------------
                                            / |---------------------| \\
                        -'--'--'           ()  '---------------------'  ()
                                            /| ------------------------- |\\    --'--'--'
                                --'--'     / |---------------------------| \\    '--'
                                        ()  |___________________________|  ()           '--'-
                            --'-          /| _______________________________  |\\
                        --'             / |__________________________________| \\
                                                    past it below
                                 >>>>>>>>>>>>>>>>>>>>>>>>( )<<<<<<<<<<<<<<<<<<<<<<<<
                                                    past it above      
        `;

        // Insert flag in the middle of the middle line
        const lines = gamecontent.split('\n');
        const middleIndex = Math.floor(lines.length / 2);
        const middleLineLength = lines[middleIndex].length;
        const middleFlagPosition = Math.floor(middleLineLength / 2);
        lines[middleIndex] =
          lines[middleIndex].slice(0, middleFlagPosition) +
          flag +
          lines[middleIndex].slice(middleFlagPosition);
        const content = lines.join('\n');

        resolve(content);
      }, 1000);
    });
  };

  const getChangeDiff = (oldContent, newContent) => {
    const oldLines = oldContent.split('\n');
    const newLines = newContent.split('\n');
    let diff = '';

    for (let i = 0; i < oldLines.length || i < newLines.length; i++) {
      if (oldLines[i] !== newLines[i]) {
        if (oldLines[i]) {
          diff += `- ${oldLines[i]}\n`;
        }
        if (newLines[i]) {
          diff += `+ ${newLines[i]}\n`;
        }
      }
    }

    return diff.trim();
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
        onChange={handleEditorChange}
        onCursorChange={handleCursorPositionChange}
      />
    </div>
  );
}

export default Level2;
