// Importing the electron module
const { ipcRenderer } = require('electron');

// DOM Elements
const $ = selector => document.querySelector(selector);

const $count = $('#count');
const $button = $('button');

// Event Listener
$button.addEventListener('click', () => {
    const count = +$count.innerText; // + is a shortcut for parseInt
    $count.innerText = count + 1;
});

// IPC
ipcRenderer.on('update-theme', (event, theme) => {
    const root = document.documentElement;

    root.style.setProperty('--scheme', theme);
});