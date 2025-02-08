'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Car {
  id: string
  name: string
  brand: string
  type: string
}

const SearchFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const filterRef = useRef<HTMLDivElement>(null)

  // Sample car data - replace with your actual car data
  const cars: Car[] = [
    { id: '1', name: 'Nissan GT-R', brand: 'Nissan', type: 'Sport' },
    { id: '2', name: 'CR-V', brand: 'Honda', type: 'SUV' },
    { id: '3', name: 'Rolls Royce', brand: 'Rolls Royce', type: 'Luxury' },
    { id: '4', name: 'Toyota Camry', brand: 'Toyota', type: 'Sedan' },
  ]

  const [filteredCars, setFilteredCars] = useState<Car[]>(cars)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'all' || car.type.toLowerCase() === selectedType.toLowerCase()
      return matchesSearch && matchesType
    })
    setFilteredCars(filtered)
  }, [searchTerm, selectedType])

  const carTypes = ['all', ...new Set(cars.map(car => car.type))]

  return (
    <div className="relative" ref={filterRef}>
      <div className="flex items-center w-full md:w-auto justify-between px-4 py-2 border-[1px] border-[#c3e4d9] rounded-[70px] lg:w-[492px] h-[44px]">
        <div className="flex items-center w-full">
          <Image src="/search-normal.svg" alt="search" width={24} height={24} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cars..."
            className="ml-4 text-[#596780] text-sm w-full outline-none"
          />
        </div>
        <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <Image src="/filter.svg" alt="filter" width={24} height={24} />
        </button>
      </div>

      {/* Filter Dropdown */}
      {isFilterOpen && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="font-semibold text-gray-700 mb-3">Filter by Type</h3>
            <div className="space-y-2">
              {carTypes.map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="carType"
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                    className="form-radio text-blue-600"
                  />
                  <span className="text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchTerm && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-40">
          {filteredCars.length > 0 ? (
            <ul className="py-2">
              {filteredCars.map((car) => (
                <li
                  key={car.id}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{car.name}</p>
                      <p className="text-sm text-gray-500">{car.brand}</p>
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {car.type}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-gray-500">No cars found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchFilter