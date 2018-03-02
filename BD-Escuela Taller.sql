#se crea la base de datos escuelataller
CREATE DATABASE EscuelaTaller

#se asigna la base de datos para trabajar en ella
USE EscuelaTaller

#creación de tabla administrador
CREATE TABLE Administrador(
	id int primary key,
    nombre varchar(30),
    apellido varchar(30),
    correo varchar(50),
    usuario varchar(30),
    contraseña varchar(30)
)

#creación de tabla estudiante
CREATE TABLE Estudiante(
	codigo varchar(7) primary key,
    nombre varchar(30),
    apellido varchar(30),
    cedula varchar(30),
    expedicion_Cedula varchar(30),
    correo varchar(100),
    lugar_Nacimiento varchar(100),
    fecha_Nacimiento varchar(30),
    fecha_Inscripcion varchar(30),
    edad int,
    genero varchar(30),
    lugar_Residencia varchar(100),
    referencia_Residencia varchar(200),
    telefono_Fijo int,
    celular_Whatsapp int,
    otro_Celular int,
    seguro_Medico varchar(30),
    tipo_Sangre varchar(30),
    contactoEmergencia varchar(30),
    telefono_Contacto int,
    primaria varchar(50),
    bachillerato varchar(50),
    tercer_Nivel varchar(50),
    cuarto_Nivel varchar(50),
    profesion varchar(50),
    ocupacion varchar(50),
    otros_Cursos varchar(50),
    interes_Curso varchar(200),
    estado varchar(30),
    id_Curso int,
    CONSTRAINT estudiante_curso FOREIGN KEY (id_Curso) REFERENCES Curso(id)   
)

#creación de tabla curso
CREATE TABLE Curso (
	id int primary key,
    nombre varchar(30),
    descripcion varchar(400),
    edad_Min int,
    edad_Max int,
    id_Categoria int,
    CONSTRAINT curso_categoria FOREIGN KEY (id_Categoria) REFERENCES Categoria(id)
)

#creación de tabla categoria
CREATE TABLE Categoria (
	id int primary key,
    nombre varchar(30)
)