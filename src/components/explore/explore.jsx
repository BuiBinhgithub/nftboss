import './explore.css'
import lion from '../../assets/collection/334d0aa9.jpg'
import verified from '../../assets/collection/icons8-verified-badge-48 15.png'
import star from '../../assets/trending/unnamed (3) 1.png'
const Explore = () => {
    const exploreList = [
        { icon: star, author: 'by Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { icon: star, author: 'by PunkArt', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { icon: star, author: 'by Frensware', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { icon: star, author: 'by CryptoFunks', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { icon: star, author: 'by Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
    ]
    return (
        <>
            <div className="explore-container">
                <h1 className='explore-title'>Explore</h1>
                <div className="explore-content">
                    {exploreList.map((explore) => (
                        <>
                            <div className="explore-column">
                                <div className="explore-inside">
                                    <div className="explore-heading">
                                        <img src={explore.icon} alt="star" width={24} height={24} />
                                        <p style={{ fontSize: '10px' }}>{explore.author}</p>
                                        <img src={verified} alt="" width={15} height={15} />
                                    </div>
                                    <div className="explore-img">
                                        <img src={lion} alt="" width={200} height={200} />
                                    </div>
                                    <div className="explore-bottom">
                                        <h3>{explore.title}</h3>
                                        <p>From <span style={{ fontWeight: '700' }}>{explore.value}</span> <span>{explore.date}</span></p>
                                        <p>Buy now</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Explore;