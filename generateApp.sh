echo "import React from 'react';
$(for i in {1..100}; do echo "import Component$i from './components/Component$i';"; done)

function App() {
  return (
    <div
      style={{
        height: 300,
        overflow: "scroll",
        width: 300,
      }}
    >    
    $(for i in {1..100}; do echo "<Component$i />"; done)
    </div>
  );
}

export default App;
" > src/App.jsx