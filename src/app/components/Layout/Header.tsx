// components/layout/Header.tsx
// 上部に画面遷移できるボタンを表示するヘッダーコンポーネント
import Link from 'next/link'
import Image from 'next/image'
import './styles/Header.css'

export default function Header() {
    return(
        <header className='header'>
            <div>
                <p>My Blog</p>
            </div>
            <nav className='nav'>
                <Link href='/'>HOME</Link>
                <Link href='/histories'>HISTORIES</Link>
                <Link href='/blogs'>BLOGS</Link>
                <Link href='/about'>ABOUT ME</Link>
            </nav>
            <nav className='over_link'>
                <Link href='https://github.com/FrohleinYoshie' target='_blank' rel='noopener noreferrer' className='icon-link'>
                    <Image alt='GitHub Logo' src='/img/GitHub.png' width={32} height={32} />
                </Link>
                <Link href='https://qiita.com/FrohleinYoshie' target='_blank' rel='noopener noreferrer' className='icon-link'>
                    <Image alt='Qiita Logo' src='/img/Qiita.png' width={40} height={40} />
                </Link>
            </nav>
        </header>
    )
}