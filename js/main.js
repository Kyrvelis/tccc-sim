/** Main Game Controller */
let state = {
    interval: null,
    totalLost: 0,
    flowRate: 0,
    seconds: 0
};

function updateSim() {
    const type = document.getElementById('injury-type').value;
    const caliber = document.getElementById('caliber').value;
    const loc = document.getElementById('location').value;
    
    state.flowRate = Logic.calculateFlowRate(type, caliber, loc);
    UI.updateConfigStats(state.flowRate);
}

function startScenario() {
    UI.showScreen('simulation-screen');
    state.totalLost = 0;
    state.seconds = 0;

    state.interval = setInterval(() => {
        state.seconds++;
        // Blood lost per second
        state.totalLost += Math.floor(state.flowRate / 60);
        
        document.getElementById('time-elapsed').innerText = Logic.formatTime(state.seconds);
        document.getElementById('lost-amount').innerText = state.totalLost;
        UI.updateBloodBar(state.totalLost);

        if (state.totalLost >= Logic.totalBloodVolume) {
            endScenario("Casualty Exsanguinated.");
        }
    }, 1000);
}

function endScenario(msg = "Simulation Paused") {
    clearInterval(state.interval);
    alert(msg);
}

// Initial Call
window.showGenerator = () => UI.showScreen('generator');
