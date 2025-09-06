import React, { useState } from 'react';
import ShowcasePage from './pages/showcase';
import DashboardPage from './pages/dashboard';
import { ToastProvider } from './components/ui/toast';
import { Button } from './components/ui/button';

function App() {
  const [currentPage, setCurrentPage] = useState('showcase');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'showcase':
      default:
        return <ShowcasePage />;
    }
  };

  return (
    <ToastProvider>
      {/* Navigation simple */}
      <div className="fixed bottom-4 left-4 z-50 flex gap-2">
        <Button 
          size="sm" 
          variant={currentPage === 'showcase' ? 'default' : 'outline'}
          onClick={() => setCurrentPage('showcase')}
        >
          Showcase
        </Button>
        <Button 
          size="sm" 
          variant={currentPage === 'dashboard' ? 'default' : 'outline'}
          onClick={() => setCurrentPage('dashboard')}
        >
          Dashboard
        </Button>
      </div>
      
      {renderPage()}
    </ToastProvider>
  );
}

export default App;