const startQuest = document.getElementById('startQuest');
const gameInstructions = document.getElementById('gameInstructions');
const optionOne = document.getElementById('optionOne');
const optionTwo = document.getElementById('optionTwo');
const optionThree = document.getElementById('optionThree');
const optionFour = document.getElementById('optionFour');

const elementOne = document.getElementById('optionOne');
const elementTwo = document.getElementById('optionTwo');
const elementThree = document.getElementById('optionThree');
const elementFour = document.getElementById('optionFour');


function introText() {
    
    document.getElementById('gameInstructions').textContent =
        "You wake up somewhere dark. It smells like goblin piss. The floor is wet and it feels cold to touch, like stone. There is a large door opposite you. and a large candle on a stool next to you. The only light comes from a grate in the ceiling 30 feet above you. There is a wall behind you, slimy and mossy. You feel very dizzy, your head is pounding. Your clothes are damp and greasy. Your right foot is swollen, bloody, and probably broken... What do you do?";

    document.getElementById('optionOne').textContent = "Try and stand";
    document.getElementById('optionTwo').textContent = "Shout for help";
    document.getElementById('optionThree').textContent = "Crawl to the door";
    document.getElementById('optionFour').textContent = "Search pockets";
};


function standUp() {
    document.getElementById('gameInstructions').textContent =
        "You try to stand. As you do the pain & dizziness becomes overwhelming. The room spins and fades to black as you pass out. You fall to the floor and smash your head open on the cold stone. It doesn't take long for you to bleed to death... Sorry YOU LOSE. Refresh the page to try again!";

        elementOne.remove();
        elementTwo.remove();
        elementThree.remove();
        elementFour.remove();
        startQuest.remove();
        
};

function shoutHelp() {
    document.getElementById('gameInstructions').textContent =
        "You shout & scream for help. Suddenly, you hear approaching footsteps. It sounds like lots of feet. You really should have kept quiet. Those footsteps belong to five vicous, bloodthirsty goblins! They burst through the door and bludgeon you to death... Sorry YOU LOSE. Refresh the page to try again!";

        elementOne.remove();
        elementTwo.remove();
        elementThree.remove();
        elementFour.remove();
        startQuest.remove();
};

function tryDoor() {
    document.getElementById('gameInstructions').textContent =
        "You drag you bloodied and wounded body across the floor towards the door. In the gloom of the dungeon, struggling to focus through the pain, you fail to notice the giant hole in the middle of the floor. You try to grab anything to prevent yourself from falling in but there is nothing but cold, wet stone. You plummet down, down, down, down... Sorry YOU LOSE. Refresh the page to try again!";

        elementOne.remove();
        elementTwo.remove();
        elementThree.remove();
        elementFour.remove();
        startQuest.remove();
};

function searchPockets() {
    document.getElementById('gameInstructions').textContent =
        "You search your pockets for a key to the door. In your left pocket you find the key and a lighter. As you light the candle to help you see the lock, you find out why your clothes feel greasy; they're covered in petrol. The flame from the lighter ignites your clothes, and you burn to death, a human fireball... Sorry YOU LOSE. Refresh the page to try again!";

        elementOne.remove();
        elementTwo.remove();
        elementThree.remove();
        elementFour.remove();
        startQuest.remove();
};



startQuest.addEventListener('click', introText);
optionOne.addEventListener('click', standUp);
optionTwo.addEventListener('click', shoutHelp);
optionThree.addEventListener('click', tryDoor);
optionFour.addEventListener('click', searchPockets);