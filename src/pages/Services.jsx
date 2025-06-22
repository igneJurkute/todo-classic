import { Link } from "react-router-dom";
export function Services() {
    const services = [
        {
            id: 'html',
            title: 'html',
            price: 9.99,
            desc: 'Cool HTML for sale!',
        },
        {
            id: 'css',
            title: 'css',
            price: 99.99,
            desc: 'Pixels do not cost that much!',
        },
        {
            id: 'js',
            title: 'js',
            price: 0.49,
            desc: '👀👀👀👀👀👀',
        },
    ];

    const linkStyle = {
        color: 'red',
        fontSize: '2rem',
        margin: '0 1rem',
    };

    return (
        <div className="main-content">
            <h1>Services</h1>
            {services.map(service => (
                <Link style={linkStyle} to={`/services/${service.id}`}>
                    {service.title}
                </Link>)
            )}
        </div>
    );
}