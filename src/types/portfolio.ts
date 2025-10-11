export type Work = {
    id: number
    title: string
    created_at: string
}

export type History = {
    id: number
    content: string
    created_at: string
}

export type Qualification = {
    id: number
    name: string
    passing: number
    created_at: string
}

export type Experiences = {
    id: number
    name: string
    content: string
    period: number
    created_at: string
}

export type Skills = {
    id: number
    programming_languages: string
    years: number
    created_at: string
}