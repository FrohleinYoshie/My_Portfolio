// components/layout/Header.tsx
// 上部に画面遷移できるボタンを表示するヘッダーコンポーネント
import Link from 'next/link'
import './styles/Header.css'

export default function Header() {
    return(
        <header className='header'>
            <div>
                <p>My Blog</p>
            </div>
            <nav className='nav'>
                <Link href='/'>ホーム</Link>
                <Link href='/histories'>経歴</Link>
                <Link href='/blogs'>ブログ</Link>
                <Link href='/about'>自己紹介</Link>
            </nav>
        </header>
    )
}