import React, { Suspense, lazy } from 'react';

const DropzoneImporter = lazy(() => import('./components/DropzoneImporter'));
const FetchImporter = lazy(() => import('./components/FetchImporter'));

function App() {
  return (
    <div className="App">
      <h1>File Importer</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DropzoneImporter />
        <hr />
        <FetchImporter />
      </Suspense>
    </div>
  );
}

export default App;
