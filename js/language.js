const icons = document.querySelectorAll('.icons');
const nameLanguage = document.querySelector('.language-name');
const aboutLanguage = document.querySelector('.language-about');


const languageNames =[

    {   
        name:'HTML5' ,
        about:'6 Meses de Expêriencia com certificação'
    },
    
    {
        name:'CSS3' ,
        about:'6 Meses de Expêriencia com certificação'
    },

    {
        name:'JAVASCRIPT' ,
        about:'6 Meses de Experiência com certificação'
    },

    {
        name:'PYTHON' ,
        about:'1 Ano de de experiência'
    },

    {
        name:'JAVA' ,
        about:'6 Meses de Experiência'
    },

    {
        name:'MYSQL' ,
        about:'6 Meses de Experiência'
    },

    {
        name:'POSTGREESQL' ,
        about:'6 Meses de Experiência'
    },

    {
        name:'GITHUB' ,
        about:'6 Meses de Experiência'
    },

    {
        name:'GIT' ,
        about:'6 Meses de Experiência'
    },
];



icons.forEach(function(icon, index) {
    console.log(index)
    icon.addEventListener("mouseover", function(){
        nameLanguage.textContent = languageNames[index].name;
        aboutLanguage.textContent = languageNames[index].about;
    });

    icon.addEventListener("mouseout", function(){
      
    setTimeout(function() {
            nameLanguage.textContent = 'Sobre a linguagem';
            aboutLanguage.textContent = 'Passe o cursor sobre os itens que deseja.';
        }, 5000);
    });
});




