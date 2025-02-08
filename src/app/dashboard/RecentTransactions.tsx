'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Transaction {
  id: string
  image: string
  name: string
  type: string
  price: string
  date: string
}

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', image: '/car img-2.svg', name: 'Nissan GT-R', type: 'Sports Car', price: '$80.00', date: '20 July' },
    { id: '2', image: '/car img-1.svg', name: 'Nissan GT-R', type: 'Sports Car', price: '$99.00', date: '19 July' },
    { id: '3', image: '/rolls.svg', name: 'Rolls Royce', type: 'Sports Car', price: '$96.00', date: '18 July' },
    { id: '4', image: '/cr-b.svg', name: 'CR-V', type: 'SUV', price: '$80.00', date: '17 July' }
  ])

  const handleViewAll = () => {
    // Add your view all logic here
    console.log('Viewing all transactions...')
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl dark:text-white">Recent Transaction</h2>
        <button 
          className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>

      {transactions.map((transaction) => (
        <div 
          key={transaction.id} 
          className="flex items-center space-x-5 pb-4 border-b dark:border-gray-700 last:border-0"
        >
          <div className="w-[132px] h-[62px] flex-shrink-0">
            <img src={transaction.image} alt={transaction.name} className="w-full h-full object-contain rounded" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl dark:text-white">{transaction.name}</h3>
              <span className="text-xs text-[#3D5278] dark:text-gray-400">{transaction.date}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[#3D5278] dark:text-gray-400 text-sm">{transaction.type}</span>
              <span className="font-bold dark:text-white">{transaction.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentTransactions