import './collection-eth.css'
import glass from '../../../assets/collection/399bddad.png'
import verified from '../../../assets/collection/icons8-verified-badge-48 15.png'
import white from '../../../assets/digital/885b37c5.jpg'
import eth from '../../../assets/collection/Vector.png'
import bear from '../../../assets/auctions/35aed584.jpg'
import lion from '../../../assets/collection/Ellipse 101.png'
import unicorn from '../../../assets/auctions/d1767b136157423.jpg'
import goat from '../../../assets/digital/764dffc4.jpg'
const Ethereum = () => {
    return (
        <>
            <div className="ethereum-container">
                <div className='eth-user'>
                    <img src={glass} alt="glass" width={147} height={147} />
                    <div className="eth-info">
                        <p>
                            CryptoFunks
                            <img src={verified} alt="verified" className='verified' />
                        </p>
                        <div className="eth-info-number">
                            <img src={white} alt="white" width={34} height={34} />
                            <img src={eth} alt="ethereum" width={8} height={14} className='ethereum' />
                            <p>0.25 ETH</p>
                            <span>1 of 8</span>
                        </div>
                        <p className='eth-bid'>Place a bid</p>
                    </div>
                </div>
                <div className='eth-user'>
                    <img src={bear} alt="glass" width={147} height={147} />
                    <div className="eth-info">
                        <p>
                            Frensware
                            <img src={verified} alt="verified" className='verified' />
                        </p>
                        <div className="eth-info-number">
                            <img src={lion} alt="white" width={34} height={34} />
                            <img src={eth} alt="ethereum" width={8} height={14} className='ethereum' />
                            <p>0.25 ETH</p>
                            <span>1 of 8</span>
                        </div>
                        <p className='eth-bid'>Place a bid</p>
                    </div>
                </div>
                <div className='eth-user'>
                    <img src={unicorn} alt="glass" width={147} height={147} />
                    <div className="eth-info">
                        <p>
                            PunkArt
                        </p>
                        <div className="eth-info-number">
                            <img src={goat} alt="goat" width={34} height={34} />
                            <img src={eth} alt="ethereum" width={8} height={14} className='ethereum' />
                            <p>0.25 ETH</p>
                            <span>1 of 8</span>
                        </div>
                        <p className='eth-bid'>Place a bid</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ethereum;