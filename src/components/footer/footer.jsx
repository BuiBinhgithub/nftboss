import appstore from '../../assets/footer/App Store.png'
import googleplay from '../../assets/footer/Google Play.png'
import QR from '../../assets/footer/0aaf1132-ccb3-4aaa-9db6-ebf5a9a354d0.png'
import ins from '../../assets/footer/Instagram.png'
import facebook from '../../assets/footer/Facebook.png'
import linkedin from '../../assets/footer/LinkedIn.png'
import pinterest from '../../assets/footer/Pinterest.png'
import reddit from '../../assets/footer/Reddit.png'
import twitter from '../../assets/footer/Twitter.png'
import Tinder from '../../assets/footer/Tinder.png'
import './footerlist/footerlist.css'
import './footer.css'
import FooterList from './footerlist/footerlist'

const Footer = () => {
    const footerList = [
        { title: 'Resources', items: ['Explore', 'Help center', 'Jobs', 'Become a partner', 'Bug bounty'] },
        { title: 'The Loop', items: ['RARI Token', 'Suggest feature', 'Rarible protocol', 'subcribe'] },
        { title: 'My Account', items: ['Profile', 'Favourites', 'Watchlist', 'My Collections', 'Settings'] },
        { title: 'Company', items: ['About', 'Career'] },
    ]
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-top-column">
                        <div className="social">
                            <p style={{ fontSize: '27px', fontWeight: '700', width: '104%', marginBottom: '20px' }}>Download the Rarible app
                                to explore any NFTs</p>
                            <img src={appstore} alt="appstore" /><img src={googleplay} alt="googleplay" />
                        </div>
                        <img style={{ margin: '0' }} src={QR} alt="QR scan" />
                        <div className="community">
                            <p style={{ fontWeight: '700', fontSize: '27px', marginBottom: '20px' }}>Join Rarible community</p>
                            <div className="community-icon">
                                <a>
                                    <img src={ins} alt="" width={32} height={24} />
                                </a>
                                <a>
                                    <img src={facebook} alt="" width={32} height={24} />
                                </a>
                                <a>
                                    <img src={linkedin} alt="" width={32} height={24} />
                                </a>
                                <a>
                                    <img src={pinterest} alt="" width={32} height={24} />
                                </a>
                                <a>
                                    <img src={reddit} alt="" width={32} height={24} />
                                </a>
                                <a>
                                    <img src={twitter} alt="" width={32} height={24} />
                                </a>
                                <a>
                                    <img src={Tinder} alt="" width={32} height={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="underline-footer"></div>
                    <div className="footer-bottom">
                        {footerList.map((data) => (
                            <FooterList title={data.title} items={data.items} />
                        ))}
                        <div className="footer-sign-up">
                            <h2 className='bottom-column-title'>Stay in the loop</h2>
                            <p>Join our mailing list to stay in the loop with
                                our newest feature releases, NFT drops, and tips
                                and tricks for navigating OpenSea.
                            </p>
                            <div className="sign-up-container">
                                <input
                                    type="text"
                                    class="signup-input"
                                    placeholder="your email address"
                                />
                                <button class="signup-button">Sign Up</button>
                            </div>
                            <div id="privacy">
                                <span style={{ marginRight: '37px' }}>Privacy Policy</span>
                                <span>Terms of Service</span>
                            </div>
                        </div>
                    </div>

                </div>

                <p className='copy-right'>© 2018 - 2022 NFTbOSS, Inc</p>
            </footer>
        </>
    );
}

export default Footer;