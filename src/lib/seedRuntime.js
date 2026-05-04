import { useMissionStore } from '../store/missionStore'
import { usePeopleStore } from '../store/peopleStore'
import { useCapitalStore } from '../store/capitalStore'
import { useIntelStore } from '../store/intelStore'
import { useSystemStore } from '../store/systemStore'

const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa',
  'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
]

export function seedRuntime() {
  const capitalStore = useCapitalStore.getState()
  const missionStore = useMissionStore.getState()
  const peopleStore = usePeopleStore.getState()
  const intelStore = useIntelStore.getState()
  const systemStore = useSystemStore.getState()

  const missionCategories = ['Infrastructure', 'Education', 'Healthcare', 'Agriculture', 'Energy', 'Security', 'Sports', 'Technology']
  const missionStatuses = ['planning', 'active', 'active', 'active', 'completed', 'paused']

  const initialMissions = []
  for (let i = 1; i <= 75; i++) {
    const stateIndex = (i - 1) % 36
    initialMissions.push({
      id: i,
      title: `${nigerianStates[stateIndex]} ${missionCategories[i % missionCategories.length]} Initiative`,
      category: missionCategories[i % missionCategories.length],
      status: missionStatuses[i % missionStatuses.length],
      funding: `₦${(100 + i * 15)}M`,
      funded: `₦${(50 + i * 8)}M`,
      volunteers: Math.floor(Math.random() * 200) + 20,
      states: [nigerianStates[stateIndex]],
      progress: Math.floor(Math.random() * 100),
      startDate: `2025-${String((i % 12) + 1).padStart(2, '0')}-01`,
      endDate: `2026-${String(((i + 3) % 12) + 1).padStart(2, '0')}-28`,
    })
  }

  if (missionStore?.missions?.length === 0) {
    initialMissions.forEach(m => missionStore.createMission?.(m))
  }

  const chaptersList = []
  for (let i = 0; i < 36; i++) {
    chaptersList.push({
      id: i + 1,
      name: `${nigerianStates[i]} Chapter`,
      state: nigerianStates[i],
      region: i < 6 ? 'North East' : i < 12 ? 'North West' : i < 18 ? 'South East' : i < 24 ? 'South West' : 'South South',
      members: Math.floor(Math.random() * 500) + 50,
      volunteers: Math.floor(Math.random() * 200) + 30,
      status: 'active',
      leader: `Chapter Lead ${i + 1}`,
    })
  }

  const volunteersList = []
  for (let i = 1; i <= 500; i++) {
    volunteersList.push({
      id: i,
      name: `Volunteer ${i}`,
      email: `volunteer${i}@cityboy.org`,
      role: i <= 36 ? 'Chapter Lead' : i <= 100 ? 'Organizer' : 'Volunteer',
      chapter: chaptersList[i % 36]?.name || 'Lagos Chapter',
      state: nigerianStates[i % 36],
      score: Math.floor(Math.random() * 10000) + 500,
      hours: Math.floor(Math.random() * 500) + 50,
      status: i < 450 ? 'active' : 'inactive',
      joinedDate: new Date(Date.now() - Math.random() * 31536000000).toISOString(),
    })
  }

  const donorsList = []
  for (let i = 1; i <= 120; i++) {
    const amount = Math.floor(Math.random() * 50000000) + 100000
    donorsList.push({
      id: i,
      name: i <= 10 ? ['Shell Petroleum', 'MTN Foundation', 'Nigerian Breweries', 'Guaranty Trust Bank', 'Dangote Group', 'Nigerian Liquefied Gas', 'Addax Petroleum', 'Nigerian Bulk Electricity', 'First Bank', 'Zenith Bank'][i - 1] : `Donor ${i}`,
      email: i <= 10 ? `corporate${i}@company.org` : `donor${i}@email.org`,
      type: i <= 10 ? 'corporate' : 'individual',
      totalContributed: amount,
      lastContribution: amount,
      lastDate: new Date(Date.now() - Math.random() * 2592000000).toISOString(),
      status: 'active',
    })
  }

  const partnersList = []
  for (let i = 1; i <= 40; i++) {
    partnersList.push({
      id: i,
      name: i <= 15 ? ['Federal Ministry of Health', 'UNDP Nigeria', 'UNICEF Nigeria', 'World Bank', 'African Development Bank', 'State Governments', 'LGA Councils', 'Nigerian Police', 'NDLEA', 'NEMA', 'Nigerian Red Cross', 'USAID', 'DFID', 'EU Delegation', 'German Embassy'][i - 1] : `Partner ${i}`,
      type: i <= 15 ? 'government' : i <= 25 ? 'multilateral' : 'corporate',
      status: 'active',
      tier: i <= 10 ? 'platinum' : i <= 20 ? 'gold' : 'silver',
      since: `202${(i % 4) + 1}`,
    })
  }

  if (peopleStore?.volunteers?.length === 0 && volunteersList.length > 0) {
    peopleStore.setVolunteers?.(volunteersList)
  }
  if (peopleStore?.chapters?.length === 0 && chaptersList.length > 0) {
    peopleStore.setChapters?.(chaptersList)
  }
  if (peopleStore?.donors?.length === 0 && donorsList.length > 0) {
    peopleStore.setDonors?.(donorsList)
  }
  if (peopleStore?.partners?.length === 0 && partnersList.length > 0) {
    peopleStore.setPartners?.(partnersList)
  }

  const initialAllocations = []
  for (let i = 1; i <= 50; i++) {
    initialAllocations.push({
      id: i,
      mission: `Mission ${i}`,
      allocated: `₦${(10 + i * 5)}M`,
      status: i < 20 ? 'disbursed' : i < 35 ? 'partial' : 'pending',
      date: new Date(Date.now() - Math.random() * 15552000000).toISOString(),
    })
  }

  const transactions = []
  for (let i = 1; i <= 1000; i++) {
    const types = ['donation', 'disbursement', 'allocation', 'refund', 'interest']
    transactions.push({
      id: i,
      type: types[i % types.length],
      amount: Math.floor(Math.random() * 10000000) + 10000,
      description: `Transaction ${i}`,
      date: new Date(Date.now() - Math.random() * 31536000000).toISOString(),
      status: 'completed',
    })
  }

  if (capitalStore?.allocations?.length === 0 && initialAllocations.length > 0) {
    initialAllocations.forEach(a => capitalStore.allocateCapital?.(a.mission, a.allocated))
  }
  if (capitalStore?.transactions?.length === 0 && transactions.length > 0) {
    capitalStore.setTransactions?.(transactions)
  }

  const treasuryTotal = 15600000000
  const initialTreasury = {
    total: treasuryTotal,
    deployable: treasuryTotal * 0.4,
    committed: treasuryTotal * 0.35,
    reserved: treasuryTotal * 0.25,
    monthlyRunRate: 850000000,
    revenueStreams: [
      { name: 'Donor Contributions', amount: 8500000000 },
      { name: 'Partner Funding', amount: 4200000000 },
      { name: 'Grants', amount: 1800000000 },
      { name: 'Interest Income', amount: 1100000000 },
    ],
    investors: [
      { name: 'Shell Petroleum', amount: 2500000000 },
      { name: 'MTN Foundation', amount: 1800000000 },
      { name: 'Dangote Group', amount: 1500000000 },
      { name: 'GT Bank', amount: 800000000 },
    ],
  }

  if (capitalStore?.treasury?.total === undefined) {
    capitalStore.setTreasury?.(initialTreasury)
  }

  const initialNotifications = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    type: i < 10 ? 'success' : i < 30 ? 'info' : 'warning',
    title: [
      'Kaduna Water Phase 1 completed',
      'New volunteer joined Lagos Chapter',
      'Funding deadline approaching',
      'Mission milestone reached',
      'Partner approval granted',
      'Sentiment score updated',
      'Chapter activity report',
      'Capital deployment confirmed',
      'Volunteer hours updated',
      'Alert threshold adjusted',
      'System health check passed',
      'Data sync completed',
      'Audit log archived',
      'Cache cleared',
      'Backup completed',
    ][i % 15],
    message: `Update ${i + 1} from the system`,
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    read: i > 30,
  }))

  if (systemStore?.notifications?.length === 0 && initialNotifications.length > 0) {
    systemStore.setNotifications?.(initialNotifications)
  }

  const alertTypes = ['critical', 'warning', 'info', 'success']
  const alertTitles = [
    'Funding Gap Detected', 'Volunteer Shortage', 'Milestone Reached', 'System Update',
    'Data Sync Complete', 'Security Scan Done', 'Report Generated', 'Budget Alert',
    'Personnel Alert', 'Partner Milestone', 'Weather Warning', 'Security Alert'
  ]

  const initialAlerts = Array.from({ length: 220 }, (_, i) => ({
    id: i + 1,
    type: alertTypes[i % alertTypes.length],
    severity: i < 20 ? 'critical' : i < 60 ? 'high' : i < 120 ? 'medium' : 'low',
    title: alertTitles[i % alertTitles.length],
    message: `Alert ${i + 1}: System notification`,
    source: nigerianStates[i % 36],
    timestamp: new Date(Date.now() - i * 7200000).toISOString(),
    read: i > 150,
    resolved: i > 180,
  }))

  if (intelStore?.alerts?.length === 0 && initialAlerts.length > 0) {
    intelStore.setAlerts?.(initialAlerts)
  }

  const sentimentData = {
    overall: 72,
    positive: 58,
    neutral: 28,
    negative: 14,
    byRegion: [
      { region: 'North East', score: 65, volume: 12500 },
      { region: 'North West', score: 68, volume: 18200 },
      { region: 'South West', score: 78, volume: 24100 },
      { region: 'South East', score: 71, volume: 15800 },
      { region: 'South South', score: 69, volume: 14300 },
    ],
    trends: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
      score: 65 + Math.floor(Math.random() * 15),
      volume: Math.floor(Math.random() * 5000) + 1000,
    })).reverse(),
  }

  if (intelStore?.sentiment === undefined) {
    intelStore.setSentiment?.(sentimentData)
  }

  const initialActivityFeed = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    action: [
      'donation_received', 'mission_completed', 'volunteer_joined',
      'partner_approved', 'funding_approved', 'mission_created', 'volunteer_assigned'
    ][i % 7],
    actor: ['Shell Petroleum', 'Kaduna Chapter', 'Amina Yusuf', 'MTN Foundation', 'Executive', 'Command', 'Dangote'][i % 7],
    target: [`Mission ${i + 1}`, `Chapter ${(i % 36) + 1}`, 'Lagos Hub', 'Partnership', 'Funding', 'Initiative', 'Volunteer'][i % 7],
    amount: i % 3 === 0 ? `₦${(i + 1) * 10}M` : i % 3 === 1 ? `₦${(i + 1) * 5}M` : null,
    timestamp: new Date(Date.now() - i * 1800000).toISOString(),
  }))

  if (systemStore?.activityFeed?.length === 0 && initialActivityFeed.length > 0) {
    systemStore.setActivityFeed?.(initialActivityFeed)
  }

  return {
    seeded: {
      missions: initialMissions.length,
      volunteers: volunteersList.length,
      chapters: chaptersList.length,
      donors: donorsList.length,
      partners: partnersList.length,
      allocations: initialAllocations.length,
      transactions: transactions.length,
      notifications: initialNotifications.length,
      alerts: initialAlerts.length,
      activityFeed: initialActivityFeed.length,
      treasury: initialTreasury,
    },
  }
}