import './bid.css'

const Bid = () => {
    return (
        <>
            <div className="bid-container">
                <div className="bid-content">
                    <p className="bid-title">Fallwoer's Bath Water</p>
                    <div className="bid-time">
                        <p className='bid-time-number'>07<span>hr</span></p>
                        <p className='bid-time-number'>45<span>mi</span></p>
                        <p className='bid-time-number'>28<span>sec</span></p>
                    </div>
                    <div className="bid-current">
                        <p>Current bid: $877.00</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bid;