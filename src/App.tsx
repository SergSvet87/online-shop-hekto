import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AppRoutes from './components/routes/Routes';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
