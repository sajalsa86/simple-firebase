import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="text-center">
            <Link className="mr-5" to='/'>Home</Link>
            <Link to='/longin'>Longin</Link>
        </div>
    );
};

export default Header;