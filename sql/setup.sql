-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS rarePlants;




CREATE TABLE rarePlants (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    plant_common_name VARCHAR NOT NULL,
    discovered_by VARCHAR NOT NULL  
);

INSERT INTO rarePlants (
    plant_common_name,
    discovered_by
)
VALUES
('Fleshy Lupine', 'Adam Clemmensen'),
('Browntop', 'Thibaud Hutcheson'),
('Grays Cinquefoil', 'Ulrika Whipp'),
('Tibig', 'Ladonna Blandamore'),
('Atlantic Camas', 'Ailis Shepherdson'),
('Fivebract Chinchweed', 'Idette Doret'),
('Colorado Wildrye', 'Christos Chittenden'),
('Florida Toadwood', 'Nerta Bignell'),
('Balbis Maiden Fern', 'Dory OMullaney'),
('Kidney Lichen', 'Clotilda Pountney'),
('Hydrastis',' Quintana O Dowd'),
('Stiffbranch Birds Beak', 'Forrester McCroft'),
('Bolanders Quillwort', 'Alfons Town'),
('Wickes Loeskypnum Moss', 'Marylin Seddon'),
('Jamaican Crabgrass', 'Galvan Langtry'),
('Acaulon Moss', 'Bryn Adamec'),
('Zahlbrucknerella Lichen', 'Krystalle Landrieu'),
('Porters Melicgrass', 'Ingaberg Divill'),
('Pumpellys Brome', 'Jeana Romanski'),
('Melanelia Lichen', 'Cecil McQuilliam');