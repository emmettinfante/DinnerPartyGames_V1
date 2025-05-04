// spy.js

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", 
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", 
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", 
    "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", 
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", 
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", 
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", 
    "Yemen", "Zambia", "Zimbabwe"
];

// Celebrities list (based on famous people)
const celebrities = [
    "Tom Hanks", "Morgan Freeman", "Keanu Reeves", "Dwayne Johnson", "Jackie Chan",
    "Will Smith", "Samuel L. Jackson", "Robert Downey Jr.", "Leonardo DiCaprio", "Johnny Depp",
    "Denzel Washington", "Harrison Ford", "Michael Jordan", "Tom Cruise", "Bruce Willis",
    "Brad Pitt", "Julia Roberts", "Angelina Jolie", "Jennifer Lawrence", "Emma Watson",
    "Scarlett Johansson", "Meryl Streep", "Sandra Bullock", "Jennifer Aniston", "Oprah Winfrey",
    "Taylor Swift", "Beyoncé", "Lady Gaga", "Adele", "Rihanna",
    "Justin Bieber", "Ed Sheeran", "Drake", "Ariana Grande", "Katy Perry",
    "LeBron James", "Serena Williams", "Cristiano Ronaldo", "Lionel Messi", "Usain Bolt",
    "Roger Federer", "Tiger Woods", "Stephen Curry", "Simone Biles", "Naomi Osaka",
    "Bill Gates", "Elon Musk", "Mark Zuckerberg", "Steve Jobs", "Jeff Bezos"
];

// Brands list
const brands = [
    "Apple", "Google", "Amazon", "Microsoft", "Samsung",
    "Coca-Cola", "Nike", "Disney", "Netflix", "Spotify",
    "McDonald's", "Starbucks", "LEGO", "Adidas", "Toyota",
    "PlayStation", "Nintendo", "Tesla", "IKEA", "Walmart",
    "Visa", "PayPal", "Instagram", "YouTube", "Facebook",
    "Twitter", "TikTok", "Snapchat", "Pinterest", "LinkedIn",
    "BMW", "Mercedes-Benz", "Audi", "Ferrari", "Porsche",
    "Rolex", "Gucci", "Louis Vuitton", "Chanel", "Nike",
    "Pepsi", "Red Bull", "KFC", "Subway", "Burger King",
    "H&M", "Zara", "Uniqlo", "The North Face", "Lululemon"
];

// TV Shows list
const shows = [
    "Breaking Bad", "Game of Thrones", "The Wire", "The Sopranos", "Friends",
    "Stranger Things", "The Office", "The Crown", "The Mandalorian", "Sherlock",
    "Black Mirror", "Succession", "Westworld", "Better Call Saul", "The Queen's Gambit",
    "Chernobyl", "The Boys", "Ozark", "Money Heist", "Narcos",
    "The Walking Dead", "Dexter", "House of Cards", "Fargo", "Dark",
    "Seinfeld", "The Big Bang Theory", "How I Met Your Mother", "Parks and Recreation", "Brooklyn Nine-Nine",
    "True Detective", "Mindhunter", "The Witcher", "Lost", "Mad Men",
    "The Handmaid's Tale", "Peaky Blinders", "This Is Us", "Fleabag", "Ted Lasso",
    "The Good Place", "Modern Family", "Schitt's Creek", "WandaVision", "Squid Game",
    "Yellowstone", "Euphoria", "The Last of Us", "Wednesday", "Bridgerton"
];

// Animals list
const animals = [
    "Lion", "Tiger", "Elephant", "Giraffe", "Zebra",
    "Panda", "Koala", "Kangaroo", "Dolphin", "Whale",
    "Shark", "Octopus", "Eagle", "Penguin", "Flamingo",
    "Wolf", "Fox", "Bear", "Deer", "Rabbit",
    "Monkey", "Gorilla", "Chimpanzee", "Sloth", "Orangutan",
    "Crocodile", "Alligator", "Snake", "Lizard", "Turtle",
    "Butterfly", "Bee", "Ant", "Spider", "Scorpion",
    "Horse", "Cow", "Sheep", "Goat", "Pig",
    "Dog", "Cat", "Hamster", "Guinea Pig", "Rabbit",
    "Owl", "Parrot", "Hummingbird", "Peacock", "Swan",
    "Hippopotamus", "Rhinoceros", "Leopard", "Cheetah", "Jaguar",
    "Squirrel", "Hedgehog", "Platypus", "Beaver", "Otter",
    "Bat", "Ostrich", "Frog", "Toad", "Seal",
    "Walrus", "Polar Bear", "Camel", "Llama", "Alpaca",
    "Bison", "Buffalo", "Elk", "Moose", "Hyena",
    "Meerkat", "Raccoon", "Skunk", "Armadillo", "Porcupine",
    "Lemur", "Wombat", "Tasmanian Devil", "Komodo Dragon", "Chameleon",
    "Iguana", "Mantis", "Lobster", "Crab", "Jellyfish",
    "Clownfish", "Starfish", "Seahorse", "Pelican", "Toucan"
];

