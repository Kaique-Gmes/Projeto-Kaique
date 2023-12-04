CREATE DATABASE pokeint;
USE pokeint;

CREATE TABLE pokemon (
idPokemon int primary key auto_increment,
nome varchar(45),
genero varchar(45),
tipo varchar(45));

drop database pokeint;
drop table treinador;

CREATE TABLE treinador (
idTreinador int primary key auto_increment,
nomeTreinador varchar(50),
nickTreinador varchar (50),
emailTreinador varchar(50),
senhaTreinador varchar(50),
fkPokemonInicial int,
constraint fktp foreign key (fkPokemonInicial) references pokemon(idPokemon));

CREATE TABLE jogo (
idJogo int primary key auto_increment,
fkTreinador int,
fkPokemon int,
constraint fkjogot foreign key (fkTreinador) references treinador(idTreinador),
constraint fkjogop foreign key (fkPokemon) references pokemon(idPokemon));

SELECT * FROM treinador;