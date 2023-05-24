import './userlist.css'
import goat from '../../../../assets/digital/764dffc4.jpg'
import bear from '../../../../assets/auctions/35aed584.jpg'
import white from '../../../../assets/digital/885b37c5.jpg'
import verified from '../../../../assets/collection/icons8-verified-badge-48 15.png'
import eth from '../../../../assets/collection/Vector.png'
const UserList = () => {
    return (
        <>
            <div className="userlist-container">
                <div className="userlist-content">
                    <ul>
                        <li className='user-item'>
                            <span className='number-user'>1</span>
                            <img src={goat} alt="goat" width={60} height={60} />
                            <div className="user-item-info">
                                <div className="user-info-top">
                                    <p>CryptoFunks</p>
                                    <img src={verified} alt="verified" />
                                </div>
                                <div className="user-info-bottom">
                                    <img src={eth} alt="ethereum" className='ethereum-user' /> <span className='eth-number'>19,769.39</span>
                                    <span className='user-percent'>+26.52%</span>
                                </div>
                            </div>
                        </li>
                        <li className='user-item'>
                            <span className='number-user'>2</span>
                            <img src={bear} alt="bear" width={60} height={60} />
                            <div className="user-item-info">
                                <div className="user-info-top">
                                    <p>Cryptix</p>
                                </div>
                                <div className="user-info-bottom">
                                    <img src={eth} alt="ethereum" className='ethereum-user' /> <span className='eth-number'>2,769.39</span>
                                    <span className='user-percent red'>+10.52%</span>
                                </div>
                            </div>
                        </li>
                        <li className='user-item'>
                            <span className='number-user'>3</span>
                            <img src={white} alt="white" width={60} height={60} />
                            <div className="user-item-info">
                                <div className="user-info-top">
                                    <p>Frensware</p>
                                </div>
                                <div className="user-info-bottom">
                                    <img src={eth} alt="ethereum" className='ethereum-user' /> <span className='eth-number'>9,232.39</span>
                                    <span className='user-percent'>+2.52%</span>
                                </div>
                            </div>
                        </li>
                        <li className='user-item'>
                            <span className='number-user'>4</span>
                            <img src={goat} alt="white" width={60} height={60} />
                            <div className="user-item-info">
                                <div className="user-info-top">
                                    <p>PunkArt</p>
                                    <img src={verified} alt="verified" />
                                </div>
                                <div className="user-info-bottom">
                                    <img src={eth} alt="ethereum" className='ethereum-user' /> <span className='eth-number'>3,769.39</span>
                                    <span className='user-percent'>+1.52%</span>
                                </div>
                            </div>
                        </li>
                        <li className='user-item'>
                            <span className='number-user'>5</span>
                            <img src={bear} alt="white" width={60} height={60} />
                            <div className="user-item-info">
                                <div className="user-info-top">
                                    <p>Art Crypto</p>
                                </div>
                                <div className="user-info-bottom">
                                    <img src={eth} alt="ethereum" className='ethereum-user' /> <span className='eth-number'>10,769.39</span>
                                    <span className='user-percent red'>+2.52%</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default UserList;