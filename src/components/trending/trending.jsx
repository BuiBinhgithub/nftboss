import obama from '../../assets/trending/a9982a84417599.png'
import star from '../../assets/trending/unnamed (3) 1.png'
import './trending.css'
import down from '../../assets/trending/Vector 4.png'
import verified from '../../assets/collection/icons8-verified-badge-48 15.png'
import multi from '../../assets/trending/unnamed (1).png'
import huser from '../../assets/trending/Mask Group.png'
import ether from '../../assets/trending/unnamed.jpg'
import goblox from '../../assets/trending/unnamed (5) 2.png'
const Trending = () => {
    return (
        <>
            <div className="trending-container">
                <h1 className='trending-title'>
                    Trending in <span className='title-color'>all categories</span> <img src={down} alt="down" />
                </h1>
                <div className="trending-content">
                    <div className="trending-column">
                        <img src={obama} alt="obama" />
                        <div className="trending-info">
                            <div className="trending-img">
                                <img src={star} alt="star" />
                            </div>
                            <div className="trending-info-top">
                                <p>ETHEREALS WTF</p>
                                <span className='trending-author'>by Souravwpap</span> <img src={verified} alt="verified" className='verified' />
                            </div>
                            <div className="trending-info-bottom">
                                <p>ETHEREALS are 12,345 hand drawn, randomly
                                    generated, interdimensional ghosts.
                                    Their traits are pulle...</p>
                            </div>
                        </div>
                    </div>
                    <div className="trending-column">
                        <img src={multi} alt="obama" />
                        <div className="trending-info">
                            <div className="trending-img">
                                <img src={huser} alt="star" />
                            </div>
                            <div className="trending-info-top">
                                <p>Avengaer NFT</p>
                                <span className='trending-author'>by  Frensware</span> <img src={verified} alt="verified" className='verified' />
                            </div>
                            <div className="trending-info-bottom">
                                <p>ETHEREALS are 12,345 hand drawn, randomly
                                    generated, interdimensional ghosts.
                                    Their traits are pulle...</p>
                            </div>
                        </div>
                    </div>
                    <div className="trending-column">
                        <img src={ether} alt="obama" />
                        <div className="trending-info">
                            <div className="trending-img">
                                <img src={goblox} alt="star" />
                            </div>
                            <div className="trending-info-top">
                                <p>GOSTBOX WTF</p>
                                <span className='trending-author'>by  PunkArt</span> <img src={verified} alt="verified" className='verified' />
                            </div>
                            <div className="trending-info-bottom">
                                <p>ETHEREALS are 12,345 hand drawn, randomly
                                    generated, interdimensional ghosts.
                                    Their traits are pulle...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trending;