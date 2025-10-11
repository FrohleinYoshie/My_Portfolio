// components/Skill/page.tsx
// Skillコンポーネントの型定義例
'use client'

import './style.css'

interface SkillProps {
    programming_languages: string;
    years: number;
}

export default function Skill({ programming_languages, years }: SkillProps) {
    return (
        <div className='Skill'>
            <ul>
                <li>{programming_languages} - {years}</li>
            </ul>
        </div>
    )
}