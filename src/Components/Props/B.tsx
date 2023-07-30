interface  Props {
    st: string[];
    nu: number;
}

export const B = (props: Props, Baba: boolean) => {   
    return (
        <div>
            {props.st && <p>{props.st}</p>}
            {!props.nu && <p>{props.nu}</p>}
        </div>
    )
}