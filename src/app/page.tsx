// app/page.tsx
// ホーム画面ページ
'use client'
import Header from './components/Layout/Header'
import {useState, useEffect} from 'react'
import Footer from './components/Layout/Footer'
import Image from 'next/image'
import LoadingScreen from './components/Loading/LoadingScreen'
import Work_List from './components/Works_List/Work_List'
import './app.css'


export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [hasVisited, setHasVisited] = useState(false)
    const [test_work, setTest_work] = useState(["作品1", "作品2", "作品3"]) //　作品リストのテスト用配列
    const [test_histories, setTest_histories] = useState(["経歴1", "経歴2", "経歴3"]) // 経歴リストのテスト用配列

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
        <div className='page-container'>
            <Header />
            {/* ヘッダー、フッター以外のメインコンテンツを掲載する */}
            <main className='main-content'>
                {/* 自己紹介 */}
                <div className='hero-section'>
                    <div className='kind-my-profile'>
                        <h1>Y & K</h1>
                        <h1>インフラエンジニア</h1>
                        <p>2026卒インフラエンジニア</p>
                    </div>
                    <Image className='my-image' src="/img/my1.png" alt="myPicture" width={240} height={360} />
                </div>
                {/* これまでのポートフォリオを表示 */}
                <div className='my-work'>
                    <h1>これまでの作品</h1>
                    <ul>
                        {test_work.map((work, index) => (
                            <Work_List key={index} title={work} style={{ width: '240px' }} />
                        ))}
                    </ul>
                </div>
                {/* 簡易的な経歴を表示 */}
                <div className='my-histories'>
                    <h1>これまでの経歴</h1>
                    <ul>
                        {test_histories.map((history, index) => (
                            <li key={index}>{history}</li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}