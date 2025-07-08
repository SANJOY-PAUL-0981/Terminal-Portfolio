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
    term.bold('❓ About: ').cyan('Just a Web Developer, Interested in Backend Dev & building\n');
    term.bold('🌐 Website: ').yellow('https://sanjoypaul.vercel.app/\n');
    term.bold('🐙 GitHub: ').blue('https://github.com/SANJOY-PAUL-0981\n');
    term.bold('🐥 Twitter: ').brightCyan('https://x.com/Sanj0yX\n');
    term.bold('📧 Email: ').brightRed('paulsanjoy2923@gmail.com\n');
}

function skills(){
    term.bold('✒️ Languages: ').blue.bold('🟦 C ').yellow.bold('🟨 JavaScript ').brightBlue.bold('🟦 CSS ').red.bold('🟧 HTML').blue.bold('🟦 Java\n');
    term.bold('🛠️ Frameworks: ').blue.bold('🌐 ReactJS ').green.bold('🍃 NodeJS ').blue.bold('🚂 ExpressJS ').brightMagenta.bold('👾 Bootstraps ').blue.bold('🌐 Tailwind\n');
    term.bold('🔧 Others: ').yellow.bold('🐧 Linux ').red.bold('🐙 Git & Github ').blue.bold('🌐 VS Code ').green.bold('🍃 MongoDB')
}

console.log(ASCII_LOGO);
about();
skills();