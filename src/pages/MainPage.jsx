import ListOfCards from "../components/ListOfCards";
import {useEffect, useState} from 'react';
import axios from "axios";

const backendURL = 'http://zut3Student.pythonanywhere.com/api/';

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