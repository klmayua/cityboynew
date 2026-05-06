import { useState } from 'react'
import CityBoyOSShell from '../../../layouts/CityBoyOSShell'
import { FileText, Search, Filter, Download } from 'lucide-react'

export default function AdminLogs() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const logs = [
    { id: 1, action: 'User login', user: 'admin@cityboy.os', ip: '192.168.1.1', time: '2 min ago', status: 'success' },
    { id: 2, action: 'Data export', user: 'superadmin', ip: '192.168.1.5', time: '15 min ago', status: 'success' },
    { id: 3, action: 'Config update', user: 'admin@cityboy.os', ip: '192.168.1.1', time: '1 hour ago', status: 'success' },
    { id: 4, action: 'Seed refresh', user: 'system', ip: 'localhost', time: '3 hours ago', status: 'success' },
    { id: 5, action: 'User created', user: 'admin@cityboy.os', ip: '192.168.1.10', time: '5 hours ago', status: 'success' },
    { id: 6, action: 'Permission change', user: 'superadmin', ip: '192.168.1.5', time: '6 hours ago', status: 'warning' },
    { id: 7, action: 'Failed login', user: 'unknown', ip: '10.0.0.45', time: '8 hours ago', status: 'error' },
  ]

  const actionTypes = ['all', 'User login', 'Data export', 'Config update', 'Seed refresh', 'User created']

  return (
    <CityBoyOSShell>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-2">System Logs</h1>
        <p className="text-gray-400 mb-6">Audit trail and system activity logs</p>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search logs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg text-white px-3 py-2"
            >
              {actionTypes.map(type => (
                <option key={type} value={type} className="bg-[#0A1421]">{type === 'all' ? 'All Actions' : type}</option>
              ))}
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <div className="glass-dark rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left text-gray-400 text-sm px-4 py-3">Action</th>
                <th className="text-left text-gray-400 text-sm px-4 py-3">User</th>
                <th className="text-left text-gray-400 text-sm px-4 py-3">IP</th>
                <th className="text-left text-gray-400 text-sm px-4 py-3">Time</th>
                <th className="text-left text-gray-400 text-sm px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id} className="border-t border-white/5">
                  <td className="text-white px-4 py-3">{log.action}</td>
                  <td className="text-gray-300 px-4 py-3">{log.user}</td>
                  <td className="text-gray-400 px-4 py-3 font-mono text-sm">{log.ip}</td>
                  <td className="text-gray-400 px-4 py-3">{log.time}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded ${
                      log.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                      log.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CityBoyOSShell>
  )
}