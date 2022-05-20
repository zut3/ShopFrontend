import notImg from '../img/notImg.png';
import './style.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const backendURL = "http://127.0.0.1:8000/api/"

function ProductPage() {
    const [productInfo, setProductInfo] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios.get(backendURL+id.toString())
        .then(response => setProductInfo(response.data))
    }, []);

    console.log(productInfo)
    
    return (
        <div className='wrapper'>
            <div className='image'>
                <img src={productInfo.image ? productInfo.image : notImg}/>
            </div>
            <div className="details">
                <p className='price'>{productInfo.price}$</p>
                <p className='desc'>{productInfo.description}</p>
            </div>
        </div>
    );
}

export default ProductPage;