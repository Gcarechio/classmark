REATE TABLE Sala (
	numeroSala varchar(255) NOT NULL,
	capacidade int NOT NULL,
	CEP varchar(10) NOT NULL,
	PRIMARY KEY (numeroSala),
	FOREIGN KEY (CEP) REFERENCES Predio(CEP)
);

