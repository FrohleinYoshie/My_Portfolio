// app/page.tsx
// ホーム画面ページ
'use client'
import Header from './components/Layout/Header'
import {useState, useEffect} from 'react'
import Footer from './components/Layout/Footer'
import Image from 'next/image'
import LoadingScreen from './components/Loading/LoadingScreen'


export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [hasVisited, setHasVisited] = useState(false)

    useEffect(() => {
        const visited = sessionStorage.getItem('hasVisited')
        if (visited) {
            setHasVisited(true)
            setIsLoading(false)
        }
    }, [])
    const handleLoadingComplete = () => {
        setIsLoading(false)
        sessionStorage.setItem('hasVisited', 'true')
    }
    if (isLoading && !hasVisited) {
        return <LoadingScreen onComplete={handleLoadingComplete} />
    }
    return(
        <div>
            <Header />
            <Image className='my-image' src="/img/my1.png" alt="myPicture" width={810} height={1215} />
            <div className='kind-my-profile'>
                <h1>Y & K</h1>
                <h1>インフラエンジニア</h1>
                <p>2026卒インフラエンジニア</p>
            </div>
            <Footer />
        </div>
    )
}