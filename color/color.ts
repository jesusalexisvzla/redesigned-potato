function randomIntElem(theArray: number[]): number {
        let randomIndex = Math.floor(Math.random()*theArray.length);    
        return theArray[randomIndex]; 
}
 
let positions: number[] = [103, 458, 472, 458]; 
let randomPosition: number = randomIntElem(positions);

function randomStrElem(theArray: string[]): string {
        let randomIndex = Math.floor(Math.random()*theArray.length);    
        return theArray[randomIndex]; 
}
 
let colors: string[] = ['violet', 'indigo', 'blue', 'green']; 
let randomColor: string = randomStrElem(colors);

function randomElem(theArray: any[]): any {
        let randomIndex = Math.floor(Math.random()*theArray.length);    
        return theArray[randomIndex]; 
}
 
let positions = [103, 458, 472, 458]; 
let randomPosition = randomElem(positions);
 
let colors = ['violet', 'indigo', 'blue', 'green'];
let randomColor = randomElem(colors);

console.log(randomColor);