import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from "./components/NotFound";
import AvatarManagement from "./components/AvatarManagement/AvatarManagement";

const AdminLogin = lazy(() => import("./components/loginComponents/AdminLogin"));
const ResetPassword = lazy(() => import("./components/loginComponents/ResetPassword"));
const OTP = lazy(() => import("./components/loginComponents/OPT"));
const UserManagement = lazy(() => import("./components/userManagement/UserManagement"));
const UserDetails = lazy(() => import("./components/userManagement/UserDetails"));
const StoryPrompts = lazy(() => import("./components/LLMPrompts/StoryPrompts"));
const AudioPrompts = lazy(() => import("./components/LLMPrompts/SongPrompts"));
const LLMBlockList = lazy(() => import("./components/LLMPrompts/LLMBlockList"));
const CoinManagement = lazy(() => import("./components/CoinManagement/CoinManagement"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const CoinManagementAnalytics = lazy(() => import("./components/CoinManagement/CoinManagementAnalytics"));
const SubscriptionAnalytics = lazy(() => import("./components/Subscriptions/SubscriptionAnalytics"));
const SubscriptionPackages = lazy(() => import("./components/Subscriptions/SubscriptionPackages"));
const TransactionHistory = lazy(() => import("./components/TransactionHistory/TransactionHistory"));
const RevenueReports = lazy(() => import("./components/ReportAndAnalytics/RevenueReports"));
const APICostAnalysis = lazy(() => import("./components/ReportAndAnalytics/APICostAnalysis"));
const CostVSRevenue = lazy(() => import("./components/ReportAndAnalytics/CostVSRevenue"));
const FaqManagement = lazy(() => import("./components/FAQ/FaqManagement"));
const AdminAcount = lazy(() => import("./components/AdminAccount.tsx/AdminAcount"));
const ResetPasswordForm = lazy(() => import("./components/loginComponents/ResetPasswordForm"));
const PasswordChangeStatus = lazy(() => import("./components/loginComponents/PasswordChangeStatus"));

const LoadingFallback = () => <div>Loading...</div>;

export enum AdminRoutes {
  AdminLogin = "/dashboard/admin-login",
  AdminResetPassword = "/dashboard/admin-reset-password",
  AdminChangePassword = "/dashboard/admin-change-password",
  AdminChangePasswordStatus = "/dashboard/admin-change-password-status",
  AdminOtp = "/dashboard/admin-otp",
  Dashboard = "/dashboard",
  UserManagement = "/dashboard/user-management",
  UserDetails = "/dashboard/user-management/:id",
  StoryPrompts = "/dashboard/story-prompts",
  LLMPrompts = "/dashboard/llm-prompts",
  AvartarManagement = "/dashboard/avatar-management",
  AudioPrompts = "/dashboard/audio-prompts",
  LlmBlocklistPrompts = "/dashboard/llm-blocklist-prompts",
  CoinManagementPackage = "/dashboard/coin-management-package",
  CoinManagementAnalytics = "/dashboard/coin-management-analytics",
  SubscriptionManagementPackage = "/dashboard/subscription-management-package",
  SubscriptionManagementAnalytics = "/dashboard/subscription-management-analytics",
  TransactionHistory = "/dashboard/transaction-history",
  ReportAndAnalytics = "/dashboard/report-and-analytics",
  ApiCostAnalytics = "/dashboard/api-cost-analytics",
  CostVsRevenue = "/dashboard/cost-vs-revenue",
  FaqManagement = "/dashboard/faq-management",
  AdminAccount = "/dashboard/admin-account",
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path='/dashboard/admin-login' element={<AdminLogin />} />
        <Route path='/dashboard/admin-reset-password' element={<ResetPassword />} />
        <Route path='/dashboard/admin-change-password' element={<ResetPasswordForm />} />
        <Route path='/dashboard/admin-change-password-status' element={<PasswordChangeStatus />} />
        <Route path='/dashboard/admin-otp' element={<OTP />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/user-management' element={<UserManagement />} />
        <Route path='/dashboard/user-management/:id' element={<UserDetails />} />
        {/* <Route path='/dashboard/story-prompts' element={<StoryPrompts />} /> */}
        <Route path='/dashboard/audio-prompts' element={<AudioPrompts />} />
        <Route path='/dashboard/avatar-management' element={<AvatarManagement />} />
        <Route path='/dashboard/llm-blocklist-prompts' element={<LLMBlockList />} />
        <Route path='/dashboard/llm-prompts' element={<StoryPrompts />} />
        <Route path='/dashboard/coin-management-package' element={<CoinManagement />} />
        <Route path='/dashboard/coin-management-analytics' element={<CoinManagementAnalytics />} />
        <Route path='/dashboard/subscription-management-package' element={<SubscriptionPackages />} />
        <Route path='/dashboard/subscription-management-analytics' element={<SubscriptionAnalytics />} />
        <Route path='/dashboard/transaction-history' element={<TransactionHistory />} />
        <Route path='/dashboard/report-and-analytics' element={<RevenueReports />} />
        <Route path='/dashboard/api-cost-analytics' element={<APICostAnalysis />} />
        <Route path='/dashboard/cost-vs-revenue' element={<CostVSRevenue />} />
        <Route path='/dashboard/faq-management' element={<FaqManagement />} />
        <Route path='/dashboard/admin-account' element={<AdminAcount />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}