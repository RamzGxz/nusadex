import ComponentTabsDashboard from "@/components/dashboard/component-tabs-dashboard"
import TabsDashboardWallet from "@/components/dashboard/tabs-dashboard-wallet"

const Dashboard = () => {
  return (
    <div>
      <TabsDashboardWallet />
      <div className="pt-5">
        <ComponentTabsDashboard />
      </div>
    </div>
  )
}

export default Dashboard