'use client'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()
  const [activeMenu, setActiveMenu] = useState('Dashboard')

  const handleMenuClick = (menuItem: string) => {
    setActiveMenu(menuItem)
  }

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...')
  }

  const menuItems = [
    { icon: '/dash-car.svg', label: 'Car Rent' },
    { icon: '/chart.svg', label: 'Insight' },
    { icon: '/empty-wallet-change.svg', label: 'Reimburse' },
    { icon: '/message.svg', label: 'Inbox' },
    { icon: '/calendar.svg', label: 'Calendar' },
  ]

  return (
    <aside className="w-full lg:w-[300px] bg-white dark:bg-gray-800 border-[#F3F5F7] border flex-shrink-0 p-4 lg:p-7">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-8">
          <p className="text-[#90A3BF] dark:text-gray-400 font-semibold text-xs ml-4">MAIN MENU</p>
          
          <nav className="space-y-4">
            <button 
              className={`w-full flex items-center p-4 ${
                activeMenu === 'Dashboard' ? 'bg-[#3563E9] text-white' : 'text-[#90A3BF] hover:bg-gray-50 dark:hover:bg-gray-700'
              } rounded-xl`}
              onClick={() => handleMenuClick('Dashboard')}
            >
              <img src="/home.svg" alt="home" className="w-6 h-6" />
              <span className="ml-3 font-medium">Dashboard</span>
            </button>

            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center p-4 ${
                  activeMenu === item.label ? 'bg-[#3563E9] text-white' : 'text-[#90A3BF] hover:bg-gray-50 dark:hover:bg-gray-700'
                } rounded-xl`}
                onClick={() => handleMenuClick(item.label)}
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span className="ml-3 font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-8 mt-12">
          <p className="text-[#90A3BF] dark:text-gray-400 font-semibold text-xs ml-4">PREFERENCES</p>
          
          <div className="space-y-4">
            <button className="w-full flex items-center p-4 text-[#90A3BF] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl">
              <img src="/dash-setting.svg" alt="settings" className="w-6 h-6" />
              <span className="ml-3 font-medium">Settings</span>
            </button>

            <button className="w-full flex items-center p-4 text-[#90A3BF] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl">
              <img src="/info-circle.svg" alt="help" className="w-6 h-6" />
              <span className="ml-3 font-medium">Help & Center</span>
            </button>

            <div 
              className="w-full flex items-center justify-between p-4 text-[#90A3BF] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl cursor-pointer"
              onClick={handleDarkMode}
            >
              <div className="flex items-center">
                <img src="/briefcase.svg" alt="dark mode" className="w-6 h-6" />
                <span className="ml-3 font-medium">Dark Mode</span>
              </div>
              <div className="relative">
                <div className={`w-[68px] h-[34px] rounded-full transition-colors duration-200 ${theme === 'dark' ? 'bg-[#3563E9]' : 'bg-gray-200'}`}>
                  <div className={`absolute top-[2px] left-[2px] w-[30px] h-[30px] bg-white rounded-full transition-transform duration-200 ${theme === 'dark' ? 'transform translate-x-[34px]' : ''}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="flex items-center p-4 text-[#90A3BF] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl mt-8"
          onClick={handleLogout}
        >
          <img src="/logout.svg" alt="logout" className="w-6 h-6" />
          <span className="ml-3 font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar