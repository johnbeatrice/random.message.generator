const greeting = ['Good morning', 'Hello there', 'Nice day we\'re having',];
const personAddressed = ['stranger.', 'friend.', 'boss.'];
const ending = ['Another day another dollar!', 'Wonder what\'ll happen today?', 'Nice to have some sun after all that rain.'];

const message = ()=>{
    let i = Math.floor(Math.random() * 3)
    let j = Math.floor(Math.random() * 3)
    let g = Math.floor(Math.random() * 3)
    return `${greeting[i]} ${personAddressed[j]} ${ending[g]}`
} 


console.log(message())