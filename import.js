//Les iports et les export en javasrcip permettent de structurer les fichiers js en modules 

//Par defaut Javascript execute ce qu'on appelle la 'global scope . le contenu du code 
//provenant d'un fichier est automatiquement disponible au sein d'un autres fichier 
//


// .js .ts .jsx .tsx


// On peut considerer qu'un fichier js est un module des lors qu'il contient 
// un 'export'

function myFuncA () {
    console.log('A')
    let maVariable
    maVariable = () => {console.log('A')}
}
function myFuncB () {
    console.log('B')
}
function myFuncC () {
    console.log('C')
}
export {myFuncA, myFuncB, myFuncC}; // Syntaxe des export nommé 

export default myFuncA;
