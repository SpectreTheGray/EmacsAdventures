import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/keybinding-emacs';
import 'ace-builds/src-noconflict/theme-twilight';

function Level1() {
  const [content, setContent] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ row: 0, column: 0 });

  useEffect(() => {
    fetchEditorContent();
  }, []);

  const handleEditorChange = (newContent) => {
    const diff = getChangeDiff(content, newContent);
    console.log('Editor content changed:', diff);

    if (content.includes('🚩') && !newContent.includes('🚩')) {
      notifyFlagDeleted();
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

  const notifyFlagDeleted = () => {
    window.location.href = '/level2';
  };

  const mockFetchContent = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const flag = '🚩';
        const gamecontent = `
           Instructions: 
           Use Emacs move commands to navigate through the text:
           - Ctrl-P: Move to the previous line
           - Ctrl-N: Move to the next line
           - Ctrl-B: Move to the previous character
           - Ctrl-F: Move to the next character
           - Ctrl-D: Delete the character
           - Delete the flag using Emacs delete commands.




 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIND THE FLAG <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                                      ....
                                    .'' .'''
.                                 .'   :
\\\\                              .:    :
 \\\\                            _:    :       ..----.._
  \\\\                        .:::.....:::.. .'         '''.
   \\\\                     .'  #-. .-######'     #        '''.
    \\\\                     '.##'/ ' ################       :
     \\\\                      #####################         :
      \\\\                   ..##.-.#### .''''###'.._        :
       \\\\                 :--:########:            ''''.    .' :
        \\\\..__...--.. :--:#######.'   '''.         '''.     :
        :     :  : : ''':''-:''''::        .         '''  .'
        '''-'''..: :    '''    '''''''.      ''.        :
           \\\\  :: : :     '''      '''''''.     ''.      .:
            \\\\ ::  : :           '''' ..:       '''     '''.
             \\\\::   : :           ....'' ..:       '''     '''.
              \\\\::  : :    .....####\\\\ .~~.:.             :
               \\\\':.:.:.:'#########.===. ~ |.'-.   . '''.. :
                \\\\    .'  ########## \\\ \\\ _.' '. '-.       '''.
                :\\\\  :     ########   \\\ \\\      '.  '-.        :
               :  \\\\'    '   #### :    \\\ \\\      :.    '-.      :
              :  .'\\\\   :'  :     :     \\\ \\\       :      '-.    :
             : .'  .\\\\\\  '  :      : :    \\\ \\\       :        ''.   :
             ::   :  \\\\\  :.      :    :   \\\ \\      :          ''. :
             ::. :    \\\\\  : :      :  ;    \\\ \\\     :           ''.:
              : ':    '\\\\    :  :     :  :  \\\:\\\     :        ..''
                 :    ' \\\\    :      :    ;  \\\|      :   .'''
                ''.   '  \\\\   :                         :.''
                  .:..... \\\\   :       :            ..''
               ''._____|''.\\\\......'''''''.:..'''
                            \\\\





          `;

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

export default Level1;
