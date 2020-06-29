


fetch('https://web.whatsapp.com/moment_locales/pt-BR.62b7f4313fb5dd23f2d3.js').then(x => x.text()).then(textFile => { console.log(textFile.split("\n")) });