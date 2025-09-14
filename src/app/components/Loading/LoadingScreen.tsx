// components/Loading/LoadingScreen.tsx
// 初回読み込み時のローディング画面
'use client'
import { useState, useEffect } from 'react'
import './styles/LoadingScreen.css'

interface LoadingScreenProps {
    onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [showConnected, setShowConnected] = useState(false)

    useEffect(() => {
        const timer1 = setTimeout(()  => {
            setShowConnected(true)
        }, 3000)
        const timer2 = setTimeout(() => {
            onComplete()
        }, 4000)

        return() => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [onComplete])
    return (
        <div className='loading-screen'>
            {!showConnected ? (
                <div className='loading-text'>Loading...</div>
            ) : (
                <div className='connected-text'>Connected!!</div>
            )}
        </div>
    )
}