import { ReactNode } from "react";

interface iCard {
    children: ReactNode;
}

function Card(props: iCard) {
    const { children } = props;
    return (<div className="card" style={{ width: "350px" }}>
        <div className="card-body">{children} </div>
    </div>)
}

interface iCardBody {
    Title: string;
    Subtitle: string;
    Text: string;
}

export function CardBody(props: iCardBody) {
    const { Title, Subtitle, Text } = props;
    return (
        <>
            <h5 className="card-title">{Title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{Subtitle}</h6>
            <p className="card-text">{Text}</p>
        </>
    )
}
export default Card;