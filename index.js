const pets = [
    {   id:1,
        name:"Bella", 
        emoji:"🐩", 
        epitaph:"Gone to infinity and beyond."
    },
    {   id:2,
        name:"Rocky",
        emoji:"🦧",
        epitaph:"Off to explore the ultimate unknown."
    },
    {   id:3,
        name:"Luna", 
        emoji:"🐁", 
        epitaph:"In quiet steps, a cherished presence."
    },
    {   id:4,
        name:"Lily", 
        emoji:"🦨", 
        epitaph:"Playing forever in our hearts."
    },
    {   id:5,
        name:"Spike", 
        emoji:"🦔", 
        epitaph:"Mighty paws, gentle heart."
    },
    {   id:6,
        name:"Daisy", 
        emoji:"🦓", 
        epitaph:"Galloping in orchard dreams."
    },
    {   id:7,
        name:"Gizmo", 
        emoji:"🦛", 
        epitaph:"Wise and forever watching over us."
    },
    {   id:8,
        name:"Ziggy", 
        emoji:"🦎", 
        epitaph:"Camouflaged in our memories."
    },
    {   id:9,
        name:"Coco", 
        emoji:"🐤", 
        epitaph:"Flying high, chirping fond memories."
    },
    {   id:10,
        name:"Pippin", 
        emoji:"🐒", 
        epitaph:"Small but leaving a big coconut-sized gap."
    },
    {   id:11,
        name:"Mochi", 
        emoji:"🦥", 
        epitaph:"Slowly sliding into our fondest thoughts."
    },
    {   id:12,
        name:"Whimsy", 
        emoji:"🐢", 
        epitaph:"Slowly treasured, deeply missed."
    },
    {   id:13,
        name:"Nimbus", 
        emoji:"🐳", 
        epitaph:"Swimming in a sea of memories."
    },
    {   id:14,
        name:"Puffle", 
        emoji:"🐡", 
        epitaph:"Gone but not forgotten, a shimmering spirit."
    },
    {   id:15,
        name:"Sprinkle", 
        emoji:"🐦", 
        epitaph:"A fluttering friend, their flight a whispered memory"
    },
    {   id:16,
        name:"Wisp", 
        emoji:"🦤", 
        epitaph:"Their chirps and calls, a symphony echoing in our souls."
    },
    {   id:17,
        name:"Tinker", 
        emoji:"🐈", 
        epitaph:"Their purr, a melody forever in our hearts."
    },
    {   id:18,
        name:"Squiggle", 
        emoji:"🐖", 
        epitaph:"Their antics and playfulness, a treasure in our hearts."
    },
    {   id:19,
        name:"Glimmer", 
        emoji:"🦜", 
        epitaph:"Their grace in flight, a legacy written in the clouds."
    },
    {   id:20,
        name:"Marshmallow", 
        emoji:"🐄", 
        epitaph:"Hooves that danced upon the earth, now stilled but not forgotten."
    },
    {   id:21,
        name:"Bumble", 
        emoji:"🦏", 
        epitaph:"A creature of strength and grace, forever remembered."
    },
    {   id:22,
        name:"Noodles", 
        emoji:"🪼", 
        epitaph:"From the seas they came, to the seas they return."
    },
    {   id:23,
        name:"Sundae", 
        emoji:"🐎", 
        epitaph:"In the prairies of remembrance, their spirit gallops free."
    },
    {   id:24,
        name:"Peanut", 
        emoji:"🐘", 
        epitaph:"Their tusks and trunk, a legacy carved in memory's stone."
    },
    {   id:25,
        name:"Taffy", 
        emoji:"🦑", 
        epitaph:"Whisked away by currents, leaving a lasting ripple."
    },
    {   id:26,
        name:"Twizzle", 
        emoji:"🐿️", 
        epitaph:"Their scurrying paws, a dance of remembrance."
    },
    {   id:27,
        name:"Dazzle", 
        emoji:"🦚", 
        epitaph:"A creature of beauty and grace, forever remembered."
    },
    {   id:28,
        name:"Shadow", 
        emoji:"🐍", 
        epitaph:"In the reptilian realm, their spirit slithers eternally."
    },
    {   id:29,
        name:"Speedy", 
        emoji:"🐌", 
        epitaph:"Slow and steady, now at peace."
    },
    {   id:30,
        name:"Rose", 
        emoji:"🦩", 
        epitaph:"A bird of joy, now a part of nature's symphony."
    },
    {   id:31,
        name:"Pepper", 
        emoji:"🦇", 
        epitaph:"Silent wings, eternal night."
    },
    {   id:32,
        name:"Nala", 
        emoji:"🐅", 
        epitaph:"A creature of strength and grace, forever remembered."
    },
    {   id:33,
        name:"Willow", 
        emoji:"🦋", 
        epitaph:"Wings folded, but spirit soaring."
    },
    {   id:34,
        name:"Bandit", 
        emoji:"🐕", 
        epitaph:"A furry friend, forever cherished in our tales."
    },
    {   id:35,
        name:"Snowball", 
        emoji:"🐏", 
        epitaph:"In the meadows of memory, their spirit frolics."
    },
    {   id:36,
        name:"Bumble", 
        emoji:"🐝", 
        epitaph:"Amongst the hive's hum, their legacy sweetly buzzes."
    },
    {   id:37,
        name:"Lucky", 
        emoji:"🦡", 
        epitaph:"A majestic creature, forever free in the wilderness."
    },
    {   id:38,
        name:"Scout", 
        emoji:"🦦", 
        epitaph:"In the embrace of the ocean, their legacy endures."
    },
    {   id:39,
        name:"Bruce", 
        emoji:"🦈", 
        epitaph:"In tranquil waters lies their eternal journey."
    },
    {   id:40,
        name:"Misty", 
        emoji:"🦭", 
        epitaph:"From the depths they rose, now embraced by the sea."
    },
    {   id:41,
        name:"Gingersnap", 
        emoji:"🐊", 
        epitaph:"A reptilian guardian, now enshrined in nature's embrace."
    },
    {   id:42,
        name:"Shadow", 
        emoji:"🐆", 
        epitaph:"A creature of the forests, now one with the ancient trees."
    },
    {   id:43,
        name:"Hercules", 
        emoji:"🦞", 
        epitaph:"Amongst seagrass and coral, they found their final repose."
    },
    {   id:44,
        name:"Cinnamon", 
        emoji:"🦒", 
        epitaph:"From the plains they roamed, leaving footprints in our hearts."
    },
    {   id:45,
        name:"Stardust", 
        emoji:"🦉", 
        epitaph:"From nest to eternity, their beauty in every feather."
    },
    {   id:46,
        name:"Sammy", 
        emoji:"🦫", 
        epitaph:"In the wilderness' silence, their call echoes endlessly."
    },
    {   id:47,
        name:"Bubbles", 
        emoji:"🐬", 
        epitaph:"Elegantly swimming in memories, a timeless tribute."
    },
    {   id:48,
        name:"Rex", 
        emoji:"🦖", 
        epitaph:"Roamed the ancient earth, forever etched in fossilized time."
    },
    {   id:49,
        name:"Biscuit", 
        emoji:"🦙", 
        epitaph:"Graceful steps, eternal presence."
    },
    {   id:50,
        name:"Ember", 
        emoji:"🦘", 
        epitaph:"Boundless spirit, now at rest."
    }
]

