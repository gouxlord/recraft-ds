import React from 'react';
import ShowcasePage from './pages/showcase';
import { ToastProvider } from './components/ui/toast';

function App() {
  return (
    <ToastProvider>
      <ShowcasePage />
    </ToastProvider>
  );
}

export default App;