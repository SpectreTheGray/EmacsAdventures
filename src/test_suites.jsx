import React, { useEffect, useRef } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/keybinding-emacs';
import 'ace-builds/src-noconflict/theme-twilight';

const TestSuites = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        console.log('Control key down. Pressed key:', e.key);
      }
    };

    const handleKeyUp = (e) => {
      if (e.ctrlKey) {
        console.log('Control key up.');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    editorRef.current.editor.focus();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <AceEditor
        ref={editorRef}
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
          wrap: true,
        }}
        keyboardHandler="emacs"
        style={{
          backgroundColor: '#303030',
          color: '#ffffff',
        }}
      />
    </div>
  );
};

export default TestSuites;
