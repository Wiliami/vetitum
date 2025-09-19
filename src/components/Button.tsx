interface ButtonProps {
    title: string
    content: string
}

export default function Button(props: ButtonProps) {
    function handleClick() {
        alert('Clicked me')
    }
    
    return (
        <button onClick={handleClick} title={props.title}>
            {props.content}
        </button>
    )
}