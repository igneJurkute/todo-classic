import { useParams } from 'react-router-dom';
import style from './Service.module.css';

function Content({ data }) {
    return (
        <div className={style.service}>
            <h1>SERVICES: {data.title}</h1>
            <p>{data.price}</p>
            <p>{data.desc}</p>
        </div>
    )
}

function ErrorContent() {
    return (
        <div className={style.service}>
            <h1>SERVICES NOT FOUND</h1>
        </div>
    )
}

export function Service() {
    const { serviceId } = useParams();

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

    let service = null;
    for (const serv of services) {
        if (serv.id === serviceId) {
            service = serv;
        }
    }

    return (
        <div className="main-content">
            {service ? <Content data={service} /> : <ErrorContent />}

            {/* {service && (
                <div className={style.service}>
                    <h1>SERVICES: {service.title}</h1>
                    <p>{service.price}</p>
                    <p>{service.desc}</p>
                </div>)}
            {!service && <ErrorContent />} */}
        </div>
    );
}