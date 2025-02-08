
// import React from 'react';


// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-[#F6F7F9]">
//       <main className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
//         {/* Sidebar */}
//         <aside className="w-full lg:w-[300px] bg-white border-[#F3F5F7] border flex-shrink-0 p-4 lg:p-7">
//           <div className="flex flex-col h-full justify-between">
//             {/* Main Menu */}
//             <div className="space-y-8">
//               <p className="text-[#90A3BF] font-semibold text-xs ml-4">MAIN MENU</p>
              
//               <nav className="space-y-4">
//                 <button className="w-full flex items-center p-4 bg-[#3563E9] text-white rounded-xl">
//                   <img src="/home.svg" alt="home" className="w-6 h-6" />
//                   <span className="ml-3 font-medium">Dashboard</span>
//                 </button>

//                 {[
//                   { icon: '/dash-car.svg', label: 'Car Rent' },
//                   { icon: '/chart.svg', label: 'Insight' },
//                   { icon: '/empty-wallet-change.svg', label: 'Reimburse' },
//                   { icon: '/message.svg', label: 'Inbox' },
//                   { icon: '/calendar.svg', label: 'Calendar' },
//                 ].map((item, index) => (
//                   <button key={index} className="w-full flex items-center p-4 text-[#90A3BF] hover:bg-gray-50 rounded-xl">
//                     <img src={item.icon} alt={item.label} className="w-6 h-6" />
//                     <span className="ml-3 font-medium">{item.label}</span>
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* Preferences */}
//             <div className="space-y-8 mt-12">
//               <p className="text-[#90A3BF] font-semibold text-xs ml-4">PREFERENCES</p>
              
//               <div className="space-y-4">
//                 <button className="w-full flex items-center p-4 text-[#90A3BF] hover:bg-gray-50 rounded-xl">
//                   <img src="/dash-setting.svg" alt="settings" className="w-6 h-6" />
//                   <span className="ml-3 font-medium">Settings</span>
//                 </button>

//                 <button className="w-full flex items-center p-4 text-[#90A3BF] hover:bg-gray-50 rounded-xl">
//                   <img src="/info-circle.svg" alt="help" className="w-6 h-6" />
//                   <span className="ml-3 font-medium">Help & Center</span>
//                 </button>

//                 <div className="w-full flex items-center justify-between p-4 text-[#90A3BF] hover:bg-gray-50 rounded-xl">
//                   <div className="flex items-center">
//                     <img src="/briefcase.svg" alt="dark mode" className="w-6 h-6" />
//                     <span className="ml-3 font-medium">Dark Mode</span>
//                   </div>
//                   <img src="/dark mode.svg" alt="toggle" className="w-[68px] h-[34px]" />
//                 </div>
//               </div>
//             </div>

//             {/* Logout */}
//             <button className="flex items-center p-4 text-[#90A3BF] hover:bg-gray-50 rounded-xl mt-8">
//               <img src="/logout.svg" alt="logout" className="w-6 h-6" />
//               <span className="ml-3 font-medium">Log Out</span>
//             </button>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1 p-4 lg:p-7 space-y-6">
//           <div className="grid lg:grid-cols-2 gap-6">
//             {/* Details Rental */}
//             <div className="bg-white rounded-xl p-5 space-y-4">
//               <h2 className="font-semibold text-lg">Details Rental</h2>
              
//               {/* Map */}
//               <img src="/Maps.svg" alt="map" className="w-full h-[272px] object-cover rounded-lg" />

//               {/* Car Details */}
//               <div className="flex items-center space-x-5">
//                 <div className="w-[132px] h-[62px] flex-shrink-0">
//                   <img src="/car-look.svg" alt="car" className="w-full h-full object-contain rounded" />
//                 </div>
//                 <div>
//                   <div className="flex justify-between">
//                     <h3 className="font-bold text-xl">Nissan GT-R</h3>
//                     <span className="text-[#3D5278] text-sm">#9761</span>
//                   </div>
//                   <p className="text-[#3D5278] text-sm">Sport Car</p>
//                 </div>
//               </div>

//               {/* Pick-up & Drop-off */}
//               <div className="space-y-4">
//                 {[
//                   { type: 'Pick-Up', icon: '/mark.svg', color: '#3563E9' },
//                   { type: 'Drop-Off', icon: '/mark-2.svg', color: '#ED3F3F' }
//                 ].map((item, index) => (
//                   <div key={item.type} className="p-5 bg-white rounded-lg border">
//                     <div className="flex items-center gap-3 mb-4">
//                       <img src={item.icon} alt="location marker" className="w-4 h-4" />
//                       <span className="font-medium">{item.type}</span>
//                     </div>

//                     <div className="grid grid-cols-3 gap-4">
//                       {[
//                         { label: 'Location', value: 'Kota Semarang' },
//                         { label: 'Date', value: `2${index}0 July 2022` },
//                         { label: 'Time', value: index === 0 ? '7:00' : '1:00' }
//                       ].map((field) => (
//                         <div key={field.label} className="space-y-2">
//                           <h4 className="font-semibold">{field.label}</h4>
//                           <div className="flex items-center justify-between text-[#90A3BF] text-xs">
//                             <span>{field.value}</span>
//                             <img src="/arrow-down.svg" alt="arrow" className="w-4 h-4" />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Rental Summary */}
//               <div className="flex justify-between items-center pt-4">
//                 <div>
//                   <h3 className="font-bold text-lg">Rental Summary</h3>
//                   <p className="text-sm text-[#90A3BF]">Includes rental discount</p>
//                 </div>
//                 <span className="text-2xl font-semibold">$80.00</span>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-6">
//               {/* Top 5 Cars Chart */}
//               <div className="bg-white rounded-xl p-5">
//                 <h2 className="font-semibold text-xl mb-4">Top 5 Car Rental</h2>
//                 <img src="/Top 5 Car Rental.svg" alt="Top 5 Cars Chart" className="w-full h-[250px] object-contain rounded" />
//               </div>

//               {/* Recent Transactions */}
//               <div className="bg-white rounded-xl p-5 space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h2 className="font-semibold text-xl">Recent Transaction</h2>
//                   <button className="text-blue-700">View All</button>
//                 </div>

//                 {[
//                   { image: '/car img-2.svg', name: 'Nissan GT-R', type: 'Sports Car', price: '$80.00', date: '20 July' },
//                   { image: '/car img-1.svg', name: 'Nissan GT-R', type: 'Sports Car', price: '$99.00', date: '19 July' },
//                   { image: '/rolls.svg', name: 'Rolls Royce', type: 'Sports Car', price: '$96.00', date: '18 July' },
//                   { image: '/cr-b.svg', name: 'CR-V', type: 'SUV', price: '$80.00', date: '17 July' }
//                 ].map((car, index) => (
//                   <div key={index} className="flex items-center space-x-5 pb-4 border-b last:border-0">
//                     <div className="w-[132px] h-[62px] flex-shrink-0">
//                       <img src={car.image} alt={car.name} className="w-full h-full object-contain rounded" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between">
//                         <h3 className="font-bold text-xl">{car.name}</h3>
//                         <span className="text-xs text-[#3D5278]">{car.date}</span>
//                       </div>
//                       <div className="flex justify-between mt-2">
//                         <span className="text-[#3D5278] text-sm">{car.type}</span>
//                         <span className="font-bold">{car.price}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;