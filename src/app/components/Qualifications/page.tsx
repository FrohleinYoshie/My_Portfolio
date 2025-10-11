// components/Qualifications/page.tsx
// historiesページの資格を表示するコンポーネント
'use client'

import './style.css'

interface QualificationsProps {
    qualification_name: string;
    passing: number;
}

export default function Qualifications({ qualification_name, passing }: QualificationsProps) {
    return (
        <div className="qualification">
            <ul>
                <li>{qualification_name} - {passing}</li>
            </ul>
        </div>
    )
}