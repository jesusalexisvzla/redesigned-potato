var tank = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
};
var tankHit = function (tankName, damageDone) {
    tankName.health -= damageDone;
    return tankName.health;
};
