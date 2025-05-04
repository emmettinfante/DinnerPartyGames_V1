// Dictionary game logic
console.log("Dictionary game script loaded");

class DictionaryGame {
    constructor() {
        this.words = [];
        this.currentWord = null;
        
        // Bind methods
        this.initialize = this.initialize.bind(this);
        this.startGame = this.startGame.bind(this);
        
        // DOM Elements
        this.dictionaryMasterScreen = document.getElementById('dictionary-master-screen');
        this.wordRevealScreen = document.getElementById('word-reveal-screen');
        this.writeDefinitionsScreen = document.getElementById('writing-screen');
        this.chooseBestScreen = document.getElementById('choose-best-screen');
        this.scoreScreen = document.getElementById('score-screen');
        this.rankingScreen = document.getElementById('ranking-screen');
        
        // Load words from Dictionary.json
        this.loadWords();
    }

    async loadWords() {
        try {
            const response = await fetch('Assets/Dictionary.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.words = data;
            console.log('Dictionary loaded:', this.words.length, 'words');
        } catch (error) {
            console.error('Error loading dictionary:', error);
            alert('Error loading dictionary. Please try again.');
        }
    }

    initialize() {
        // Set up event listeners for the play button
        const playBtn = document.querySelector('.play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const gameContainer = document.getElementById('game-container');
                const initialButtons = document.getElementById('initial-buttons');
                const homeIcon = document.getElementById('home-icon');
                
                if (gameContainer) gameContainer.classList.add('game-started');
                if (initialButtons) initialButtons.style.display = 'none';
                if (this.dictionaryMasterScreen) this.dictionaryMasterScreen.style.display = 'block';
                if (homeIcon) homeIcon.style.display = 'block';
                
                this.startGame();
            });
        }

        // Add other necessary event listeners
        const revealBtn = document.getElementById('reveal-btn');
        if (revealBtn) {
            revealBtn.addEventListener('click', () => {
                const wordDisplay = document.getElementById('word-display');
                const definitionDisplay = document.getElementById('definition-display');
                
                if (this.currentWord) {
                    if (wordDisplay) wordDisplay.textContent = this.currentWord.Word;
                    if (definitionDisplay) definitionDisplay.textContent = this.currentWord.Definition;
                }
                
                if (this.wordRevealScreen) this.wordRevealScreen.style.display = 'block';
                if (this.dictionaryMasterScreen) this.dictionaryMasterScreen.style.display = 'none';
            });
        }

        // Bind shuffle button to get a new word
        const shuffleBtn = document.getElementById('shuffle-btn');
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                const randomIndex = Math.floor(Math.random() * this.words.length);
                this.currentWord = this.words[randomIndex];
                
                const wordDisplay = document.getElementById('word-display');
                const definitionDisplay = document.getElementById('definition-display');
                
                if (this.currentWord) {
                    if (wordDisplay) wordDisplay.textContent = this.currentWord.Word;
                    if (definitionDisplay) definitionDisplay.textContent = this.currentWord.Definition;
                }
            });
        }

        const startGameBtn = document.getElementById('start-game-btn');
        if (startGameBtn) {
            startGameBtn.addEventListener('click', () => {
                if (this.wordRevealScreen) this.wordRevealScreen.style.display = 'none';
                if (this.writeDefinitionsScreen) this.writeDefinitionsScreen.style.display = 'block';
                const wordToDefine = document.getElementById('word-to-define');
                if (wordToDefine && this.currentWord) {
                    wordToDefine.textContent = this.currentWord.Word;
                }
            });
        }

        const doneBtn = document.getElementById('done-btn');
        if (doneBtn) {
            doneBtn.addEventListener('click', () => {
                console.log('Done button clicked');
                console.log('Write definitions screen:', this.writeDefinitionsScreen);
                console.log('Ranking screen:', this.rankingScreen);
                console.log('Current word:', this.currentWord);
                
                if (this.writeDefinitionsScreen) this.writeDefinitionsScreen.style.display = 'none';
                if (this.rankingScreen) {
                    console.log('Showing ranking screen');
                    this.rankingScreen.style.display = 'block';
                    const finalWord = document.getElementById('final-word');
                    const finalDefinition = document.querySelector('.final-definition');
                    console.log('Final word element:', finalWord);
                    console.log('Final definition element:', finalDefinition);
                    if (finalWord && this.currentWord) finalWord.textContent = this.currentWord.Word;
                    if (finalDefinition && this.currentWord) finalDefinition.textContent = this.currentWord.Definition;
                }
            });
        }

        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (this.rankingScreen) this.rankingScreen.style.display = 'none';
                if (this.dictionaryMasterScreen) this.dictionaryMasterScreen.style.display = 'block';
                this.startGame();
            });
        }

        // Add home icon functionality
        const homeIcon = document.getElementById('home-icon');
        if (homeIcon) {
            homeIcon.addEventListener('click', () => {
                location.reload();
            });
        }
    }

    startGame() {
        // Select a random word to start
        const randomIndex = Math.floor(Math.random() * this.words.length);
        this.currentWord = this.words[randomIndex];
    }

    // Helper method to hide all screens
    hideAllScreens() {
        [
            this.dictionaryMasterScreen,
            this.wordRevealScreen,
            this.writeDefinitionsScreen,
            this.rankingScreen
        ].forEach(screen => {
            if (screen) screen.style.display = 'none';
        });
    }
}

// Initialize game when document is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Dictionary Game...');
    window.dictionaryGame = new DictionaryGame();
    window.dictionaryGame.initialize();
}); 

