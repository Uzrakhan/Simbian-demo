'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import AnimatedCard from './AnimatedCard'
import NoSSR from './NoSSR'
import { JSX } from 'react/jsx-runtime'
export const dynamic = 'force-dynamic'

interface Alert {
  id: number
  text: string
}

const alertsList: string[] = [
  'Phishing Email Detected',
  'Suspicious Login Attempt',
  'Malware Signature Found',
]

const HydrationProtectedComponent = () => {
  const [ignored, setIgnored] = useState(200)
  const [wrongly,setWrongly] = useState(35)
  const [active,setActive] = useState(5)
  const [ignoredAlerts, setIgnoredAlerts] = useState<Alert[]>([])
  const [wronglyClosedAlerts,setWronglyClosedAlerts] = useState<Alert[]>([])
  const [activeThreatsAlerts,setActiveThreatsAlerts] = useState<Alert[]>([])
  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      const now = Date.now()
      
      // Update ignored alerts
      setIgnoredAlerts(prev => [
        { id: now + 1, text: alertsList[Math.floor(Math.random() * alertsList.length)] },
        ...prev
      ].slice(0, 3))
      setIgnored(prev => prev + Math.floor(Math.random() * 5) + 1)

      // Update wrongly closed alerts
      setWronglyClosedAlerts(prev => [
        { id: now + 2, text: alertsList[Math.floor(Math.random() * alertsList.length)] },
        ...prev
      ].slice(0, 3))
      setWrongly(prev => prev + Math.floor(Math.random() * 2) + 1)

      // Update active threats
      setActiveThreatsAlerts(prev => [
        { id: now + 3, text: alertsList[Math.floor(Math.random() * alertsList.length)] },
        ...prev
      ].slice(0, 3))
      setActive(prev => prev + Math.floor(Math.random() * 1) + 1)

    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!isMounted) return null

  return (
    <div className="p-8 bg-red-50">
      <h2 className="text-3xl font-bold text-red-600 mb-8">Without Simbian</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard 
          icon={<BellAlertIcon className="w-8 h-8" />}
          title="Ignored Alerts"
          count={ignored}
          alerts={ignoredAlerts}
        />
        <StatCard 
         icon={<BellAlertIcon className='w-8 h-8'/>}
         title="Wrongly Closed Alerts"
         count={wrongly}
         alerts={wronglyClosedAlerts}
        />
        <StatCard 
         icon={<BellAlertIcon className='w-8 h-8'/>}
         title="Active Threats"
         count={active}
         alerts={activeThreatsAlerts}
        />
      </div>
    </div>
  )
}

export default function WithoutSimbian() {
  return (
    <NoSSR>
      <HydrationProtectedComponent />
    </NoSSR>
  )
}

interface StatCardProps {
  icon: JSX.Element
  title: string
  count: number
  alerts: Alert[]
}

function StatCard({ icon, title, count, alerts }: StatCardProps) {
  return (
    <AnimatedCard className="p-6 rounded-xl bg-white shadow-lg border-t-4 border-red-500">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <motion.span 
            key={count}
            className="text-3xl font-bold text-red-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {count}
          </motion.span>
        </div>
      </div>

      <div className='mb-4 text-sm text-black'>
          {title === 'Ignored Alerts' && 'Wasting time on false positives'}
          {title === 'Wrongly Closed Alerts' && 'Processing one alert at a time'}
          {title === 'Active Threats' && 'Fixing SOAR automation instead of real threats'}
      </div>
      
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {alerts.map(alert => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: 50 }}
              animate={
                {
                  opacity: 1, 
                  x: 0,
                  rotateZ: 0,
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }
              }
              exit={{ opacity: 0, height: 0 }}
              className="p-3 text-sm bg-red-100 rounded-lg text-black"
              transition={
                {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  duration: 0.2 
                }
              }
            >
              {alert.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AnimatedCard>
  )
}