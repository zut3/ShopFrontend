import './App.css';
import React, { useState,  useEffect } from 'react';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import axios  from 'axios';
import { Route, Routes } from 'react-router-dom';

const backendURL = "http://127.0.0.1:8000/api/";


function App() {
  	const [ products, setProducts ] =  useState([]);
	
	useEffect(() => {
		axios.get(backendURL)
			.catch(() => setProducts(undefined))
			.then(response => setProducts(response.data))
	}, [])

	return (
    	<>
			<div className="App">
				<Header/>
				<Routes>
					<Route index element={<MainPage/>}/>
					<Route path="product/:id" element={<ProductPage/>}/>
				</Routes>	
			</div>
			
		</>
		
  	);
}

export default App;

