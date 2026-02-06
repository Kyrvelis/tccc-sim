/** UI & View Management */
const UI = {
    updateBloodBar: (lost) => {
        const percent = (lost / Logic.totalBloodVolume) * 100;
        const bar = document.getElementById('blood-loss-bar');
        bar.style.width = `${Math.min(percent, 100)}%`;
        bar.innerText = `${lost} mL Lost`;
        
        if (percent > 40) bar.style.backgroundColor = "#ff0000";
    },

    showScreen: (screenId) => {
        const screens = ['main-menu', 'generator', 'simulation-screen'];
        screens.forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    },

    updateConfigStats: (flow) => {
        document.getElementById('flow-rate').innerText = flow;
        document.getElementById('total-loss').innerText = flow * 5; // 5 min projection
    }
};
