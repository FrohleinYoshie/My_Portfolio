// app/histories/page.tsx
// 経歴用画面ページ
'use client'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer';
import Qualifications from '../components/Qualifications/page';
import Experience from '../components/Experience/page';
import Skill from '../components/Skill/page';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './style.css'
import { supabase } from '../../lib/supabaseClient'
import type { History,Qualification, Experiences, Skills } from '../../types/portfolio'

type Tab = 'Sikaku' | 'Keiken' | 'Skills';

export default function Histories() {
    const [infoQualifications, setInfoQualifications] = useState<Qualification[]>([])
    const [infoHistories, setInfoHistories] = useState<History[]>([])
    const [infoSkills, setInfoSkills] = useState<Skills[]>([])
    const [infoExperience, setInfoExperience] = useState<Experiences[]>([])
    const [Tab, setTab] = useState<Tab>('Sikaku');
    useEffect(() => {
        const loadData = async () => {
            const [{data: historiesData, error: historiesError}, {data: qualificationsData, error: qualificationsError},{data: experienceData, error: experienceError},{data: skillsData, error: skillsError}] = await Promise.all ([
                supabase.from('histories').select('*').order('created_at', { ascending: false }),
                supabase.from(`qualifications`).select('*').order(`created_at`, { ascending: false }),
                supabase.from('experiences').select('*').order('created_at', { ascending: false }),
                supabase.from('skills').select('*').order('created_at', { ascending: false })
            ])
            if (!historiesError && historiesData) setInfoHistories(historiesData as History[])
            if (!qualificationsError && qualificationsData) setInfoQualifications(qualificationsData as Qualification[])
            if (!experienceError && experienceData ) setInfoExperience(experienceData as Experiences[])
            if (!skillsError && skillsData) setInfoSkills(skillsData as Skills[])
            }
        loadData()
    }, [])
    return (
<div className='page-container'>
            <Header />
                <div className='Lists'>
                    <button onClick={() => setTab('Sikaku')}>
                        <Image alt='Sikaku Logo' src={'/img/Sikaku.png'} width={242} height={242}/>
                    </button>
                    <button onClick={() => setTab('Keiken')}>
                        <Image alt='Keiken Logo' src={'/img/Keiken.png'} width={242} height={242}/>
                    </button>
                    <button onClick={() => setTab('Skills')}>
                        <Image alt='Skills Logo' src={'/img/SKILLS.png'} width={242} height={242}/>
                    </button>
                </div>
            <main className='main-content'>
                <div className='myHistories'>
                    {Tab === 'Sikaku' && (infoQualifications.map((qualification) => (
                        <Qualifications key={qualification.id} qualification_name={qualification.name} passing={qualification.passing} />
                    )))}
                    {Tab === 'Keiken' && (infoExperience.map((experience) => (
                        <Experience key={experience.id} name={experience.name} content={experience.content} period={experience.period} created_at={experience.created_at} />
                    )))}
                    {Tab === 'Skills' && (infoSkills.map((skill) => (
                        <Skill key={skill.id} programming_languages={skill.programming_languages} years={skill.years} />
                    )))}
                </div>
            </main>
            <Footer />
        </div>
    )
}