const petContainer = document.querySelector("#pet-container")

let isAlive = true
let count = 0

function render(){
    
    if (isAlive === true && count < pets.length){
        const div = document.createElement("div");
        div.className = "pet-box";

        const petScreen = document.createElement("div");
        petScreen.className = "pet-screen";
        div.appendChild(petScreen)

        const petName = document.createElement("div")
        petName.className = "pet-name";
        petScreen.appendChild(petName)
        
        const name = document.createElement("p");
        name.textContent = pets[count].name;
        petName.appendChild(name);

        const petEmoji = document.createElement("div")
        petEmoji.className = "pet-emoji";
        petScreen.appendChild(petEmoji)

        const emoji = document.createElement("p");
        emoji.textContent = pets[count].emoji;
        petEmoji.appendChild(emoji);

        const hungerContainer = document.createElement("div")
        hungerContainer.className = "hunger-container"
        petScreen.appendChild(hungerContainer)

        const hungerText = document.createElement("p")
        hungerText.className = "hunger-text";
        hungerText.textContent = "Hunger:";
        hungerContainer.appendChild(hungerText)

        const hunger = document.createElement("div")
        hunger.className = "hunger";
        hungerContainer.appendChild(hunger)

        const hungerProgress = document.createElement("div")
        hungerProgress.className = "hunger-progress";
        hunger.appendChild(hungerProgress)

        const loveContainer = document.createElement("div")
        loveContainer.className = "love-container"
        petScreen.appendChild(loveContainer)

        const loveText = document.createElement("p")
        loveText.className = "love-text";
        loveText.textContent = "Love:";
        loveContainer.appendChild(loveText)

        const love = document.createElement("div")
        love.className = "love";
        loveContainer.appendChild(love)

        const loveProgress = document.createElement("div")
        loveProgress.className = "love-progress";
        love.appendChild(loveProgress)

        const petQuote = document.createElement("div")
        petQuote.className = "pet-quote";
        petScreen.appendChild(petQuote)

        const epitaph = document.createElement("p");
        epitaph.textContent = pets[count].epitaph;
        petQuote.appendChild(epitaph);

        const feedMe = document.createElement("button")
        feedMe.textContent = "Feed Me 🥬"
        feedMe.className = "feed-me";
        div.appendChild(feedMe)

        petEmoji.addEventListener("click", function(){
            loveProgress.style.width = "100%"
            isLoved = 100
        })

        feedMe.addEventListener("click", function(){
            hungerProgress.style.width = "0%"
            isHungry = 0
        })

        let isHungry = 0
        let isLoved = 100

        setInterval(function (){
        
            if(isHungry < 100 && isLoved > 0){
                isHungry += 1
                isLoved -= 1
                hungerProgress.style.width = `${isHungry}%`
                loveProgress.style.width = `${isLoved}%`
            } else {
                petQuote.style.display = "block"
                hungerContainer.style.display = "none"
                loveContainer.style.display = "none"
                feedMe.textContent = "RIP 🪦"
                div.style.backgroundColor = "gray"
                petScreen.style.backgroundColor = "black"
                name.style.color = "white"

                isAlive = false
            }
        }, 1000)
        
        petContainer.appendChild(div);

        count++
    }
}

for (let i=0; i < pets.length; i++){
   setTimeout(render, i*30000, i)
}