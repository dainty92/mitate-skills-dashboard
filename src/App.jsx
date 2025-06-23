import { useEffect, useState } from 'react';
import SkillList from './components/SkillList';
import skillData from './data/skills.json';
import Header from './components/Header';

function App() {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    if (skillData.success) {
      setSkills(skillData.data);
    }
  }, []);
  
  return (
  <main className="font-ibm min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="w-full max-w-2xl bg-white border border-gray-200 md:rounded-2xl rounded-none shadow-md">
      <Header />
      <SkillList skills={skills} />
    </div>
  </main>
  );
}

export default App;
