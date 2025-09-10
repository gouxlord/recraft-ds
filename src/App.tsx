import { useState } from 'react';
import ShowcasePage from './pages/showcase';
import DashboardPage from './pages/dashboard';
import EmployeeProfilePage from './pages/employee-profile';
import { ToastProvider } from './components/ui/toast';
import { Button } from './components/ui/button';

type PageType = 'showcase' | 'dashboard' | 'employee-profile';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('showcase');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'employee-profile':
        return <EmployeeProfilePage />;
      case 'showcase':
      default:
        return <ShowcasePage />;
    }
  };

  return (
    <ToastProvider>
      {/* Navigation simple */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2" id="navigation-buttons">
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
        <Button 
          size="sm" 
          variant={currentPage === 'employee-profile' ? 'default' : 'outline'}
          onClick={() => setCurrentPage('employee-profile')}
          data-testid="profile-button"
        >
          Profile
        </Button>
      </div>
      
      {renderPage()}
    </ToastProvider>
  );
}

export default App;