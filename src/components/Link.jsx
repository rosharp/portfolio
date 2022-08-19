import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props}) => {
    const match = useMatch();

    return (
        <Link 
            to={to}
            style={{
                color: match ? "var(--clr-active)" : white,
            }} 
            {...props}
        >
            {children}
        </Link>
    );
}

export default CustomLink;
