"use strict";

let numberOfFilms;

function start (){
     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');

     while(numberOfFilms == '' || numberOfFilms ==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');
     }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for(let i = 0; i<2; i++){
    const a = prompt('Один из последних фильмов', ''),
    b = prompt('На сколько оцените его', '');
    
    if(a != null && b != null && a !='' && b !='' && a.length <50){
        personalMovieDB.movies[a] = b;
    } else{
        i--;
    }
   
}
function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько оцените его', '');
        
        if(a != null && b != null && a !='' && b !='' && a.length <50){
            personalMovieDB.movies[a] = b;
        } else{
            i--;
        }
       
    }
}
rememberMyFilms();

if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
}   else if (personalMovieDB.count<30){
    console.log("Вы классический зритель");
}   else if (personalMovieDB.count>=30){
    console.log("Вы киноман");
}
    else {
        console.log("Произошла ошибка");
    }
    
function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }   else if (personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }   else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    }
        else {
            console.log("Произошла ошибка");
        }
}

detectPersonalLevel();

function showMyDB(){
    if(!personalMovieDB.false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    for(i=0;i<=3;i++){
        const a = prompt('Ваш любимый жанр', '');
        personalMovieDB.genres[a];
    }
}

console.log(personalMovieDB);