'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Location {
  name: string
  date: string
  time: string
}

const RentalDetails = () => {
  const [pickupLocation, setPickupLocation] = useState<Location>({
    name: 'Kota Semarang',
    date: '20 July 2022',
    time: '7:00'
  })

  const [dropoffLocation, setDropoffLocation] = useState<Location>({
    name: 'Kota Semarang',
    date: '21 July 2022',
    time: '1:00'
  })

  const handleLocationChange = (type: 'pickup' | 'dropoff', field: keyof Location, value: string) => {
    if (type === 'pickup') {
      setPickupLocation(prev => ({ ...prev, [field]: value }))
    } else {
      setDropoffLocation(prev => ({ ...prev, [field]: value }))
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 space-y-4">
      <h2 className="font-semibold text-lg dark:text-white">Details Rental</h2>
      
      <img src="/Maps.svg" alt="map" className="w-full h-[272px] object-cover rounded-lg" />

      <div className="flex items-center space-x-5">
        <div className="w-[132px] h-[62px] flex-shrink-0">
          <img src="/car-look.svg" alt="car" className="w-full h-full object-contain rounded" />
        </div>
        <div>
          <div className="flex justify-between">
            <h3 className="font-bold text-xl dark:text-white">Nissan GT-R</h3>
            <span className="text-[#3D5278] dark:text-gray-400 text-sm">#9761</span>
          </div>
          <p className="text-[#3D5278] dark:text-gray-400 text-sm">Sport Car</p>
        </div>
      </div>

      {[
        { type: 'Pick-Up', icon: '/mark.svg', color: '#3563E9', location: pickupLocation },
        { type: 'Drop-Off', icon: '/mark-2.svg', color: '#ED3F3F', location: dropoffLocation }
      ].map((item) => (
        <div key={item.type} className="p-5 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600">
          <div className="flex items-center gap-3 mb-4">
            <img src={item.icon} alt="location marker" className="w-4 h-4" />
            <span className="font-medium dark:text-white">{item.type}</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Location', value: item.location.name },
              { label: 'Date', value: item.location.date },
              { label: 'Time', value: item.location.time }
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <h4 className="font-semibold dark:text-white">{field.label}</h4>
                <select 
                  className="w-full bg-transparent text-[#90A3BF] dark:text-gray-400 text-xs outline-none"
                  value={field.value}
                  onChange={(e) => handleLocationChange(
                    item.type === 'Pick-Up' ? 'pickup' : 'dropoff',
                    field.label.toLowerCase() as keyof Location,
                    e.target.value
                  )}
                >
                  <option value={field.value}>{field.value}</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center pt-4">
        <div>
          <h3 className="font-bold text-lg dark:text-white">Rental Summary</h3>
          <p className="text-sm text-[#90A3BF] dark:text-gray-400">Includes rental discount</p>
        </div>
        <span className="text-2xl font-semibold dark:text-white">$80.00</span>
      </div>
    </div>
  )
}

export default RentalDetails