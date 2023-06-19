import css from './App.module.css';
import Sidebar from './components/Sidebar.js';
// import Navbar from './components/Navbar.js';
import NavBarForm from './components/NavBarForm.js'

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      {/* <Navbar />*/}
      <NavBarForm />
    </div>
  );
}

export default App;