import React from 'react';
import { Search, Upload, MessageCircle, ThumbsUp, Video, Book, Bell, Settings, Home, User, Plus } from 'lucide-react';

const App = () => {
  const [currentScreen, setCurrentScreen] = React.useState('home');

  const renderScreen = () => {
    switch(currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'submit':
        return <SubmitIdeaScreen />;
      case 'idea':
        return <IdeaDetailsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {renderScreen()}
      <BottomNav setCurrentScreen={setCurrentScreen} />
    </div>
  );
};

const HomeScreen = () => (
  <div className="flex-1 p-4 bg-green-50">
    <h1 className="text-2xl font-bold text-green-800 mb-4">FarmTech Hub</h1>
    <div className="flex items-center mb-4 bg-white rounded-full shadow-md">
      <Search className="ml-3 text-gray-400" />
      <input className="w-full p-2 rounded-full" placeholder="Search ideas..." />
    </div>
    <div className="grid grid-cols-2 gap-2 mb-4">
      {['Irrigation', 'Crop Management', 'Sustainable Practices', 'Smart Farming'].map((category) => (
        <button key={category} className="p-2 bg-green-200 rounded-md text-green-800">
          {category}
        </button>
      ))}
    </div>
    <h2 className="text-xl font-semibold text-green-800 mb-2">Recent Ideas</h2>
    <div className="space-y-2">
      {['AI-powered pest detection', 'Solar-powered irrigation system', 'Drone crop monitoring'].map((idea) => (
        <div key={idea} className="p-2 bg-white rounded-md shadow">
          {idea}
        </div>
      ))}
    </div>
  </div>
);

const SubmitIdeaScreen = () => (
  <div className="flex-1 p-4 bg-green-50">
    <h1 className="text-2xl font-bold text-green-800 mb-4">Submit New Idea</h1>
    <form className="space-y-4">
      <input className="w-full p-2 rounded-md" placeholder="Idea Title" />
      <textarea className="w-full p-2 rounded-md" placeholder="Description" rows="4" />
      <select className="w-full p-2 rounded-md">
        <option>Select Category</option>
        <option>Irrigation</option>
        <option>Crop Management</option>
        <option>Sustainable Practices</option>
      </select>
      <div className="flex items-center space-x-2">
        <Upload />
        <span>Upload Images</span>
      </div>
      <button className="w-full p-2 bg-green-600 text-white rounded-md">Submit Idea</button>
    </form>
  </div>
);

const IdeaDetailsScreen = () => (
  <div className="flex-1 p-4 bg-green-50">
    <h1 className="text-2xl font-bold text-green-800 mb-4">AI-powered pest detection</h1>
    <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center">
      <span className="text-gray-500">Image Placeholder</span>
    </div>
    <p className="mb-4">This innovative system uses machine learning algorithms to detect and identify pests in real-time, allowing for targeted and efficient pest control measures.</p>
    <div className="flex items-center space-x-4 mb-4">
      <button className="flex items-center space-x-1 bg-green-200 p-2 rounded-md">
        <ThumbsUp size={16} />
        <span>152</span>
      </button>
      <button className="flex items-center space-x-1 bg-blue-200 p-2 rounded-md">
        <MessageCircle size={16} />
        <span>23 Comments</span>
      </button>
    </div>
    <input className="w-full p-2 rounded-md mb-2" placeholder="Add a comment..." />
  </div>
);

const ProfileScreen = () => (
  <div className="flex-1 p-4 bg-green-50">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
      <div>
        <h1 className="text-2xl font-bold text-green-800">John Doe</h1>
        <p className="text-green-600">Organic Farmer</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="font-semibold mb-2">My Ideas</h2>
        <p className="text-2xl font-bold">7</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="font-semibold mb-2">Saved Ideas</h2>
        <p className="text-2xl font-bold">12</p>
      </div>
    </div>
    <h2 className="text-xl font-semibold text-green-800 mb-2">Recent Activity</h2>
    <div className="space-y-2">
      {['Commented on "Vertical Farming Technique"', 'Liked "Biodegradable Mulch Film"', 'Submitted "Precision Fertilizer Applicator"'].map((activity) => (
        <div key={activity} className="p-2 bg-white rounded-md shadow">
          {activity}
        </div>
      ))}
    </div>
  </div>
);

const BottomNav = ({ setCurrentScreen }) => (
  <div className="flex justify-around bg-white p-2 border-t">
    <button onClick={() => setCurrentScreen('home')}><Home /></button>
    <button onClick={() => setCurrentScreen('submit')}><Plus /></button>
    <button onClick={() => setCurrentScreen('profile')}><User /></button>
  </div>
);

export default App;
