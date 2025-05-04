// List of prompts by category
const promptCategories = {
    family: [
"Most likely to win a game show",
"Most likely to own the most pets",
"Most likely to become a teacher",
"Most likely to trip in public",
"Most likely to be president",
"Most likely to cry at a movie",
"Most likely to forget their own birthday",
"Most likely to join a book club",
"Most likely to become a viral meme",
"Most likely to bring snacks everywhere",
"Most likely to get locked out of their house",
"Most likely to still use their baby blanket",
"Most likely to sing in the shower",
"Most likely to volunteer for something random",
"Most likely to win a talent show",
"Most likely to make everyone laugh",
"Most likely to eat dessert first",
"Most likely to become a chef",
"Most likely to fall asleep in class",
"Most likely to give the best advice",
"Most likely to go on a reality show",
"Most likely to be everyone’s favorite grandparent",
"Most likely to build a treehouse",
"Most likely to start a band",
"Most likely to adopt 12 dogs",
"Most likely to win hide and seek",
"Most likely to eat the weirdest food",
"Most likely to become a professional athlete",
"Most likely to get a perfect attendance award",
"Most likely to forget where they parked",
"Most likely to win a dance-off",
"Most likely to host a talk show",
"Most likely to cry during a wedding",
"Most likely to plan the best surprise party",
"Most likely to become a YouTuber for kids",
"Most likely to wear socks with sandals",
"Most likely to be found at Disneyland",
"Most likely to take a selfie with a stranger",
"Most likely to get sunburnt on a cloudy day",
"Most likely to break a world record",
"Most likely to befriend a wild animal",
"Most likely to laugh at the wrong time",
"Most likely to burn toast",
"Most likely to knit their own clothes",
"Most likely to be the next Bob Ross",
"Most likely to have the neatest handwriting",
"Most likely to open a bakery",
"Most likely to invent something weird and useful",
"Most likely to be an undercover superhero",
"Most likely to go viral for something wholesome",
"Most likely to get lost at IKEA",
"Most likely to know a random fun fact about everything",
"Most likely to still trick-or-treat at 30",
"Most likely to win “best dressed” in high school",
"Most likely to be the best babysitter",
"Most likely to get excited over small things",
"Most likely to collect something odd",
"Most likely to have a themed birthday party",
"Most likely to win at charades",
"Most likely to spend 3 hours at Target",
"Most likely to decorate too early for the holidays",
"Most likely to be a Disney adult",
"Most likely to bring a first-aid kit everywhere",
"Most likely to sleep through an earthquake",
"Most likely to be early to everything",
"Most likely to rewatch the same movie 100 times",
"Most likely to accidentally send a message to the wrong person",
"Most likely to befriend the neighbor",
"Most likely to become a librarian",
"Most likely to wear pajamas in public",
"Most likely to win “most wholesome”",
"Most likely to throw the best themed party",
"Most likely to get emotional at a commercial",
"Most likely to keep a diary",
"Most likely to carry way too much in their backpack",
"Most likely to lose their phone at home",
"Most likely to get an “Employee of the Month” award",
"Most likely to send postcards from vacation",
"Most likely to get caught talking to themselves",
"Most likely to laugh until they cry",
"Most likely to win a coloring contest",
"Most likely to own a weird pet (like a hedgehog)",
"Most likely to wear holiday-themed outfits",
"Most likely to be a camp counselor",
"Most likely to build the best blanket fort",
"Most likely to stay up too late reading",
"Most likely to bake cookies for the group",
"Most likely to sing karaoke with no shame",
"Most likely to win a scavenger hunt",
"Most likely to dress up their pet",
"Most likely to become a cartoon voice actor",
"Most likely to dance when no one’s watching",
"Most likely to bring their own utensils",
"Most likely to keep a secret",
"Most likely to make a new friend on vacation",
"Most likely to journal every day",
"Most likely to start their own Etsy store",
"Most likely to smile at strangers",
"Most likely to win a board game night",
"Most likely to remember everyone’s birthdays"
    ],
    spicy: [
"Most likely to have a sneaky link on speed dial",
"Most likely to get freaky on the first date",
"Most likely to have a secret kink no one expects",
"Most likely to have a burner account for thirst traps",
"Most likely to fake it and say “it was great”",
"Most likely to have a sex playlist — and be proud of it",
"Most likely to send nudes for validation, not vibes",
"Most likely to flirt with the bartender just for free drinks",
"Most likely to watch something spicy on the train",
"Most likely to say “choke me” mid-conversation",
"Most likely to have hooked up in a public place",
"Most likely to have a thing for authority figures",
"Most likely to try something once and act like an expert",
"Most likely to say “I don’t catch feelings” — then catch feelings",
"Most likely to say “it doesn’t count if it’s overseas”",
"Most likely to have a toy collection",
"Most likely to roleplay and take it way too seriously",
"Most likely to send a risky text at 2:00 a.m.",
"Most likely to have a FWB who thinks they’re in love",
"Most likely to get exposed for liking weird stuff",
"Most likely to ghost someone after hooking up",
"Most likely to be submissive but pretend they’re not",
"Most likely to have a body count that shocks people",
"Most likely to make someone cry from one kiss",
"Most likely to be called “mommy” or “daddy” unironically",
"Most likely to flirt just to win an argument",
"Most likely to turn sexting into a novella",
"Most likely to use handcuffs without prior training",
"Most likely to hook up with someone from this group",
"Most likely to own lingerie “for themselves”",
"Most likely to get turned on by something weirdly specific",
"Most likely to bring up a past hookup mid-laugh",
"Most likely to pretend they’re not kinky (but absolutely are)",
"Most likely to sleep with someone based on vibes only",
"Most likely to flirt with someone’s sibling",
"Most likely to send a voice note that’s not safe for work",
"Most likely to make out just to prove a point",
"Most likely to initiate something and then pretend to be shy",
"Most likely to say “just one more time” — and not mean it",
"Most likely to get it on during a vacation",
"Most likely to flirt via insult",
"Most likely to have a dream about someone here — and not say who",
"Most likely to experiment with no explanation",
"Most likely to brag about their skills — then prove it",
"Most likely to dirty talk and start laughing halfway through",
"Most likely to act innocent but absolutely isn’t",
"Most likely to wear something risky “by accident”",
"Most likely to do it somewhere they absolutely shouldn’t have",
"Most likely to get caught in the act",
"Most likely to schedule hookups",
"Most likely to flirt with danger and someone’s partner",
"Most likely to have an “if we’re single by 30” pact",
"Most likely to get a wild tattoo in a hot moment",
"Most likely to get undressed before even getting inside",
"Most likely to sext with grammar and punctuation",
"Most likely to bite someone and mean it",
"Most likely to say “oops” after something very much not accidental",
"Most likely to initiate a group kiss",
"Most likely to go on a date just for the hookup",
"Most likely to do it out of boredom",
"Most likely to fall in love after a one-night stand",
"Most likely to have a hookup playlist — and it slaps",
"Most likely to get freaky in a costume",
"Most likely to have tried food in the bedroom",
"Most likely to be too loud — and not care",
"Most likely to send a risky meme instead of words",
"Most likely to go down and never come back up",
"Most likely to get kicked out of somewhere for PDA",
"Most likely to use the phrase “for science” in bed",
"Most likely to fake shyness and then do something filthy",
"Most likely to be someone’s guilty pleasure",
"Most likely to get a spicy compliment and say “prove it”",
"Most likely to leave someone speechless — literally",
"Most likely to turn an argument into foreplay",
"Most likely to flirt in a group setting just for the drama",
"Most likely to be into someone completely unexpected",
"Most likely to get exposed by a partner’s review",
"Most likely to have a hookup story they legally can’t tell",
"Most likely to be mistaken for someone famous in bed",
"Most likely to be into eye contact — aggressively",
"Most likely to post a thirst trap and delete it “by accident”",
"Most likely to turn a hookup into a situationship",
"Most likely to get spicy in a car",
"Most likely to fake a kink to impress someone",
"Most likely to dirty talk in another language",
"Most likely to write fanfiction based on real experiences",
"Most likely to sext someone they barely know",
"Most likely to bring toys and not explain them",
"Most likely to surprise someone — in a good way",
"Most likely to get exposed by their search history",
"Most likely to make a hookup playlist and update it weekly",
"Most likely to be late because “something came up”",
"Most likely to send “u up?” as a power move",
"Most likely to flirt mid-argument",
"Most likely to have multiple people thinking they’re “the one”",
"Most likely to give a nickname after one hookup",
"Most likely to be someone’s best and worst experience",
"Most likely to flirt with a friend “just to test the waters”",
"Most likely to cross a line and somehow get away with it"
    ],
    weird: [
"Most likely to nut in 5 seconds and apologize after",
"Most likely to cum and immediately say “that was mid”",
"Most likely to think poop jokes are peak comedy (and be right)",
"Most likely to cum to something they can’t explain",
"Most likely to eat ass without hesitation (or invitation)",
"Most likely to say “oops, wrong hole” and mean it",
"Most likely to do butt stuff and cry after (in a good way?)",
"Most likely to jerk it in a haunted house",
"Most likely to pretend they’re into feet just to try it",
"Most likely to moan like a medieval bard",
"Most likely to finish and say “thank you, sir”",
"Most likely to fart during sex and blame it on the floor",
"Most likely to bring lube and hot sauce to the bedroom",
"Most likely to climax to anime",
"Most likely to do it in a mascot costume",
"Most likely to think farting is flirting",
"Most likely to own a fleshlight with a name",
"Most likely to go raw and say “YOLO”",
"Most likely to think “I could totally survive prison sex”",
"Most likely to roleplay as a raccoon or goblin in bed",
"Most likely to cum hands-free (spiritual level unlocked)",
"Most likely to ask for a “choking tutorial”",
"Most likely to wear socks and a cape — nothing else",
"Most likely to fake a kink just to tell the story later",
"Most likely to poop after a hookup and not flush out of dominance",
"Most likely to DM someone “wanna see my weird rash?”",
"Most likely to hump something non-human and not explain",
"Most likely to nut to a Disney villain",
"Most likely to scream “yeehaw” at climax",
"Most likely to do it for the plot",
"Most likely to own a gag ball… but casually",
"Most likely to cry, fart, and cum in the same 10 seconds",
"Most likely to say “you up?” at 4:44 AM with no shame",
"Most likely to climax in a way that resets the WiFi",
"Most likely to say “did you poop today?” during foreplay",
"Most likely to nut and then immediately talk about taxes",
"Most likely to get pegged and start a podcast about it",
"Most likely to name their dick something absurd like “The Wiggler”",
"Most likely to cum just from being looked at",
"Most likely to nut and whisper “I’m scared”",
"Most likely to turn a threesome into a PowerPoint",
"Most likely to say “Daddy?” during any moment of intimacy",
"Most likely to cum and instantly go full conspiracy theory",
"Most likely to be into armpits unironically",
"Most likely to watch hentai and say “it’s art”",
"Most likely to lick toes just to say they did",
"Most likely to sext using food metaphors only",
"Most likely to moan “bazinga”",
"Most likely to cum while holding eye contact with their reflection",
"Most likely to poop and describe it in vivid detail",
"Most likely to use mayonnaise as lube “in an emergency”",
"Most likely to own a poop knife (look it up… or don’t)",
"Most likely to climax and ask for chicken nuggets",
"Most likely to bring up aliens in bed",
"Most likely to accidentally pee a little during",
"Most likely to finish, laugh, and fall asleep instantly",
"Most likely to have a kink that involves honking noises",
"Most likely to nut and yell “freedom!” like Braveheart",
"Most likely to whisper “do you believe in ghosts?” post-nut",
"Most likely to get off to their own reflection",
"Most likely to roleplay as Shrek in the bedroom",
"Most likely to nut and then immediately bake a pie",
"Most likely to text “I pooped” like it’s breaking news",
"Most likely to cum and say “I need to sit down” while already lying down",
"Most likely to climax while wearing Crocs",
"Most likely to moan in a British accent on purpose",
"Most likely to yell “MOM!” by accident during sex",
"Most likely to call their partner “daddy” and instantly regret it",
"Most likely to cum in 69 seconds exactly",
"Most likely to get turned on by their dentist",
"Most likely to nut while watching a cooking video",
"Most likely to climax and shout “IT’S MORBIN’ TIME”",
"Most likely to roleplay as a Roomba",
"Most likely to climax and thank their ancestors",
"Most likely to poop mid-hookup and just say “my bad”",
"Most likely to moan “yaaaasss”",
"Most likely to use a banana in the bedroom — inappropriately",
"Most likely to use whipped cream and regret it",
"Most likely to fart and pretend it was part of the foreplay",
"Most likely to climax and yell “GAMER MODE!”",
"Most likely to text “I’m horny and also craving chips”",
"Most likely to nut and immediately open TikTok",
"Most likely to scream a random celebrity’s name during",
"Most likely to say “good game” after finishing",
"Most likely to cry-laugh while watching porn",
"Most likely to put their finger somewhere experimental",
"Most likely to masturbate to something philosophical",
"Most likely to go to horny jail — and enjoy it",
"Most likely to scream during climax like a Pokémon",
"Most likely to fart during oral and pretend it was motivational",
"Most likely to say “I’m a little freak” and prove it",
"Most likely to moan to the beat of a TikTok sound",
"Most likely to finish and say “I left the oven on”",
"Most likely to try fisting as a joke and not hate it",
"Most likely to climax and yell “EPIC WIN”",
"Most likely to nut while eating a sandwich",
"Most likely to use the word “moist” way too often",
"Most likely to poop and voice memo the group about it",
"Most likely to fake an orgasm just to end it faster",
"Most likely to get turned on by a weird cartoon"
    ],
    vicious: [
"Most likely to fall off without anyone noticing",
"Most likely to be replaced in the friend group",
"Most likely to lie about something no one cares about",
"Most likely to make a joke and kill the vibe",
"Most likely to turn fun into trauma dumping",
"Most likely to say “I’m just like that” as an excuse for being annoying",
"Most likely to make a breakup about themselves",
"Most likely to call themselves the “mom friend” but create chaos",
"Most likely to air out group drama on their Insta story",
"Most likely to cry if ranked last (again)",
"Most likely to be on their phone the whole time",
"Most likely to bring bad energy and blame Mercury",
"Most likely to cause a scene and love it",
"Most likely to throw you under the bus to be funny",
"Most likely to start a fight and then act confused",
"Most likely to claim they invented sarcasm",
"Most likely to be the main character in a story no one asked for",
"Most likely to “not be mad” but clearly be mad",
"Most likely to get humbled in a group setting",
"Most likely to have a meltdown over being skipped in Uno",
"Most likely to make a TikTok about their “fake friends” — this group",
"Most likely to take “I’m busy” personally",
"Most likely to peak in high school (and know it)",
"Most likely to date someone who looks just like them",
"Most likely to be left out of the group trip “by accident”",
"Most likely to come for your throat when they’re losing",
"Most likely to fake laugh at your success",
"Most likely to bring up something you forgot on purpose",
"Most likely to throw shade and then play dumb",
"Most likely to be dramatic about being called dramatic",
"Most likely to “not care” but check every hour",
"Most likely to have a finsta with just unhinged rants",
"Most likely to correct someone in front of a crush",
"Most likely to drop a bombshell and then leave",
"Most likely to read receipts and not reply for 3–5 business days",
"Most likely to call themselves low-maintenance while being high-drama",
"Most likely to talk trash and forget it’s a small world",
"Most likely to start a podcast no one listens to",
"Most likely to record your breakdown “for the memories”",
"Most likely to ghost but still watch your stories",
"Most likely to text “we need to talk” and go silent",
"Most likely to bring nothing to the table — not even snacks",
"Most likely to quote therapy buzzwords but stay toxic",
"Most likely to pretend to be deep but just likes attention",
"Most likely to sabotage a group project… and still present",
"Most likely to “accidentally” flirt with your date",
"Most likely to brag about being unbothered — while spiraling",
"Most likely to fake a moral high ground",
"Most likely to be bitter about something from 2017",
"Most likely to joke about everything because emotions are scary",
"Most likely to give a backhanded compliment",
"Most likely to start healing just to become more powerful (and petty)",
"Most likely to roast you… and then say “it’s just a game”",
"Most likely to expose your secrets for comedic timing",
"Most likely to have a superiority complex… over nothing",
"Most likely to cry over their own actions",
"Most likely to make things worse by “trying to help”",
"Most likely to guilt trip you for not reading their mind",
"Most likely to crash your plans and still complain",
"Most likely to make the group chat uncomfortable",
"Most likely to think everyone is in love with them",
"Most likely to fall in love with someone who dislikes them",
"Most likely to brag about “cutting toxic people off” (it was them)",
"Most likely to think sarcasm is a personality",
"Most likely to argue with a barista",
"Most likely to be the villain in someone’s self-growth journey",
"Most likely to turn compliments into competition",
"Most likely to bring up your old cringey phase",
"Most likely to fish for compliments by trash-talking themselves",
"Most likely to say “this is why I don’t have friends” — and be right",
"Most likely to rank themselves first, no matter the question",
"Most likely to show up for vibes, not responsibility",
"Most likely to post “cutting off fake energy” quotes unironically",
"Most likely to weaponize a group hug",
"Most likely to drop a truth bomb mid-laugh",
"Most likely to pretend they’re the victim in every story",
"Most likely to overshare then panic",
"Most likely to tweet something vague and messy",
"Most likely to roast your entire life in one sentence",
"Most likely to storm out and come back 5 minutes later",
"Most likely to know everyone’s business and never share theirs",
"Most likely to pretend they’re shy to avoid confrontation",
"Most likely to ruin the vibes… and still think they’re the fun one",
"Most likely to get blocked for “just being honest”",
"Most likely to blame the group when things go wrong",
"Most likely to never forget (or forgive) losing this game",
"Most likely to make things awkward on purpose",
"Most likely to share your Ls like they’re public knowledge",
"Most likely to turn your secret into a punchline",
"Most likely to say “no offense” before something offensive",
"Most likely to get banned from the friend group for 24 hours",
"Most likely to ruin the ending of a movie out of spite",
"Most likely to argue in the comments section of a meme",
"Most likely to clap back mid-compliment",
"Most likely to twist your words — and win",
"Most likely to rank everyone and say “don’t take it personally”",
"Most likely to go full chaos mode… in the name of fun",
"Most likely to screenshot this list and take notes",
"Most likely to say “I hate drama” and then start it"
    ]
};

