import wallet from '../../assets/create/Vector.png'
import vector1 from '../../assets/create/Vector (1).png'
import vector2 from '../../assets/create/Vector (2).png'
import vector3 from '../../assets/create/Vector (3).png'



import './todo.css'

const Todo = () => {
    return (
        <>
            <div className="todo-container">
                <h1 className="todo-title">Create and sell your NFTs</h1>
                <div className="todo-content">
                    <div className="todo-column">
                        <img src={wallet} alt="wallet" />
                        <p className='todo-text'>Set up your wallet</p>
                        <p>Once you’ve set up your wallet of choice,
                            connect it to OpenSea by clicking the wallet icon in the top right corner.
                            Learn about the wallets we support.
                        </p>
                    </div>
                    <div className="todo-column">
                        <img src={vector1} alt="vector1" />
                        <p className='todo-text'>Create your collection</p>
                        <p>
                            Click My Collections and set up your collection. Add social links,
                            a description, profile & banner images, and set a secondary sales fee.
                        </p>
                    </div>
                    <div className="todo-column">
                        <img src={vector2} alt="" />
                        <p className='todo-text'>Add your NFTs</p>
                        <p>
                            Upload your work (image, video, audio, or 3D art), add a title and description,
                            and customize your NFTs with properties, stats, and unlockable content.
                        </p>
                    </div>
                    <div className="todo-column">
                        <img src={vector3} alt="" />
                        <p className='todo-text'>List them for sale</p>
                        <p>Choose between auctions, fixed-price listings, and declining-price listings.
                            You choose how you want to sell your NFTs, and we help you sell them!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo