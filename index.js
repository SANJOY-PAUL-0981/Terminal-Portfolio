#!/usr/bin/env node
const term = require('terminal-kit').terminal;
const ASCII_LOGO =`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⢀⡤⠚⣷⠀⠀⣀⣤⠀⠀⠀⠀⠀⠀⠀
    ⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⣟⢀⡴⠋⠀⠀⣿⠖⠋⢀⡏⠀⠀⠀⡀⡀⠀⠀
    ⠀⠀ ⠀⠀⠀⠀⠀⢀⡀⡼⠀⢸⡟⡸⠀⠀⠀⠃⠀⠀⢸⡧⠜⠛⠛⣻⠃⠀⠀
    ⠀⠀⠀ ⠀⠀⠀⠀⢺⢾⡃⠀⠈⣴⠁⢻⡀⠀⠀⢀⡠⠀⠀⠀⠀⢸⣇⣤⡀⠀
    ⠀⠀⠀⠀ ⠀⠀⠀⠸⡜⠂⠀⠀⣟⠀⢸⠑⠀⠰⠁⠀⠀⠀⠀⠀⠛⠉⡼⠁⠀
    ⠀⠀⠀⠀⠀ ⠀⠀⠈⣷⣾⣿⣿⣿⣿⣾⣶⣶⣤⣀⡀⢰⠕⠋⠀⠀⠸⠧⣤⡄
    ⠀⠀⠀⠀⠀⠀ ⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣔⠈⣤⣶⡚⠁⠀
    ⠀⠀⠀⠀ ⣠⣶⡀⢸⡟⠿⡿⠿⡟⠻⠿⣿⣿⣿⣿⣿⣿⣿⠿⣿⠋⠁⠀⠀⠀
    ⠀⠀⠀ ⢰⢧⡷⡿⢘⡎⠀⠀⠐⣶⢶⣲⠈⠙⠋⠉⠉⠁⡘⡯⣿⡶⣆⡀⠀⠀
    ⠀⠀⠀ ⢾⢈⣼⣿⣤⣿⣶⣶⣶⣿⣿⣧⣤⣄⣀⣀⣤⣾⣿⣿⢯⢇⣿⢳⠀⠀
    ⠀⠀⠀ ⠈⠙⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣌⣷⣬⠏⠀⠀
    ⠀⠀⠀⠀ ⠀⠀⠀⠉⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠻⠟⠋⠁⠀⠀⠀
    ⠀⠀⠀⠀ ⢀⣀⣀⡀⣰⣿⣿⣿⣿⣿⣿⣿⡿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀ ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀ ⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
     ⢀⣤⣶⣴⣿⣿⣿⡧⠀⠉⠙⢿⣿⣿⣿⣿⣾⣶⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀ ⠉⠛⠛⠿⣿⣿⡇⠀⠀⠀⠀⠻⣿⣿⣿⡿⠿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠸⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀`;


function about(){
    
    term.bold.cyan('Hello World welcome to my portfolio 👨‍💻\n\n\n');
    term.bold('😺 Name: ').brightMagenta('Sanjoy Paul\n');
    term.bold('❓ About: ').cyan('Just a beginner developer, Interested in building new things\n');
    term.bold('🌐 Website: ').yellow('https://sanjoypaul.vercel.app/\n');
    term.bold('🐙 GitHub: ').blue('https://github.com/SANJOY-PAUL-0981\n');
    term.bold('🐥 Twitter: ').brightCyan('https://x.com/Sanj0yX\n');
    term.bold('📧 Email: ').brightRed('paulsanjoy2923@gmail.com\n');
}

function skills(){
    term.bold('✒️ Languages: ').blue.bold('🟦 C ').yellow.bold('🟨 JavaScript ').brightBlue.bold('🟦 CSS ').red.bold('🟧 HTML').blue.bold('🟦 React\n');
    term.bold('🛠️ Tools & Frameworks: ').brightBlue.bold('🌐 VS Code ').brightRed.bold('🐙 Git & GitHub ').brightMagenta.bold('👾 Bootstraps ').blue.bold('🌐 Tailwind\n');
}

console.log(ASCII_LOGO);
about();
skills();