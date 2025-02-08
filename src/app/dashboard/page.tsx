// import React from 'react'
// import Dashboard from './Dashboard'


// const page = () => {
//   return (
//     <div>
//       <Dashboard/>
//     </div>
//   )
// }

// export default page

'use client'
import React from 'react'
import Sidebar from '@/app/dashboard/Sidebar'
import RentalDetails from '@/app/dashboard/RentalDetails'
import RecentTransactions from '@/app/dashboard/RecentTransactions'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9] dark:bg-gray-900">
      <main className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
        <Sidebar />

        <div className="flex-1 p-4 lg:p-7 space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <RentalDetails />

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5">
                <h2 className="font-semibold text-xl mb-4 dark:text-white">Top 5 Car Rental</h2>
                <img src="/Top 5 Car Rental.svg" alt="Top 5 Cars Chart" className="w-full h-[250px] object-contain rounded" />
              </div>

              <RecentTransactions />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
