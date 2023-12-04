CREATE DATABASE pokeint;
USE pokeint;

drop database pokeint;
drop table treinador;

CREATE TABLE treinador (
idTreinador int primary key auto_increment,
nome varchar(50),
nick varchar (50),
email varchar(50),
pokemon varchar(20),
senha varchar(50));

CREATE TABLE jogo (
idJogo int primary key auto_increment,
pokemonJogo varchar(45),
fkTreinador int,
constraint fkjogot foreign key (fkTreinador) references treinador(idTreinador));


SELECT * FROM treinador;
SELECT * FROM jogo;