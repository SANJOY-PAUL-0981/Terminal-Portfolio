#!/usr/bin/env node
const term = require('terminal-kit').terminal;
const ASCII_LOGO =`
██████╗  █████╗ ███╗   ██╗██╗  ██╗ █████╗ ██╗
██╔══██╗██╔══██╗████╗  ██║██║ ██╔╝██╔══██╗██║
██████╔╝███████║██╔██╗ ██║█████╔╝ ███████║██║
██╔══██╗██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██║
██████╔╝██║  ██║██║ ╚████║██║  ██╗██║  ██║██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝
                                             
`;


function about(){
    
    term.bold.cyan('Hello and welcome to my portfolio 👨‍💻\n\n\n');
    term.bold('😺 Name: ').brightMagenta('Harajit\n');
    term.bold('❓ About: ').cyan('Interested in building new things and breaking them\n');
    term.bold('🌐 Website: ').yellow('https://harajit.tech\n');
    term.bold('🐙 GitHub: ').blue('https://github.com/HARAJIT05\n');
    term.bold('🐥 Twitter: ').brightCyan('https://x.com/harajit9\n');
    term.bold('📧 Email: ').brightRed('harajithub@gmail.com\n');
}

function skills(){
    term.bold('✒️ Languages: ').blue.bold('🟦 Python ').yellow.bold('🟨 JavaScript ').brightBlue.bold('🟦 CSS ').red.bold('🟧 HTML\n');
    term.bold('🛠️ Tools & Frameworks: ').brightBlue.bold('🌐 VS Code ').brightRed.bold('🐙 Git & GitHub ').brightMagenta.bold('👾 Unix ').brightYellow.bold('🤖 Android-Studio\n');
}

console.log(ASCII_LOGO);
about();
skills();