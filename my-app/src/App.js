import css from './App.module.css';
import Sidebar from './components/Sidebar.js';
// import Navbar from './components/Navbar.js';
import NavBarForm from './components/NavBarForm.js'
// import Content from './components/Content.js'
// import ContentHooks from './components/ContentHooks'
// import ContentAPI from './components/ContentAPI'
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      {/* <Navbar />*/}
      <NavBarForm />
      <ContentAPIHooks />
    </div>
  );
}

export default App;