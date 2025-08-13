import { 
    Calendar,
    CalendarCheck,
    Plus,
    Star,
    Sun,
    type LucideProps
 } from 'lucide-react'

export type IconProps = LucideProps

export const Icons = {
    AllTask: Calendar,
    Add: Plus,
    Important: Star,
    Today: Sun,
    Done: CalendarCheck
}