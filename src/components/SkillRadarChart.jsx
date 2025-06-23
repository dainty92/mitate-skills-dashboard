import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { skillIcons } from '../data/chartData';

export default function SkillRadarChart({ data }) {
    return (
    <div className="sm:w-full sm:h-[500px] mb-6 sm:flex sm:justify-center w-80 h-[270px] -mx-7 sm:-mx-0">
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid radialLines={false} stroke="#e0e0e7" strokeWidth={3} />
                
                {/* Current Level Points */}
                <Radar name="Current" dataKey="points" stroke="#4a32e5" strokeWidth={4} fill="#4a32e5" fillOpacity={0.3} />

                {/* Target Points */}
                <Radar name="Target" dataKey="target" stroke="#e6d547" strokeWidth={4} fill="#e6d547" fillOpacity={0.3} />
                
                <PolarAngleAxis dataKey="skill" tick={({ payload, x, y, textAnchor }) => {
                    const icon = skillIcons[payload.value];
                    return (
                    <image href={icon} x={x - 18} y={y - 18} width={40} height={40} textAnchor={textAnchor} />
                    );
                }}
                />
            </RadarChart>
        </ResponsiveContainer>
    </div>
    );
}
