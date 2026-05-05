import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Add, Remove, MyLocation, ReceiptLong, ArrowRightAlt, PictureAsPdf, Analytics } from '@material-symbols-svg/react/outlined'

export default function TransparencyPage() {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#003153]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5-AnPkhfUk4mFaemDUto8vKPUiPlQOff5f5SMe0GIYDJo4aMtx0pqXex2VVViAlN4bTTeBleIgF_b_qekrw6yoGsPw4Go82Aetm0diHNF_wLW775m2zIwFF_E5zc9lK91mHMEL_cJV4NqvGJRzfPqjBFVHhuqsa7jWddHtHkJbZfUQudNiG59_i-EiAnHP3PuZJg7Lk02LacUSKR6dPuFRhSlG-r81CmbPqpBfsTrciD--bJWIHriPiZ4skGJjEaDT3BG9I0xb9o" alt="City grid"/>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-block font-label-caps text-secondary px-4 py-1 border border-secondary/30 rounded-full bg-secondary/5">Institutional Integrity</span>
            <h1 className="font-h1 text-white leading-tight">National Transparency Ledger</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Providing every citizen with a real-time, immutable view of the resources, project milestones, and trust metrics fueling our nation's digital evolution.</p>
          </div>
        </section>

        {/* Massive Counters */}
        <section className="relative -mt-24 px-6 z-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Funds */}
            <div className="p-10 rounded-2xl border-t-2 border-secondary" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <p className="font-label-caps text-secondary mb-4">Total Funds Raised</p>
              <h2 className="font-h2 text-white tabular-nums">₦482.9B</h2>
              <div className="mt-6 flex items-center gap-2 text-tertiary">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">12.4% Increase</span>
                <span className="text-slate-500 text-xs ml-auto">Last 30 Days</span>
              </div>
            </div>
            {/* Projects Delivered */}
            <div className="p-10 rounded-2xl border-t-2 border-white/20" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <p className="font-label-caps text-slate-400 mb-4">Projects Delivered</p>
              <h2 className="font-h2 text-white tabular-nums">1,402</h2>
              <div className="mt-6 w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4 rounded-full"></div>
              </div>
              <div className="mt-2 flex justify-between text-xs font-bold text-slate-500">
                <span>75% Efficiency</span>
                <span>Target: 1,850</span>
              </div>
            </div>
            {/* Trust Index */}
            <div className="p-10 rounded-2xl border-t-2 border-tertiary" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <p className="font-label-caps text-tertiary mb-4">Trust Index</p>
              <h2 className="font-h2 text-white tabular-nums">98.2%</h2>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#003153] bg-slate-700"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#003153] bg-slate-600"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#003153] bg-slate-500"></div>
                </div>
                <span className="text-xs text-slate-400 ml-2 font-bold">Verified by 4.2M Citizens</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 px-6 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="font-label-caps text-secondary">Live Geo-Pulse</span>
              <h2 className="font-h2 text-white mt-4">Infrastructure Heatmap</h2>
              <p className="font-body-md text-on-surface-variant mt-2">Drill down into specific Local Government Areas to track project deployment, spending, and local impact scores in real-time.</p>
            </div>
            <div className="flex gap-4">
              <select className="bg-surface-container border-outline-variant text-white font-sora text-sm px-6 py-3 rounded-xl focus:ring-secondary focus:border-secondary">
                <option>Select Region</option>
                <option>South West</option>
                <option>South East</option>
                <option>North Central</option>
              </select>
              <select className="bg-surface-container border-outline-variant text-white font-sora text-sm px-6 py-3 rounded-xl focus:ring-secondary focus:border-secondary">
                <option>Select State</option>
                <option>Lagos State</option>
                <option>FCT Abuja</option>
                <option>Kano State</option>
              </select>
            </div>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden group" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
            <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb1HFnH0yLqqD_QMFHTtE5sRojYvq15WX3qwV5MA9DzVSScG5pDwt5b6EUfzmjsLDTLv8aRIDZjlHqn_JMzcoCs07bOvS4eoXX-x-QiSH7Fc3buVQemZnyCSmgw_KXoL9jqqz82z1FQ6AX58H-wvTvjDWZrlEtHJ3BqdAVXYtMkJvVvGDv6uVk6n0t0MO37lE6utxy2FbflyExoptTlUHu3tVTzN7lOs7MEUbG6__zq36VBqP-YMMW6nZVmxElsd3d5FOdJ1MfbRY" alt="Nigeria map"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#003153] via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 space-y-4">
              <div className="bg-[#003153]/90 p-6 rounded-2xl border border-secondary/20 shadow-2xl">
                <p className="font-label-caps text-slate-400 text-[10px]">Active Region Focus</p>
                <h4 className="font-h3 text-white">Lagos Central Hub</h4>
                <div className="flex gap-8 mt-4">
                  <div>
                    <span className="block text-xs text-slate-500 font-bold uppercase">Funding</span>
                    <span className="text-secondary font-sora font-bold">₦12.8B</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-bold uppercase">Impact</span>
                    <span className="text-tertiary font-sora font-bold">+15.2%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 right-10 flex flex-col gap-2">
              <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-on-secondary transition-colors">
                <Add className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-on-secondary transition-colors">
                <Remove className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-secondary hover:text-on-secondary transition-colors">
                <MyLocation className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Public Ledger Table */}
        <section className="py-20 bg-surface-container-lowest">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-h2 text-white">Public Funding Ledger</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mt-4">Every Naira accounted for. View the linear flow of capital from initial pledge to project execution receipts.</p>
            </div>
            <div className="rounded-3xl overflow-hidden overflow-x-auto" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary-container/50 border-b border-white/5">
                    <th className="p-6 font-label-caps text-secondary">Transaction ID</th>
                    <th className="p-6 font-label-caps text-slate-300">Target Project</th>
                    <th className="p-6 font-label-caps text-slate-300">Value (₦)</th>
                    <th className="p-6 font-label-caps text-slate-300">Status</th>
                    <th className="p-6 font-label-caps text-slate-300">Ledger Hash</th>
                    <th className="p-6 font-label-caps text-slate-300">Evidence</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white font-mono">TXN-9021-X9</td>
                    <td className="p-6 text-on-surface-variant font-bold">Solar Hub Kaduna Phase II</td>
                    <td className="p-6 text-secondary font-bold">42,500,000</td>
                    <td className="p-6"><span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold border border-tertiary/20">Verified</span></td>
                    <td className="p-6 text-slate-500 font-mono text-xs">0x88f2...b4c1</td>
                    <td className="p-6"><button className="text-secondary hover:underline flex items-center gap-1 font-bold"><ReceiptLong className="w-4 h-4" /> View PDF</button></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white font-mono">TXN-7742-L0</td>
                    <td className="p-6 text-on-surface-variant font-bold">Tech Academy Delta Support</td>
                    <td className="p-6 text-secondary font-bold">12,000,000</td>
                    <td className="p-6"><span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold border border-secondary/20">Processing</span></td>
                    <td className="p-6 text-slate-500 font-mono text-xs">0x44d1...a22f</td>
                    <td className="p-6"><button className="text-secondary hover:underline flex items-center gap-1 font-bold"><ReceiptLong className="w-4 h-4" /> View Receipt</button></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white font-mono">TXN-1139-Z4</td>
                    <td className="p-6 text-on-surface-variant font-bold">Digital Grid Lagos West</td>
                    <td className="p-6 text-secondary font-bold">156,000,000</td>
                    <td className="p-6"><span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold border border-tertiary/20">Verified</span></td>
                    <td className="p-6 text-slate-500 font-mono text-xs">0x99e5...f031</td>
                    <td className="p-6"><button className="text-secondary hover:underline flex items-center gap-1 font-bold"><ReceiptLong className="w-4 h-4" /> View Evidence</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Project Cards */}
        <section className="py-20 px-6 max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-h2 text-white">Project Spotlight</h2>
            <button className="text-secondary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
              View All Projects <ArrowRightAlt className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl overflow-hidden group" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEEJUcZY9XaDDD66jlK5aStWyELGMtf3ACR3_lUC3Dpp4ndP0ifC5zIgcJYjhHwTNADtCv_GEvY5ptFnuWsbkT7NLUmQk-zwl_Y-HtFLywkp0NC17JzfLFEAjMDlawCIhgzWEtJy15QGW1O6TSIRA9-7wlAW-Uv3weO7Ae_ku5A5w0QgzX46ihZ06MpHGJTocUXxAZ0SHacND-avceHeoIL3jHuuDVGpG4KI-wpx8_yzMLwDmqag-0ZFc12e8c_JpQd7MEu1hXHoY" alt="Solar panels"/>
                <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-lg text-xs font-bold">LIVE</div>
              </div>
              <div className="p-8">
                <p className="font-label-caps text-slate-500 mb-2">Sustainable Power</p>
                <h4 className="font-h3 text-white mb-6">Kaduna Solar Grid</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-400">Funding Milestones</span>
                      <span className="text-secondary">88% Funded</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full">
                      <div className="h-full bg-secondary w-[88%] rounded-full shadow-[0_0_10px_rgba(233,195,73,0.5)]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-bold">TOTAL BUDGET</span>
                      <span className="text-sm font-bold text-white">₦2.4B</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-500 font-bold">IMPACT AREA</span>
                      <span className="text-sm font-bold text-white">40k Homes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-3xl overflow-hidden group" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepcos0KiWxvNzqff4sgL5yBHUsCHnpHvWGLqDgh5zVeqUocS-D487OnQqgn36ti97oSOr0fu4jB1lmlv1RpKO4VnmHXCJqV6H7X84T-DA0EqKg2BNJo279ffqmLLbu5fMdhcWGBVFjKAHYzV84cGvMUexZpfFBE8IJBgN9GFO8HtTmo1s_tZbZ55XNedNjJ8DwspmODOXebBDFtqDAYC1Q4ybu9LKFYEeyIhG836UAlyhme684gaNl85rLlwwkVet-Pl7mWL2fAI" alt="Tech Academy"/>
                <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-lg text-xs font-bold">UP NEXT</div>
              </div>
              <div className="p-8">
                <p className="font-label-caps text-slate-500 mb-2">Human Capital</p>
                <h4 className="font-h3 text-white mb-6">Delta Tech Academy</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-400">Construction Progress</span>
                      <span className="text-tertiary">42% Complete</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full">
                      <div className="h-full bg-tertiary w-[42%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-bold">TOTAL BUDGET</span>
                      <span className="text-sm font-bold text-white">₦850M</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-500 font-bold">ENROLMENT</span>
                      <span className="text-sm font-bold text-white">2.5k Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-3xl overflow-hidden group border border-secondary/30" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_XibZn0bJiXSv32rxeuP4PpN7fxYFSM_DLz0YCiSYWI8H3ue7pJxAHqW7NffTKUMkbiPJrUjg0qMNB-CuNQfyEbxAhPkQZP5o6bGI5gPR7Kn4eTALCJgsgmt9Zr_HfsLK58FXwix7lCIzHuHdbqhWb8caU_0WMSE3bJeZcmKDmuMYkXwxDZoNY4U-EEN6qpcDF1bkt60IRiPk9Pxr7e09sh5ySbF8DYbRZCUqplVIuW1kNFSryEXarQZqajs_0cJFcWlVW0_kyH4" alt="Command Center"/>
                <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-lg text-xs font-bold">COMPLETED</div>
              </div>
              <div className="p-8">
                <p className="font-label-caps text-slate-500 mb-2">Institutional Core</p>
                <h4 className="font-h3 text-white mb-6">Digital Command One</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-400">Operational Health</span>
                      <span className="text-tertiary">100% Online</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full">
                      <div className="h-full bg-tertiary w-full rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-bold">TOTAL COST</span>
                      <span className="text-sm font-bold text-white">₦1.2B</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-500 font-bold">NETWORK UP</span>
                      <span className="text-sm font-bold text-white">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="py-20 px-6 bg-[#001F33]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-label-caps text-secondary">Institutional Records</span>
              <h2 className="font-h2 text-white mt-4">Audit & Accountability Reports</h2>
              <p className="font-body-lg text-on-surface-variant mt-6">Download our quarterly and annual transparency reports, certified by international third-party audit firms. Our financial records are fully public and immutable.</p>
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-white/10 hover:border-secondary transition-colors group cursor-pointer" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
                  <PictureAsPdf className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-white">Q3 Impact Report</h5>
                  <p className="text-xs text-slate-500 mt-2">FY 2024 • 12.4MB</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/10 hover:border-secondary transition-colors group cursor-pointer" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
                  <Analytics className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-white">Financial Audit</h5>
                  <p className="text-xs text-slate-500 mt-2">Verified PDF • 8.1MB</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full flex items-center justify-center p-20 border-secondary/10 relative overflow-hidden" style={{background: 'rgba(0, 49, 83, 0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(233, 195, 73, 0.1)'}}>
                <div className="absolute inset-0 bg-secondary/5 blur-3xl rounded-full"></div>
                <img className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS-x27T637ctUmbbfNIUgPtqOFeRTF3-UYbKvENH094DNPnSR1IdAxAe2qj1QqET5QNnlCVmwT0y_fyvxhWCzgHgfQgYMAIlR1b9eCvjGmy5Djx02EgZRdfa268vacROVaOOvFhNkRq2UfJ0WRBYuM5N_bNmzUyYO3JLrCVeBOlVB0n6WYJmy5wZ56ygHNWFMxS71OcyjfaQadADX2lLIYosjGFpd8nrj77F6aYil58Zf_xN_7Ink_xHXJZE07zDZ9LA6SH6JDHCQ" alt="Ledger"/>
              </div>
            </div>
          </div>
        </section>

        {/* National Impact Ticker */}
        <div className="w-full bg-secondary py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
          <div className="inline-block animate-marquee">
            <span className="font-label-caps text-on-secondary px-8">PROJECT DELTA HUB LIVE</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">KADUNA SOLAR POWER 88% FUNDED</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">NATIONAL TRUST INDEX 98.2%</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">AUDIT COMPLETE BY KPMG</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">PROJECT DELTA HUB LIVE</span>
          </div>
          <div className="inline-block animate-marquee">
            <span className="font-label-caps text-on-secondary px-8">PROJECT DELTA HUB LIVE</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">KADUNA SOLAR POWER 88% FUNDED</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">NATIONAL TRUST INDEX 98.2%</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">AUDIT COMPLETE BY KPMG</span>
            <span className="text-on-secondary text-lg">★</span>
            <span className="font-label-caps text-on-secondary px-8">PROJECT DELTA HUB LIVE</span>
          </div>
        </div>
      </main>
    </>
  )
}