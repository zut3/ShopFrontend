import './style.css';
import {Link} from 'react-router-dom';
import notImg from '../img/notImg.png';

function Card (props) {
    const id = props.id
    
    return (
        <div className="card">
            <img src={
                props.image ? props.image : notImg}
                className="product__image"/>
            <div className="product__price">
                {props.price}$
            </div>
            <div className="product__name">
                {props.name}
            </div>
            <div className="product__more">
                <Link to={"/product/" + id}>More</Link>
            </div>
        </div>
    );
}

export default Card;