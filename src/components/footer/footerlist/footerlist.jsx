import './footerlist.css'
const FooterList = ({ title, items }) => {
    return (
        <>
            <div className="bottom-column">
                <h2 className='bottom-column-title'>
                    {title}
                </h2>
                {items.map((item) => (
                    <li className="footer-list">{item}</li>
                ))}
            </div>
        </>
    );
}

export default FooterList;