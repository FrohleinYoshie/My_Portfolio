import './styles/style_Card_Lists.css';

interface CardListsProps {
    info: string[];
}

export default function Card_Lists({ info }: CardListsProps) {
    return (
        <div className='card-lists'>
            <h2>経歴</h2>
            <ul>
                {info.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
