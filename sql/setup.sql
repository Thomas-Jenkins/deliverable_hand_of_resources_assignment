-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS rarePlants;
DROP TABLE IF EXISTS constructionStuff;

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

CREATE TABLE constructionStuff (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    construction_equipment VARCHAR NOT NULL,
    construction_role VARCHAR NOT NULL
);

INSERT INTO constructionStuff (
    construction_equipment,
    construction_role
)

VALUES
('Grader', 'Engineer'),
('Scraper', 'Electrician'),
('Crawler', 'Estimator'),
('Compactor', 'Subcontractor'),
('Compactor', 'Engineer'),
('Bulldozer', 'Subcontractor'),
('Dragline', 'Project Manager'),
('Dragline', 'Subcontractor'),
('Trencher', 'Supervisor'),
('Bulldozer', 'Construction Foreman'),
('Dragline', 'Construction Foreman'),
('Backhoe', 'Construction Worker'),
('Backhoe', 'Supervisor'),
('Dump Truck', 'Project Manager'),
('Crawler', 'Surveyor'),
('Bulldozer', 'Construction Manager'),
('Dragline', 'Construction Worker'),
('Crawler', 'Surveyor'),
('Excavator', 'Construction Expeditor'),
('Compactor', 'Electrician');