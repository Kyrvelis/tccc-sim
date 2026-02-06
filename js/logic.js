/** TCCC Simulation Logic */
const Logic = {
    totalBloodVolume: 5000,

    calculateFlowRate: (type, caliber, location) => {
        // Example logic for flow calculation
        let base = type === 'gsw' ? 500 : 800;
        return Math.floor(base * parseFloat(caliber) * (location === 'torso' ? 1.5 : 1.0));
    },

    formatTime: (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    getLethalityStatus: (lost) => {
        if (lost > 2000) return "FATAL";
        if (lost > 1500) return "CLASS IV SHOCK";
        if (lost > 750) return "CLASS II SHOCK";
        return "STABLE";
    }
};
