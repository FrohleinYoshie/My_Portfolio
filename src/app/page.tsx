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
import { supabase } from '../lib/supabaseClient'
import type { Work, History } from '../types/portfolio'


export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [hasVisited, setHasVisited] = useState(false)
    const [works, setWorks] = useState<Work[]>([]) // 作品リストの初期値
    const [histories, setHistories] = useState<History[]>([]) // 経歴リストの初期値

    useEffect(() => {
        const visited = sessionStorage.getItem('hasVisited')
        if (visited) {
            setHasVisited(true)
            setIsLoading(false)
        }
    }, [])
    useEffect(() => {
        const loadData = async () => {
            const [{data: worksData, error: worksError}, {data: historiesData, error: historiesError}] = await Promise.all([
                supabase.from('works').select('*').order('created_at', { ascending: false }),
                supabase.from('histories').select('*').order('created_at', { ascending: false})
            ])
            if (!worksError && worksData) setWorks(worksData as Work[])
            if (!historiesError && historiesData) setHistories(historiesData as History[])
        }
    loadData()
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
                        {works.map((work) => (
                            <Work_List key={work.id} title={work.title} style={{ width: '240px' }} />
                        ))}
                    </ul>
                </div>
                {/* 簡易的な経歴を表示 */}
                <div className='my-histories'>
                    <h1>これまでの経歴</h1>
                    <ul>
                        {histories.map((history) => (
                            <li key={history.id}>{history.content}</li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}