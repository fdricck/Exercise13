import Client from "./component/Clients";
import Features from "./component/Features/index.";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Pricing from "./component/Pricing";

const App = () => {
  return (
    <div className="body-wrap">
    <Header />
  <main className="site-content">
    <Hero />
    <Client />
    <Features />
    <Pricing />
  </main>
  <Footer />
</div>

  );
};

export default App;