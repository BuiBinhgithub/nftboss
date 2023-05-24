import './collection-top.css'
import UserList from './topuser-list/userlist';

const Topuser = () => {
    return (
        <>
            <div className="top-user-container">
                <h1 className='top-user-title'>Top Collections over</h1>
                <h2>Last 7 days</h2>
                <UserList />
            </div>
        </>
    );
}

export default Topuser;