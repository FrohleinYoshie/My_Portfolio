// my-blog/components/Layout/Footer.tsx
// 画面下部のフッターを表示させるコンポーネント

import Link from 'next/link'
import Image from 'next/image'
import './styles/Footer.css'

export default function Footer() {
    return(
        <footer className='footer'>
            <div>
                <h1 style={{ fontSize: '21px', color: '#161616ff', fontWeight: 'bold' }}>関連リンク</h1>
                {/* GitHubリンク遷移 別タグで表示 */}
                <Link href='https://github.com/FrohleinYoshie' target='_blank' rel='noopener noreferrer' className='icon-link'>
                    <Image alt='GitHub Logo' src='/img/GitHub.png' width={32} height={32} />
                </Link>
                {/* LinkedInリンク遷移 別タグで表示 */}
                <Link href='https://www.linkedin.com/in/yuzustudent3/' target='_blank' rel='noopener noreferrer' className='icon-link'>
                    <Image alt='LinkedIn Logo' src='/img/LinkedIn.png' width={32} height={32} />
                </Link>
            </div>
        </footer>
    )
}