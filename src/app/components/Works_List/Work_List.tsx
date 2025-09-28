import './styles/Work_List.css'

type Work_ListProps = {
    title: string
}

interface StyleProps {
    style?: React.CSSProperties
}

export default function Work_List({ title, style }: Work_ListProps & StyleProps) {
    return (
        <>
        <li>
        <div className="work-box" style={style}>
            <h2>{title}</h2>
        </div>
        </li>
        </>
    )
}