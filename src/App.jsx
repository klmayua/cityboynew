import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { AnalyticsTracker } from './analytics'
import { Preloader } from './components/system/Preloader'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectNigeriaPage = lazy(() => import('./pages/ProjectNigeriaPage'))
const VolunteerApp = lazy(() => import('./pages/VolunteerApp'))
const TransparencyPage = lazy(() => import('./pages/TransparencyPage'))
const JoinPage = lazy(() => import('./pages/JoinPage'))
const DonatePage = lazy(() => import('./pages/DonatePage'))

const ArenaPage = lazy(() => import('./pages/public/ArenaPage'))
const ArenaChaptersPage = lazy(() => import('./pages/public/ArenaChaptersPage'))
const ImpactPage = lazy(() => import('./pages/public/ImpactPage'))
const CommunityPage = lazy(() => import('./pages/public/CommunityPage'))
const TrustPage = lazy(() => import('./pages/public/TrustPage'))
const GovernancePage = lazy(() => import('./pages/public/GovernancePage'))
const ProjectsPage = lazy(() => import('./pages/public/ProjectsPage'))
const StoriesPage = lazy(() => import('./pages/public/StoriesPage'))
const PartnersPage = lazy(() => import('./pages/public/PartnersPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const AboutPage = lazy(() => import('./pages/public/AboutPage'))
const InitiativesPage = lazy(() => import('./pages/public/InitiativesPage'))
const LeadershipPage = lazy(() => import('./pages/public/LeadershipPage'))
const MediaPage = lazy(() => import('./pages/public/MediaPage'))

const AppVolunteerDashboard = lazy(() => import('./pages/app/volunteer/AppVolunteerDashboard'))
const AppVolunteerTasks = lazy(() => import('./pages/app/volunteer/AppVolunteerTasks'))
const AppVolunteerCommunity = lazy(() => import('./pages/app/volunteer/AppVolunteerCommunity'))
const AppVolunteerRewards = lazy(() => import('./pages/app/volunteer/AppVolunteerRewards'))
const AppVolunteerTraining = lazy(() => import('./pages/app/volunteer/AppVolunteerTraining'))
const AppVolunteerProfile = lazy(() => import('./pages/app/volunteer/AppVolunteerProfile'))
const AppVolunteerWallet = lazy(() => import('./pages/app/volunteer/AppVolunteerWallet'))
const AppVolunteerLeaderboard = lazy(() => import('./pages/app/volunteer/AppVolunteerLeaderboard'))

const DonorDashboard = lazy(() => import('./pages/app/donor/DonorDashboard'))
const DonorProjects = lazy(() => import('./pages/app/donor/DonorProjects'))
const DonorPortfolio = lazy(() => import('./pages/app/donor/DonorPortfolio'))
const DonorReports = lazy(() => import('./pages/app/donor/DonorReports'))

const PartnerDashboard = lazy(() => import('./pages/app/partner/PartnerDashboard'))
const PartnerSponsorships = lazy(() => import('./pages/app/partner/PartnerSponsorships'))
const PartnerCampaigns = lazy(() => import('./pages/app/partner/PartnerCampaigns'))

const ChapterDashboard = lazy(() => import('./pages/app/chapter/ChapterDashboard'))
const ChapterMembers = lazy(() => import('./pages/app/chapter/ChapterMembers'))
const ChapterVolunteers = lazy(() => import('./pages/app/chapter/ChapterVolunteers'))
const ChapterProjects = lazy(() => import('./pages/app/chapter/ChapterProjects'))
const ChapterEvents = lazy(() => import('./pages/app/chapter/ChapterEvents'))
const ChapterFinance = lazy(() => import('./pages/app/chapter/ChapterFinance'))

const WalletOverview = lazy(() => import('./pages/app/wallet/WalletOverview'))
const WalletRewards = lazy(() => import('./pages/app/wallet/WalletRewards'))
const WalletStatements = lazy(() => import('./pages/app/wallet/WalletStatements'))
const WalletTransfers = lazy(() => import('./pages/app/wallet/WalletTransfers'))

const CommsChats = lazy(() => import('./pages/app/comms/CommsChats'))
const CommsChannels = lazy(() => import('./pages/app/comms/CommsChannels'))
const CommsBroadcast = lazy(() => import('./pages/app/comms/CommsBroadcast'))

const ExecutiveDashboard = lazy(() => import('./pages/app/executive/ExecutiveDashboard'))
const ExecutiveReports = lazy(() => import('./pages/app/executive/ExecutiveReports'))
const ExecutiveFunding = lazy(() => import('./pages/app/executive/ExecutiveFunding'))

const CommandNationalPulse = lazy(() => import('./pages/app/command/CommandNationalPulse'))
const CommandProjects = lazy(() => import('./pages/app/command/CommandProjects'))
const CommandSentiment = lazy(() => import('./pages/app/command/CommandSentiment'))
const CommandOverview = lazy(() => import('./pages/app/command/CommandOverview'))
const CommandMobilization = lazy(() => import('./pages/app/command/CommandMobilization'))
const CommandFunding = lazy(() => import('./pages/app/command/CommandFunding'))
const CommandPartners = lazy(() => import('./pages/app/command/CommandPartners'))
const CommandWarRoom = lazy(() => import('./pages/app/command/CommandWarRoom'))
const CommandReports = lazy(() => import('./pages/app/command/CommandReports'))

const IntelligenceOSINT = lazy(() => import('./pages/app/intelligence/IntelligenceOSINT'))
const IntelligenceSentiment = lazy(() => import('./pages/app/intelligence/IntelligenceSentiment'))
const IntelligenceAlerts = lazy(() => import('./pages/app/intelligence/IntelligenceAlerts'))

const AdminDashboard = lazy(() => import('./pages/app/admin/AdminDashboard'))
const AdminUsers = lazy(() => import('./pages/app/admin/AdminUsers'))
const AdminRoles = lazy(() => import('./pages/app/admin/AdminRoles'))
const AdminProjects = lazy(() => import('./pages/app/admin/AdminProjects'))
const AdminPayments = lazy(() => import('./pages/app/admin/AdminPayments'))
const AdminCompliance = lazy(() => import('./pages/app/admin/AdminCompliance'))

const LoginPage = lazy(() => import('./pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'))
const VerifyPage = lazy(() => import('./pages/auth/VerifyPage'))

function LoadingFallback() {
  return <Preloader />
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="initiatives" element={<InitiativesPage />} />
            <Route path="leadership" element={<LeadershipPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="project-nigeria" element={<ProjectNigeriaPage />} />
            <Route path="transparency" element={<TransparencyPage />} />
            <Route path="volunteer" element={<VolunteerApp />} />
            <Route path="join" element={<JoinPage />} />
            <Route path="donate" element={<DonatePage />} />
            <Route path="arena" element={<ArenaPage />} />
            <Route path="arena/chapters" element={<ArenaChaptersPage />} />
            <Route path="impact" element={<ImpactPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="trust" element={<TrustPage />} />
            <Route path="governance" element={<GovernancePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="verify" element={<VerifyPage />} />
            <Route path="app/volunteer" element={<AppVolunteerDashboard />} />
            <Route path="app/volunteer/tasks" element={<AppVolunteerTasks />} />
            <Route path="app/volunteer/community" element={<AppVolunteerCommunity />} />
            <Route path="app/volunteer/rewards" element={<AppVolunteerRewards />} />
            <Route path="app/volunteer/training" element={<AppVolunteerTraining />} />
            <Route path="app/volunteer/profile" element={<AppVolunteerProfile />} />
            <Route path="app/volunteer/wallet" element={<AppVolunteerWallet />} />
            <Route path="app/volunteer/leaderboard" element={<AppVolunteerLeaderboard />} />
            <Route path="app/donor" element={<DonorDashboard />} />
            <Route path="app/donor/projects" element={<DonorProjects />} />
            <Route path="app/donor/portfolio" element={<DonorPortfolio />} />
            <Route path="app/donor/reports" element={<DonorReports />} />
            <Route path="app/partner" element={<PartnerDashboard />} />
            <Route path="app/partner/sponsorships" element={<PartnerSponsorships />} />
            <Route path="app/partner/campaigns" element={<PartnerCampaigns />} />
            <Route path="app/chapter" element={<ChapterDashboard />} />
            <Route path="app/chapter/members" element={<ChapterMembers />} />
            <Route path="app/chapter/volunteers" element={<ChapterVolunteers />} />
            <Route path="app/chapter/projects" element={<ChapterProjects />} />
            <Route path="app/chapter/events" element={<ChapterEvents />} />
            <Route path="app/chapter/finance" element={<ChapterFinance />} />
            <Route path="app/wallet" element={<WalletOverview />} />
            <Route path="app/wallet/rewards" element={<WalletRewards />} />
            <Route path="app/wallet/statements" element={<WalletStatements />} />
            <Route path="app/wallet/transfers" element={<WalletTransfers />} />
            <Route path="app/comms" element={<CommsChats />} />
            <Route path="app/comms/channels" element={<CommsChannels />} />
            <Route path="app/comms/broadcast" element={<CommsBroadcast />} />
            <Route path="app/executive" element={<ExecutiveDashboard />} />
            <Route path="app/executive/reports" element={<ExecutiveReports />} />
            <Route path="app/executive/funding" element={<ExecutiveFunding />} />
            <Route path="app/command" element={<CommandOverview />} />
            <Route path="app/command/pulse" element={<CommandNationalPulse />} />
            <Route path="app/command/mobilization" element={<CommandMobilization />} />
            <Route path="app/command/funding" element={<CommandFunding />} />
            <Route path="app/command/projects" element={<CommandProjects />} />
            <Route path="app/command/partners" element={<CommandPartners />} />
            <Route path="app/command/sentiment" element={<CommandSentiment />} />
            <Route path="app/command/war-room" element={<CommandWarRoom />} />
            <Route path="app/command/reports" element={<CommandReports />} />
            <Route path="app/intelligence" element={<IntelligenceOSINT />} />
            <Route path="app/intelligence/sentiment" element={<IntelligenceSentiment />} />
            <Route path="app/intelligence/alerts" element={<IntelligenceAlerts />} />
            <Route path="app/admin" element={<AdminDashboard />} />
            <Route path="app/admin/users" element={<AdminUsers />} />
            <Route path="app/admin/roles" element={<AdminRoles />} />
            <Route path="app/admin/projects" element={<AdminProjects />} />
            <Route path="app/admin/payments" element={<AdminPayments />} />
            <Route path="app/admin/compliance" element={<AdminCompliance />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App