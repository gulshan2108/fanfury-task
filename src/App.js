import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Homepage/HomePage';
import HeroConnectWallet from './components/HeroConnectWallet/HeroConnectWallet';
import Layout from './components/Layout/Layout';
import PaymentIntegration from './components/PaymentIntegration/PaymentIntegration';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/connect-wallet" element={<HeroConnectWallet />}></Route>
            <Route path="/payment-integration" element={<PaymentIntegration />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
