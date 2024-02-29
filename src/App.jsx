import React from "react";
const components = [];

for (let i = 1; i <= 100; i++) {
  const Component = React.lazy(() => import(`./components/Component${i}`));
  components.push(Component);
}

function App() {
  return (
    <div
      style={{
        height: 300,
        overflow: "scroll",
        width: 300,
      }}
    >
      {components.map((Component, index) => (
        <React.Suspense key={index} fallback={<div>Loading...</div>}>
          <Component />
        </React.Suspense>
      ))}
    </div>
  );
}

export default App;
