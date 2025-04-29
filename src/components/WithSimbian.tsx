'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import AnimatedCard from './AnimatedCard'
import { Fragment } from 'react'


const steps = [
  { title: 'Triaged & Reported', description: 'SOC Agent handled investigation and reporting' },
  { title: 'Automated Response', description: 'Incident automatically contained' },
  { title: 'Comprehensive Analysis', description: 'AI recognized patterns' },
  { title: 'Accurate Detection', description: 'Zero false positives' },
  { title: '24/7 Coverage', description: 'No analyst fatigue' },
]

export default function WithSimbian() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="p-8 bg-green-50">
      <h2 className="text-3xl font-bold text-green-600 mb-8">With Simbian</h2>
      
      {/* Step progression with connectors */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-4 bg-green-500 text-white rounded-lg relative">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                >
                  {index + 1}
                </motion.span>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-black">{step.title}</h3>
                <p className="text-sm text-gray-600 max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </motion.div>

            {/* Connectors - horizontal for desktop, vertical for mobile */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
                className="h-8 w-0.5 md:h-0.5 md:w-16 bg-gray-300 mx-4 relative"
              >
                <ArrowRightIcon className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              </motion.div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Zero State Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <ZeroStatCard 
          title="Ignored Alerts" 
          summary="90% of alerts resolved automatically, 24/7"
        />
        <ZeroStatCard 
          title="Wrongly Closed" 
          summary="Correlates alerts to your environment"
        />
        <ZeroStatCard 
          title="Active Threats" 
          summary="Investigate every alert—no SOAR needed"
        />
      </div>
    </div>
  )
}

interface ZeroStatCardProps {
  title: string
  summary: string
}

function ZeroStatCard({ title, summary }: ZeroStatCardProps) {
  return (
    <AnimatedCard className="p-6 rounded-xl bg-white shadow-lg border-t-4 border-green-500">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
        >
          <CheckCircleIcon className="w-8 h-8 text-green-500" />
        </motion.div>
        
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-3xl font-bold text-green-600">0</span>
            
            {/* Animated checkmark circle */}
            
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-gray-600"
        >
          {summary}
        </motion.p>
      </AnimatePresence>
    </AnimatedCard>
  )
}