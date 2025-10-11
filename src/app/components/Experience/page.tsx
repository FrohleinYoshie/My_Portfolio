// components/Experience/page.tsx
// Experienceコンポーネントの型定義例
'use client'

import './style.css'

interface ExperienceProps {
    name: string;
    content: string;
    period: number;
    created_at: string;
}

export default function Experience({ name, content, period, created_at }: ExperienceProps) {
    return (
        <div className="experience">
        <ul>
            <li>Name: {name}</li>
            <li>Content: {content}</li>
            <li>Period: {period}</li>
            <li>Created At: {created_at}</li>
        </ul>
        </div>
    )
}