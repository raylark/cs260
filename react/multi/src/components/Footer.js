import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
        <>
            <div className="footer">
                <a href="https://github.com/raylark/cs260/tree/main/react">Github Repo</a>
            </div>
        
            <Outlet />
        </>
    );
};

export default Footer;