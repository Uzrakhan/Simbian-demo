import HydrationFix from '@/components/HydrationFix'
import NoSSR from '@/components/NoSSR'
import WithoutSimbian from '@/components/WithoutSimbian'
import WithSimbian from '@/components/WithSimbian'

export default function Home() {
  return (
    <NoSSR>
      <main className="min-h-screen">
        <WithoutSimbian />
        <WithSimbian />
      </main>
    </NoSSR>
  )
}