import flower from '../../assets/auctions/1e4bf2132956767.jpg'
import bear from '../../assets/auctions/35aed584.jpg'
import black from '../../assets/auctions/d1767b136157423.jpg'
import './auctions.css'
import Bid from './bid-auction/bid'

const Auctions = () => {
    return (
        <>
            <div className="auction-container">
                <h1 className="auction-title">Live Auctions</h1>
                <div className="auction-price">
                    <div className="auction-card">
                        <img src={flower} alt="flower" />
                        <Bid />
                    </div>
                    <div className="auction-card">
                        <img src={bear} alt="bear" className='bear' />
                        <Bid />
                    </div>
                    <div className="auction-card">
                        <img src={black} alt="black" className='black' />
                        <Bid />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auctions;