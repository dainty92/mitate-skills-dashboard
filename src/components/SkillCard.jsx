import CommunicationIcon from '/icons/communication.png';
import EmotionalIntelligenceIcon from '/icons/emotional-intelligence.png';
import CriticalThinkingIcon from '/icons/critical-thinking.png';
import LeadershipIcon from '/icons/leadership.png';
import ConflictResolutionIcon from '/icons/conflict-resolution.png';
import NetworkingIcon from '/icons/networking.png';

// Map each skill name to its corresponding icon
const skillIcons = {
    "Communication": CommunicationIcon,
    "Emotional intelligence": EmotionalIntelligenceIcon,
    "Critical thinking": CriticalThinkingIcon,
    "Leadership & management": LeadershipIcon,
    "Conflict resolution": ConflictResolutionIcon,
    "Networking": NetworkingIcon
};

export default function SkillCard({ skill }) {
    const {
        name,
        points,
        current_level_points,
        next_level_threshold,
        level_name
    } = skill;
    
    const icon = skillIcons[name];

      /**
       * Calculate the progress percentage within the current level.
       * Formula breakdown:
       * - points - current_level_points = total points from previous levels
       * - next_level_threshold - (points - current_level_points) = points needed to complete current level
       * - progressPercent = current progress within this level, in %
       */
    const progressPercent = Math.round((current_level_points / (next_level_threshold - (points - current_level_points))) * 100);

    const totalSegments = 6;

    /**
     * Calculate how many of the 6 segments should be filled.
     * Example: if progressPercent is 66, filledSegments = 4
     */
    const filledSegments = Math.round((progressPercent / 100) * totalSegments);

    return (
    <div className="px-4 py-3 mb-0">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            {/* Icon */}
            <img src={icon} alt={`${name} icon`} className="w-10 h-10 object-contain" />
            
            {/* Skill Info and Progress */}
            <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base font-semibold text-gray-500">
                        {name}
                    </span>
                    <span className="text-sm md:text-base text-gray-700 font-semibold">
                        {level_name} ({points})
                    </span>
                </div>
                
                {/* Segmented progress bar width varied segment widths */}
                <div className="flex gap-1">
                    {Array.from({ length: totalSegments }).map((_, i) => {
                        // Custom widths per segment index
                        let flexBasis = "flex-[3]"; // default (wide)
                        if (i >= 3 && i < 5) flexBasis = "flex-[2]"; // medium
                        if (i === 5) flexBasis = "flex-[1]";         // smallest
                        return (
                        <div key={i} className={`h-2 rounded-sm ${flexBasis} ${i < filledSegments ? "bg-violet-500" : "bg-gray-200"}`}></div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
    );
}