let selectedPrompt = '';
let attemptsLeft = 3;
let gamePrompts = [];
let currentCategory = '';

document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.getElementById('game-container');
    const initialButtons = document.getElementById('initial-buttons');
    const categoryScreen = document.getElementById('category-screen');
    const orderMasterScreen = document.getElementById('order-master-screen');
    const rankingScreen = document.getElementById('ranking-screen');
    const guessingScreen = document.getElementById('guessing-screen');
    const resultScreen = document.getElementById('result-screen');
    const homeIcon = document.getElementById('home-icon');
    const promptsContainer = document.getElementById('prompts-container');
    const attemptsDisplay = document.getElementById('attempts-left');
    
    // Create and style the current prompt display
    const currentPromptDisplay = document.createElement('p');
    currentPromptDisplay.className = 'game-instruction';
    currentPromptDisplay.style.fontSize = '28px';
    currentPromptDisplay.style.fontWeight = '600';
    currentPromptDisplay.style.margin = '20px 0';
    currentPromptDisplay.style.textAlign = 'center';
    currentPromptDisplay.style.width = '100%';
    
    // Replace the "Select a prompt" text with our styled prompt display
    const instructionText = orderMasterScreen.querySelector('.game-instruction');
    instructionText.parentNode.replaceChild(currentPromptDisplay, instructionText);

    // Hide all screens initially except initial buttons
    function hideAllScreens() {
        [categoryScreen, orderMasterScreen, rankingScreen, guessingScreen, resultScreen].forEach(screen => {
            if (screen) screen.style.display = 'none';
        });
    }

    // Initialize the game
    hideAllScreens();
    if (initialButtons) initialButtons.style.display = 'flex';
    if (homeIcon) homeIcon.style.display = 'none';

    // Handle play button click
    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (gameContainer) {
                gameContainer.classList.add('game-started');
                initialButtons.style.display = 'none';
                categoryScreen.style.display = 'block';
                if (homeIcon) homeIcon.style.display = 'block';
            }
        });
    });

    // Handle category selection
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            currentCategory = this.dataset.category;
            categoryScreen.style.display = 'none';
            orderMasterScreen.style.display = 'block';
            // Select initial prompt from chosen category
            selectedPrompt = promptCategories[currentCategory][Math.floor(Math.random() * promptCategories[currentCategory].length)];
            currentPromptDisplay.textContent = selectedPrompt;
        });
    });

    // Handle home icon click
    if (homeIcon) {
        homeIcon.addEventListener('click', function() {
            if (gameContainer) {
                gameContainer.classList.remove('game-started');
                hideAllScreens();
                initialButtons.style.display = 'flex';
                homeIcon.style.display = 'none';
                attemptsLeft = 3;
                attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
                currentCategory = '';
            }
        });
    }

    // Handle choose prompt button click
    document.getElementById('choose-prompt-btn').addEventListener('click', function() {
        orderMasterScreen.style.display = 'none';
        rankingScreen.style.display = 'block';
    });

    // Handle shuffle button click
    document.getElementById('shuffle-btn').addEventListener('click', function() {
        selectedPrompt = promptCategories[currentCategory][Math.floor(Math.random() * promptCategories[currentCategory].length)];
        currentPromptDisplay.textContent = selectedPrompt;
    });

    // Handle next button click
    document.getElementById('next-btn').addEventListener('click', function() {
        rankingScreen.style.display = 'none';
        guessingScreen.style.display = 'block';
        setupGuessingScreen();
    });

    // Handle play again button click
    document.getElementById('play-again-btn').addEventListener('click', function() {
        resultScreen.style.display = 'none';
        categoryScreen.style.display = 'block';
        attemptsLeft = 3;
        attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
    });

    // Setup the guessing screen with prompts
    function setupGuessingScreen() {
        promptsContainer.innerHTML = '';
        
        // Get all prompts except the selected one
        gamePrompts = promptCategories[currentCategory].filter(prompt => prompt !== selectedPrompt);
        
        // Shuffle the remaining prompts
        for (let i = gamePrompts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gamePrompts[i], gamePrompts[j]] = [gamePrompts[j], gamePrompts[i]];
        }

        // Take first 9 prompts and add the selected prompt
        gamePrompts = [...gamePrompts.slice(0, 9), selectedPrompt];
        
        // Shuffle one more time to randomize the correct answer position
        for (let i = gamePrompts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gamePrompts[i], gamePrompts[j]] = [gamePrompts[j], gamePrompts[i]];
        }

        // Create prompt buttons
        gamePrompts.forEach(prompt => {
            const button = document.createElement('button');
            button.className = 'questionable-btn prompt-btn';
            button.textContent = prompt;
            button.addEventListener('click', function() {
                handlePromptSelection(prompt);
            });
            promptsContainer.appendChild(button);
        });
    }

    // Handle prompt selection
    function handlePromptSelection(selected) {
        const buttons = document.querySelectorAll('.prompt-btn');
        buttons.forEach(button => {
            if (button.textContent === selected) {
                if (selected === selectedPrompt) {
                    button.classList.add('correct');
                    showResult(true);
                } else {
                    button.classList.add('incorrect');
                    attemptsLeft--;
                    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
                    if (attemptsLeft === 0) {
                        showResult(false);
                    }
                }
            }
        });
    }

    // Show result screen
    function showResult(isCorrect) {
        guessingScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        
        const resultTitle = document.getElementById('result-title');
        const resultMessage = document.getElementById('result-message');
        const resultWrapper = resultScreen.querySelector('.game-content-wrapper');
        
        // Remove any existing winner image
        const existingImage = resultWrapper.querySelector('.winner-image');
        if (existingImage) {
            existingImage.remove();
        }
        
        // Create and style the winner image
        const winnerImage = document.createElement('img');
        winnerImage.className = 'winner-image';
        winnerImage.style.display = 'block';
        winnerImage.style.margin = '20px auto';
        winnerImage.style.maxWidth = '200px';
        winnerImage.style.width = '100%';
        
        if (isCorrect) {
            resultTitle.textContent = 'Players Win!';
            resultMessage.textContent = 'Congratulations! You guessed the correct prompt!';
            winnerImage.src = 'assets/player_wins.png';
            winnerImage.alt = 'Players Win';
        } else {
            resultTitle.textContent = 'Order Master Wins!';
            resultMessage.textContent = 'The players couldn\'t guess the correct prompt in time!';
            winnerImage.src = 'assets/order_master_wins.png';
            winnerImage.alt = 'Order Master Wins';
        }
        
        // Insert the image after the title
        resultTitle.parentNode.insertBefore(winnerImage, resultMessage);
    }

    // Add hover effects to game cards
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
}); 