REATE TABLE Cadeira (
	idLugar int NOT NULL,
	turma varchar(255) NOT NULL,
	NUSP_ocupante int,
	numeroSala varchar(255) NOT NULL,
	PRIMARY KEY (idLugar, turma),
	FOREIGN KEY (NUSP_ocupante) REFERENCES Aluno(NUSP),
	FOREIGN KEY (numeroSala) REFERENCES Sala(numeroSala)
);