// Define allCategories object
const allCategories = {
    countries: countries,
    celebrities: celebrities,
    brands: brands,
    shows: shows,
    animals: animals
};

let selectedCategory = null;
let selectedPlayerCount = null;
let numSpies = 1;
let players = [];
let currentPlayer = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Debug statement to confirm script is running
  console.log("Spy game script loaded");

  // Get all necessary elements
  const howToBtn = document.querySelector('#how-to-btn');
  const playBtn = document.querySelector('.play-btn');
  const howToSection = document.getElementById('how-to-section');
  const setupScreen = document.getElementById('setup-screen');
  const initialButtons = document.getElementById('initial-buttons');
  const playerCountContainer = document.getElementById('player-count-options');
  const spyCountDisplay = document.getElementById('spy-count-display');
  const confirmBtn = document.getElementById('confirm-setup');
  const revealScreen = document.getElementById('reveal-screen');
  const revealBtn = document.getElementById('reveal-btn');
  const revealResult = document.getElementById('reveal-result');
  const roleDisplay = document.getElementById('role-display');
  const roleIcon = document.getElementById('role-icon');
  const nextPlayerBtn = document.getElementById('next-player-btn');
  const endScreen = document.getElementById('end-screen');
  const resetBtn = document.getElementById('reset-btn');
  const homeIcon = document.getElementById('home-icon');
  const mainContainer = document.querySelector('.container'); // Get the main container

  // Add custom CSS for selected buttons
  const style = document.createElement('style');
  style.textContent = `
    .btn.selected {
      background-color: #FF3131 !important;
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  `;
  document.head.appendChild(style);

  // Function to change background image
  function changeBackgroundImage(imagePath) {
    console.log("Changing background image to:", imagePath);
    
    // For body background approach
    document.body.style.backgroundImage = `url('${imagePath}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    
    // For container background approach (if you're using a container div)
    if (mainContainer) {
      mainContainer.style.backgroundImage = `url('${imagePath}')`;
      mainContainer.style.backgroundSize = 'cover';
      mainContainer.style.backgroundPosition = 'center';
      mainContainer.style.backgroundRepeat = 'no-repeat';
    }
  }

  function updateConfirmButtonVisibility() {
    console.log("Checking confirmation button visibility:", { selectedCategory, selectedPlayerCount });
    if (selectedPlayerCount && selectedCategory) {
      confirmBtn.style.display = 'inline-block';
    } else {
      confirmBtn.style.display = 'none';
    }
  }

  if (howToBtn) {
    howToBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (howToSection.style.display === 'none') {
        howToSection.style.display = 'block';
        howToBtn.textContent = 'Hide Instructions';
      } else {
        howToSection.style.display = 'none';
        howToBtn.textContent = 'How to Play?';
      }
    });
  } else {
    console.error("How to button not found");
  }

  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setupScreen.style.display = 'block';
      initialButtons.style.display = 'none';
      homeIcon.style.display = 'block';
      
      // Change the background image when switching to setup screen
      changeBackgroundImage('assets/setup.png');
    });
  } else {
    console.error("Play button not found");
  }

  // Add event listeners for player count buttons
  const playerCountBtns = document.querySelectorAll('.player-count-btn');
  if (playerCountBtns.length > 0) {
    console.log(`Found ${playerCountBtns.length} player count buttons`);
    playerCountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log(`Player count button clicked: ${btn.dataset.count}`);
        playerCountBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedPlayerCount = parseInt(btn.dataset.count);

        if (selectedPlayerCount >= 12) {
          numSpies = 5;
        } else if (selectedPlayerCount >= 10) {
          numSpies = 4;
        } else if (selectedPlayerCount >= 8) {
          numSpies = 3;
        } else if (selectedPlayerCount >= 5) {
          numSpies = 2;
        } else {
          numSpies = 1;
        }

        spyCountDisplay.textContent = `There will be ${numSpies} spy${numSpies > 1 ? 'ies' : ''} in the game.`;
        updateConfirmButtonVisibility();
      });
    });
  } else {
    console.error("No player count buttons found");
  }

  // Add event listeners for category buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  if (categoryBtns.length > 0) {
    console.log(`Found ${categoryBtns.length} category buttons`);
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log(`Category button clicked: ${btn.dataset.category}`);
        categoryBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedCategory = btn.dataset.category;
        updateConfirmButtonVisibility();
      });
    });
  } else {
    console.error("No category buttons found");
  }

  if (confirmBtn) {
    console.log("Confirm button found, adding event listener");
    confirmBtn.addEventListener('click', () => {
      console.log("Confirm button clicked");
      console.log("Selected category:", selectedCategory);
      console.log("Selected player count:", selectedPlayerCount);
      
      const options = allCategories[selectedCategory] || [];
      console.log(`Options for ${selectedCategory}:`, options.length > 0 ? `${options.length} items available` : "No items found");
      
      if (!options.length || !selectedPlayerCount) {
        console.error("Missing category data or player count");
        return;
      }

      const secret = options[Math.floor(Math.random() * options.length)];
      console.log("Secret word selected:", secret);
      
      const spyIndexes = new Set();
      while (spyIndexes.size < numSpies) {
        spyIndexes.add(Math.floor(Math.random() * selectedPlayerCount));
      }
      console.log("Spy indexes:", Array.from(spyIndexes));

      players = Array.from({ length: selectedPlayerCount }, (_, i) =>
        spyIndexes.has(i) ? 'spy' : secret
      );
      console.log("Players roles created:", players.map(p => p === 'spy' ? 'spy' : 'not spy'));
      
      currentPlayer = 0;

      setupScreen.style.display = 'none';
      revealScreen.style.display = 'block';
      
      // Change background for the reveal screen (optional)
      changeBackgroundImage('assets/reveal.png');
      
      showRevealPrompt();
    });
  } else {
    console.error("Confirm button not found");
  }

  function showRevealPrompt() {
    revealBtn.style.display = 'block';
    revealResult.style.display = 'none';
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      console.log(`Revealing role for player ${currentPlayer + 1}`);
      const role = players[currentPlayer];
      console.log("Role:", role);
      
      revealBtn.style.display = 'none';
      revealResult.style.display = 'block';

      if (role === 'spy') {
        roleDisplay.textContent = 'You are the SPY';
        roleIcon.src = 'assets/games/not_safe.png';
      } else {
        roleDisplay.textContent = `Your word is: ${role}`;
        roleIcon.src = 'assets/games/safe.png';
      }
    });
  } else {
    console.error("Reveal button not found");
  }

  if (nextPlayerBtn) {
    nextPlayerBtn.addEventListener('click', () => {
      currentPlayer++;
      console.log(`Moving to player ${currentPlayer + 1}`);
      
      if (currentPlayer >= players.length) {
        console.log("All players have seen their roles, ending game");
        revealScreen.style.display = 'none';
        endScreen.style.display = 'block';
        
        // Change background for the end screen (optional)
        changeBackgroundImage('assets/end.png');
      } else {
        showRevealPrompt();
      }
    });
  } else {
    console.error("Next player button not found");
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      console.log("Resetting game");
      endScreen.style.display = 'none';
      setupScreen.style.display = 'block';
      
      // Change back to setup background
      changeBackgroundImage('assets/setup.png');
      
      selectedCategory = null;
      selectedPlayerCount = null;
      document.querySelectorAll('.player-count-btn').forEach(btn => btn.classList.remove('selected'));
      document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('selected'));
      updateConfirmButtonVisibility();
    });
  } else {
    console.error("Reset button not found");
  }

  if (homeIcon) {
    homeIcon.addEventListener('click', () => {
      // Reset to the original background image when going home
      changeBackgroundImage('assets/home.png');
      location.reload();
    });
  } else {
    console.error("Home icon not found");
  }

  // Debug output of all key elements
  console.log({
    howToBtn: !!howToBtn,
    playBtn: !!playBtn,
    howToSection: !!howToSection,
    setupScreen: !!setupScreen,
    initialButtons: !!initialButtons,
    playerCountContainer: !!playerCountContainer,
    spyCountDisplay: !!spyCountDisplay,
    confirmBtn: !!confirmBtn,
    revealScreen: !!revealScreen,
    revealBtn: !!revealBtn,
    revealResult: !!revealResult,
    roleDisplay: !!roleDisplay,
    roleIcon: !!roleIcon,
    nextPlayerBtn: !!nextPlayerBtn,
    endScreen: !!endScreen,
    resetBtn: !!resetBtn,
    homeIcon: !!homeIcon,
    mainContainer: !!mainContainer
  });

  // Hide all screens initially except initial buttons
  function hideAllScreens() {
    [setupScreen, howToSection, revealScreen, endScreen].forEach(screen => {
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
      if (mainContainer) {
        mainContainer.classList.add('game-started');
        initialButtons.style.display = 'none';
        setupScreen.style.display = 'block';
        if (homeIcon) homeIcon.style.display = 'block';
      }
    });
  });

  // Handle home icon click
  if (homeIcon) {
    homeIcon.addEventListener('click', function() {
      if (mainContainer) {
        mainContainer.classList.remove('game-started');
        hideAllScreens();
        initialButtons.style.display = 'flex';
        homeIcon.style.display = 'none';
      }
    });
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