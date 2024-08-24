const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button className="bg-gray-800 text-white py-2 px-4 rounded">This Week</button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Link Interactions" value="79" change="+52" />
        <Card title="😍 Count" value="57" change="+43" />
        <Card title="Customers Sent To Review Site" value="53" change="+39" />
        <Card title="Average Rating" value="4.3 / 5.0" change="+18.47%" />
        <SentimentCard />
        <TapsCard />
        <FollowUpsCard />
        <ActiveCheersCard />
      </div>
    </div>
  );
};

const Card = ({ title, value, change }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="text-5xl font-bold">{value}</div>
      <div className="text-green-500 mt-2">{change} Since last week</div>
    </div>
  );
};

const SentimentCard = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Average Sentiment</h2>
      <div className="text-5xl flex items-center">
        <span className="mr-2">😊</span>
        <span className="text-xl">Last week</span>
      </div>
    </div>
  );
};

const TapsCard = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Most Taps</h2>
      <ul>
        <li className="flex justify-between">Dylan's Card <span>35 taps 😍</span></li>
        <li className="flex justify-between">Kylie's Card <span>27 taps</span></li>
        <li className="flex justify-between">Johanna's Card <span>17 taps</span></li>
      </ul>
    </div>
  );
};

const FollowUpsCard = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Customer Follow Ups</h2>
      <div className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span>
        <span>You are all caught up with customer follow ups!</span>
      </div>
    </div>
  );
};

const ActiveCheersCard = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Active Cheers Links (top 3)</h2>
      <ul>
        <li className="flex justify-between">Point of Sale Display <span>177 cheers</span></li>
        <li className="flex justify-between">Kylie's Card <span>121 cheers</span></li>
        <li className="flex justify-between">Ernesto's Card <span>97 cheers</span></li>
      </ul>
    </div>
  );
};

export default Dashboard;
