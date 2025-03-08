import { ReactNode } from "react";

interface iButton {
    children: ReactNode;
    onClick?: () => void;
}

function Button({ children, onClick }: iButton) {

    // const handleClick = () => {
    //     onClick?.();
    // }

    return <button
        onClick={onClick}
        type="button"
        className={`btn btn-primary`} >
        {children}
    </button>

    // return <button
    //     onClick={() => {
    //         handleClick();
    //     }}
    //     type="button"
    //     className={`btn ${bolCheck ? 'btn-secondary' : 'btn-primary'}`}
    //     disabled={bolCheck}>
    //     {bolCheck ? 'Cargando...' : children}
    // </button>
}

export default Button;
