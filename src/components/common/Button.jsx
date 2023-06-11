import { Link } from "react-router-dom";

const Button = ({ to, href, children, className, type, disabled, onclick }) => {
    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    if (href) {
        <a href={href} className={className}>
            {children}
        </a>;
    }

    return (
        <button className={className} type={type} disabled={disabled} onClick={onclick}>
            {children}
        </button>
    );
};

export default Button;
