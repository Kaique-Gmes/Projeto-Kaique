CREATE DATABASE pokeint;
USE pokeint;

CREATE TABLE pokemon (
idPokemon int primary key auto_increment,
nome varchar(45),
tipo varchar(45),
genero varchar(45));

drop database pokeint;
drop table treinador;

CREATE TABLE treinador (
idTreinador int primary key auto_increment,
nome varchar(50),
nick varchar (50),
email varchar(50),
senha varchar(50),
fkPokemon int,
constraint fktp foreign key (fkPokemon) references pokemon(idPokemon));

CREATE TABLE jogo (
idJogo int primary key auto_increment,
fkTreinador int,
fkPokemon int,
constraint fkjogot foreign key (fkTreinador) references treinador(idTreinador),
constraint fkjogop foreign key (fkPokemon) references pokemon(idPokemon));

SELECT * FROM treinador;