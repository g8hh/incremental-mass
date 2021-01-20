function E(x){return new ExpantaNum(x)};
function ex(x){
    let nx = new E(0);
    nx.array = x.array;
    nx.sign = x.sign;
    nx.layer = x.layer;
    return nx;
}

function calc(dt) {
    if (player.mass.add(FUNCS.gainMass().mul(dt/1000)).gte(FUNCS.getMaxMass())) {
        player.mass = FUNCS.getMaxMass()
    } else player.mass = player.mass.add(FUNCS.gainMass().mul(dt/1000))
    for (let i = 0; i < Object.keys(FUNCS.unlockes).length; i++) if (FUNCS.unlockes[Object.keys(FUNCS.unlockes)[i]].can()) {
        FUNCS.getUnlock(Object.keys(FUNCS.unlockes)[i])
        if (player.unlocks < i+1) player.unlocks = i+1
    }
    for (let r = 1; r <= ACHIEVEMENTS.rows; r++) for (let c = 1; c <= ACHIEVEMENTS.cols; c++) if (ACHIEVEMENTS[r*10+c] != undefined) if (ACHIEVEMENTS[r*10+c].can()) FUNCS.unlockAch(r*10+c)
    if (player.unlocked.includes('automators')) player.gears = player.gears.add(FUNCS.getGears().mul(dt/1000))
    if (player.automators.mass_upgs && player.upgs.gears.includes(11)) for (let x = 1; x <= UPGS.mass.cols; x++) if (UPGS.mass[x].unl()) {
        if (player.upgs.gears.includes(21) && UPGS.mass[x].bulk != undefined) {
            UPGS.bulk('mass', x)
            continue
        }
        UPGS.buy('mass', x)
    }
    if (player.automators.rank && player.upgs.gears.includes(12)) FUNCS.rank.reset()
    if (player.automators.tier && player.upgs.gears.includes(13)) FUNCS.tier.reset()
}

function wipe() {
    player = {
        mass: E(0),
        rank: E(1),
        tier: E(1),
        upgs: {
            mass: {},
            gears: [],
            rage_powers: [],
        },
        tabs: [0],
        unlocked: [],
        achs: [],
        automators: {
            mass_upgs: false,
            rank: false,
            tier: false,
        },
        gears: E(0),
        rage_powers: E(0),
        unlocks: 0,
    }
}

function save(){
    if (localStorage.getItem("incrementalMassSave") == '') wipe()
    localStorage.setItem("incrementalMassSave",btoa(JSON.stringify(player)))
}

function load(x){
    if(typeof x == "string" & x != ''){
        loadPlayer(JSON.parse(atob(x)))
    } else {
        wipe()
    }
}

function exporty() {
    save();
    let file = new Blob([btoa(JSON.stringify(player))], {type: "text/plain"})
    window.URL = window.URL || window.webkitURL;
    let a = document.createElement("a")
    a.href = window.URL.createObjectURL(file)
    a.download = "Incremental Mass Save.txt"
    a.click()
}

function importy() {
    let loadgame = prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")
    if (loadgame != null) {
        load(loadgame)
    }
}

function loadPlayer(load) {
    player.mass = ex(load.mass)
    player.rank = ex(load.rank)
    player.tier = ex(load.tier)

    let p_upg = player.upgs, l_upg = load.upgs;
    for (let i = 0; i < Object.keys(l_upg.mass).length; i++) p_upg.mass[Object.keys(l_upg.mass)[i]] = ex(l_upg.mass[Object.keys(l_upg.mass)[i]])
    if (l_upg.gears != undefined) p_upg.gears = l_upg.gears
    if (l_upg.rage_powers != undefined) p_upg.rage_powers = l_upg.rage_powers

    if (load.automators != undefined) {
        let p_auto = player.automators, l_auto = load.automators;
        p_auto.mass_upgs = l_auto.mass_upgs
        p_auto.rank = l_auto.rank
        p_auto.tier = l_auto.tier
    }

    if (load.unlocked != undefined) player.unlocked = load.unlocked
    if (load.achs != undefined) player.achs = load.achs
    if (load.gears != undefined) player.gears = ex(load.gears)
    if (load.rage_powers != undefined) player.rage_powers = ex(load.rage_powers)
    if (load.unlocks != undefined) player.unlocks = load.unlocks
}

function loadGame() {
    wipe()
    load(localStorage.getItem("incrementalMassSave"))
    loadVue()
    setInterval(save,1000)
}