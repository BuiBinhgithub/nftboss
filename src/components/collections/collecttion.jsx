import Ethereum from './collection-eth/collection-eth';
import Topuser from './collection-top/collection-top';
import CollectionUser from './collection-user/collection-user';
import './collection.css';


const Collection = () => {
    return (
        <>
            <div className="collection-container">
                <h1 className="collecttion-title">Top collections over last 7 days</h1>
                <div className="collecttion-content">
                    <CollectionUser />
                    <Ethereum />
                    <Topuser />
                </div>
                <div className="collection-ranking">
                    <button className='collection-button'>
                        Go to Rankings
                    </button>
                </div>
            </div>
        </>
    );
}

export default Collection;