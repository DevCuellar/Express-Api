CREATE DATABASE IF NOT EXISTS hpshop;
USE hpshop;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(50) UNIQUE,
    description VARCHAR(255),
    price DECIMAL(10, 2)
);

INSERT INTO products (code, description, price) VALUES ('P001', 'Varita mágica de Saúco', 99.99);
INSERT INTO products (code, description, price) VALUES ('P002', 'Bufanda de Gryffindor', 29.99);
INSERT INTO products (code, description, price) VALUES ('P003', 'Capa de invisibilidad', 149.99);
INSERT INTO products (code, description, price) VALUES ('P004', 'Poción multijugos (kit de 3)', 19.99);
INSERT INTO products (code, description, price) VALUES ('P005', 'Quaffle de Quidditch', 39.99);
INSERT INTO products (code, description, price) VALUES ('P006', 'Firebolt, la escoba voladora', 199.99);
INSERT INTO products (code, description, price) VALUES ('P007', 'Ollivanders Colección de varitas', 149.99);
INSERT INTO products (code, description, price) VALUES ('P008', 'Diario de Tom Riddle', 49.99);
INSERT INTO products (code, description, price) VALUES ('P009', 'Snitch dorada (peluche)', 9.99);
INSERT INTO products (code, description, price) VALUES ('P010', 'Pócima para orejas extensibles', 12.99);