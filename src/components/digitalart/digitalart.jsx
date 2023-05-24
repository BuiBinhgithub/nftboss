import './digitalart.css'
import woman from '../../assets/digital/woman-gc1ecf47c4_1920 1.jpg'
import galaxy from '../../assets/digital/43dee2134688901.jpg'
import mask from '../../assets/digital/dfeb1c136157423.jpg'
import goat from '../../assets/digital/764dffc4.jpg'
import white from '../../assets/digital/885b37c5.jpg'
import girl from '../../assets/digital/080b2963162299.jpg'
import unicorn from '../../assets/digital/f4a8b2136157423.jpg'
const DigitalArt = () => {
    return (
        <>
            <div className="digital_container">
                <h1 className="digital_title">Collect digital art</h1>
                <p className="digital_des">Buy and sell NFTs from the world’s top artists</p>
            </div>

            <div className="digital_gallery">
                <div className='digital_art first'>
                    <p className='digital_gallery-title'>
                        Swap, earn, and build on the leading decentralized crypto trading protocol
                    </p>
                    <img src={woman} alt="woman" />
                </div>

                <div className="">
                    <div className="digital-row-top">
                        <img src={galaxy} alt="galaxy" className='galaxy' />
                        <div className="digital-right">
                            <p className='digital-right-title'>Developers, traders, and liquidity providers participate
                                together in a financial marketplace that is open</p>
                            <div className="digital-right-img">
                                <img src={white} alt="white" />
                                <img src={girl} alt="girl" />
                            </div>
                        </div>
                    </div>
                    <div className='digital-row-bottom'>
                        <img src={mask} alt="mask" className='mask' />
                        <img src={goat} alt="goat" />
                        <img src={unicorn} alt="unicorn" className='unicorn' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DigitalArt;