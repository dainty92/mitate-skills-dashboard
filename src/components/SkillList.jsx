import { useState } from 'react';
import SkillCard from './SkillCard';
import SkillRadarChart from './SkillRadarChart';
import { transformRadarData } from '../data/chartData';

export default function SkillList({ skills }) {
    const radarData = transformRadarData(skills);
    const [isHidden, setIsHidden] = useState(false);
    
    return (
    <div className="max-w-2xl mx-auto md:px-4 px-0 md:py-6 py-4">
        {/* Legend and Hide button */}
        <div className="flex flex-wrap items-center justify-between md:mb-0 mb-6 text-sm px-4">
            {/* Hide buttons for mobile (icon + text) */}
            <div className="flex justify-between items-center sm:hidden w-full text-gray-500 font-semibold mb-8 text-base">
                <button onClick={() => setIsHidden(!isHidden)}>Hide</button>
                <button onClick={() => setIsHidden(!isHidden)}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                    <span className="w-6 h-2 rounded-full bg-violet-100 border-2 border-violet-500"></span>
                    <span className="font-semibold text-sm md:text-base">Current level</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-6 h-2 rounded-full bg-yellow-100 border-2 border-yellow-400"></span>
                    <span className="font-semibold text-sm md:text-base">Target level</span>
                </div>
            </div>
            
            {/* Hide button for desktop */}
            <button className="hidden sm:block text-sm md:text-base text-gray-500 font-semibold hover:underline mt-3 sm:mt-0" onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? 'Show' : 'Hide'}
            </button>
        </div>
        
        <div>
            <SkillRadarChart data={radarData} />
        </div>

        {/* Skill Cards */}
        {!isHidden && (
            <div>
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        )}
    </div>
    );
}
