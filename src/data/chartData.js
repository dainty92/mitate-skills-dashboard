export const skillIcons = {
    "Communication": "/icons/communication.png",
    "Emotional intelligence": "/icons/emotional-intelligence.png",
    "Critical thinking": "/icons/critical-thinking.png",
    "Leadership & management": "/icons/leadership.png",
    "Conflict resolution": "/icons/conflict-resolution.png",
    "Networking": "/icons/networking.png"
};

export function transformRadarData(skills) {
    return skills.map(skill => ({
        skill: skill.name,
        points: skill.points,
        target: skill.next_level_threshold
    }));
}
