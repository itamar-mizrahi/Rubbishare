import React, { createContext, useContext, useState } from 'react';
import { Search, Upload, MessageCircle, ThumbsUp, Video, Book, Bell, Settings, Home, User, Plus, Globe } from 'lucide-react';

// Language context
const LanguageContext = createContext();

// Translations
const translations = {
  en: {
    appName: "FarmTech Hub",
    searchPlaceholder: "Search ideas...",
    categories: ["Irrigation", "Crop Management", "Sustainable Practices", "Smart Farming"],
    recentIdeas: "Recent Ideas",
    submitIdea: "Submit New Idea",
    ideaTitle: "Idea Title",
    description: "Description",
    selectCategory: "Select Category",
    uploadImages: "Upload Images",
    submit: "Submit",
    comments: "Comments",
    addComment: "Add a comment...",
    myIdeas: "My Ideas",
    savedIdeas: "Saved Ideas",
    recentActivity: "Recent Activity",
  },
  he: {
    appName: "פארמטק האב",
    searchPlaceholder: "חפש רעיונות...",
    categories: ["השקיה", "ניהול יבולים", "שיטות בנות-קיימא", "חקלאות חכמה"],
    recentIdeas: "רעיונות אחרונים",
    submitIdea: "הגש רעיון חדש",
    ideaTitle: "כותרת הרעיון",
    description: "תיאור",
    selectCategory: "בחר קטגוריה",
    uploadImages: "העלה תמונות",
    submit: "שלח",
    comments: "תגובות",
    addComment: "הוסף תגובה...",
    myIdeas: "הרעיונות שלי",
    savedIdeas: "רעיונות שמורים",
    recentActivity: "פעילות אחרונה",
  }
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'he' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t }}>
      <div className={`flex flex-col h-screen bg-gray-100 ${language === 'he' ? 'rtl' : 'ltr'}`}>
        <button onClick={toggleLanguage} className="absolute top-2 right-2 p-2 bg-green-500 text-white rounded-full">
          <Globe size={20} />
        </button>
        {renderScreen(currentScreen)}
        <BottomNav setCurrentScreen={setCurrentScreen} />
      </div>
    </LanguageContext.Provider>
  );
};

const renderScreen = (currentScreen) => {
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

const HomeScreen = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex-1 p-4 bg-green-50">
      <h1 className="text-2xl font-bold text-green-800 mb-4">{t.appName}</h1>
      <div className="flex items-center mb-4 bg-white rounded-full shadow-md">
        <Search className="ml-3 text-gray-400" />
        <input className="w-full p-2 rounded-full" placeholder={t.searchPlaceholder} />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {t.categories.map((category) => (
          <button key={category} className="p-2 bg-green-200 rounded-md text-green-800">
            {category}
          </button>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-green-800 mb-2">{t.recentIdeas}</h2>
      <div className="space-y-2">
        {['AI-powered pest detection', 'Solar-powered irrigation system', 'Drone crop monitoring'].map((idea) => (
          <div key={idea} className="p-2 bg-white rounded-md shadow">
            {idea}
          </div>
        ))}
      </div>
    </div>
  );
};

const SubmitIdeaScreen = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex-1 p-4 bg-green-50">
      <h1 className="text-2xl font-bold text-green-800 mb-4">{t.submitIdea}</h1>
      <form className="space-y-4">
        <input className="w-full p-2 rounded-md" placeholder={t.ideaTitle} />
        <textarea className="w-full p-2 rounded-md" placeholder={t.description} rows="4" />
        <select className="w-full p-2 rounded-md">
          <option>{t.selectCategory}</option>
          {t.categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <div className="flex items-center space-x-2">
          <Upload />
          <span>{t.uploadImages}</span>
        </div>
        <button className="w-full p-2 bg-green-600 text-white rounded-md">{t.submit}</button>
      </form>
    </div>
  );
};

const IdeaDetailsScreen = () => {
  const { t } = useContext(LanguageContext);
  return (
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
          <span>23 {t.comments}</span>
        </button>
      </div>
      <input className="w-full p-2 rounded-md mb-2" placeholder={t.addComment} />
    </div>
  );
};

const ProfileScreen = () => {
  const { t } = useContext(LanguageContext);
  return (
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
          <h2 className="font-semibold mb-2">{t.myIdeas}</h2>
          <p className="text-2xl font-bold">7</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="font-semibold mb-2">{t.savedIdeas}</h2>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-green-800 mb-2">{t.recentActivity}</h2>
      <div className="space-y-2">
        {['Commented on "Vertical Farming Technique"', 'Liked "Biodegradable Mulch Film"', 'Submitted "Precision Fertilizer Applicator"'].map((activity) => (
          <div key={activity} className="p-2 bg-white rounded-md shadow">
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
};

const BottomNav = ({ setCurrentScreen }) => (
  <div className="flex justify-around bg-white p-2 border-t">
    <button onClick={() => setCurrentScreen('home')}><Home /></button>
    <button onClick={() => setCurrentScreen('submit')}><Plus /></button>
    <button onClick={() => setCurrentScreen('profile')}><User /></button>
  </div>
);

export default App;