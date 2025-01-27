import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MenuPanel from './components/MenuPanel';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
// import PasswordChange from './pages/PasswordChange';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <MenuPanel />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/password-change" element={<PasswordChange />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;