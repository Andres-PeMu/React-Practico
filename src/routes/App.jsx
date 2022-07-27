import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
// import AppContext from '../context/AppContext';
// import useInitialState from '../hooks/useInitialState';
// import '../styles/global.scss';

const App = () => {
	// const initialState = useInitialState();
	return (
		// <AppContext.Provider value={ initialState }>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Checkout" element={<Checkout />} />
						<Route path="/Checkout/Information" element={<Information />} />
						<Route path="/Checkout/Payment" element={<Payment />} />
						<Route path="/Checkout/Success" element={<Success />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		// </AppContext.Provider>
	);
}

export default App;