import Timesheets from "@/components/views/timesheets/Timesheets";

const Dashboard = async () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 bg-white rounded-lg p-6 shadow-card">
      <h2 className="text-xl font-semibold">Your Timesheets</h2>
      <Timesheets />
    </div>
  );
};

export default Dashboard;
