import Card from './Card';
import './style.css';
import '../css/global.css';

function ListOfCards(props) {
    if (props.data?.length > 0)   {
        return ( 
            <div className='grid'>
                {
                    props.data.map((e) => {
                        return (
                            <Card id={e.id} name={e.name} price={e.price} image={e.image} key={e.id}/>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <div className='wrapper'>
            <h1>Not found!</h1>
        </div>
    )
    
}

export default ListOfCards;