import boy from '../../../assets/collection/8f5ea17d.jpg'
import './collection-user.css'
import verified from '../../../assets/collection/icons8-verified-badge-48 15.png'
import eth from '../../../assets/collection/Vector.png'

const CollectionUser = () => {
    return (
        <>
            <div className="collect-user-container">
                <img src={boy} alt="boy" />
                <div className="collect-user-info">
                    <div className="collection-user-ava">
                        <img src={boy} alt="boy" />
                        <div className="collection-user-name">
                            <p>
                                Frensware
                                <img src={verified} alt="verified" />
                            </p>
                            <p>10 in the stock</p>
                        </div>
                    </div>
                    <div className="collection-user-highest">
                        <p>Highest Bid</p>
                        <p>
                            <img src={eth} alt="ehtereum" />
                            <span>0.25 ETH</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CollectionUser;