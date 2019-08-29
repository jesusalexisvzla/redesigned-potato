interface Enemy {
        readonly size: number,    
        health: number,    
        range: number,    
        readonly damage: number }
 
let tank: Enemy = {
        size: 50,    
        health: 100,    
        range: 60,    
        damage: 12 }
 
 
// This is Okay tank.health = 95;
 
// Error because 'damage' is read-only. tank.damage = 10;

interface EnemyHit {
        (name: Enemy, damageDone: number): number; }
 
let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number) {
        tankName.health -= damageDone;    
        return tankName.health; }