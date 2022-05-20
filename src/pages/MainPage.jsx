import ListOfCards from "../components/ListOfCards";
import {useEffect, useState} from 'react';
import axios from "axios";

const backendURL = 'http://127.0.0.1:8000/api/';

function MainPage() {
    const [ products, setProducts ] =  useState([]);
	
	useEffect(() => {
		axios.get(backendURL)
			.catch(() => setProducts(undefined))
			.then(response => setProducts(response.data))
	}, [])
    
    return (
        <>
            <ListOfCards data={products}/>   
        </>
    );
}

export default MainPage;