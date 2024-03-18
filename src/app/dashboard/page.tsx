import DiscoveryDashBoard from '@/components/item/DiscoveryDashBoard'
import Dashboard from '@/components/layouts/dashboard/dashboard'
import React from 'react'

type Props = {}

export default function DashboardPage({}: Props) {
  return (
    <Dashboard>
        <DiscoveryDashBoard/>
    </Dashboard>
  )
}