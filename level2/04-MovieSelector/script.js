// On récupère le bouton 
const btn = document.querySelector('button');
// On crée le tableau contenant 5 movies
const movies = ['Les évadés', 'American Pie', 'Ghost in the shell', 'OSS117', 'Le prénom'];
// On récupère le p
const res = document.querySelector('p');

btn.addEventListener('click', () =>{

    // Choix aléatoire d'un élément du tableau
    const randomMovies = movies[Math.floor(Math.random() * movies.length)];

    // Affiche le film dans le p
    res.firstChild.nodeValue = randomMovies;
})