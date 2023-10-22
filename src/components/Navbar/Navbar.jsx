import { Link } from "react-router-dom";

const Navbar = () => {

    const linkClass = "border px-3 py-1";

    return (
        <div className="max-w-5xl mx-auto">
            <ul className="flex p-4">
                <Link to='/' className={linkClass} >
                    <li>Home</li>
                </Link>
                <Link to="/service" className={linkClass} >
                    <li>Service</li>
                </Link>
                <Link to="#" className={linkClass} >
                    <li>Tutorials</li>
                </Link>
                <Link to="#" className={linkClass} >
                    <li>About us</li>
                </Link>
                <Link to="/signin" className={linkClass} >
                    <li>Sign In</li>
                </Link>
                <Link to="/signup" className={linkClass} >
                    <li>Sign Up</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;