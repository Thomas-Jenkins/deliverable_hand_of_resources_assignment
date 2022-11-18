-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS rarePlants;
DROP TABLE IF EXISTS constructionStuff;
DROP TABLE IF EXISTS appInfo;
DROP TABLE IF EXISTS groceryList;
DROP TABLE IF EXISTS randomStuff;

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

CREATE TABLE appInfo (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    app_name VARCHAR NOT NULL,
    app_version VARCHAR NOT NULL,
    app_url VARCHAR NOT NULL
);

INSERT INTO appInfo (
    app_name,
    app_version,
    app_url
)
VALUES 
('Bytecard', '7.3.7', 'Nunc.xls'),
('Yoloswarm', '0.7.7', 'Justo.mov'),
('Prodder', '8.1.8', 'IpsumDolor.ppt'),
('Transcof', '0.4.4', 'UltricesPosuereCubilia.avi'),
('It', '9.1.2', 'NullamVariusNulla.xls'),
('Tampflex', '0.83', 'Convallis.pdf'),
('Quo Lux', '0.4.4', 'HacHabitassePlatea.mp3'),
('Cookley', '3.1.0', 'Eget.mov'),
('Lotlux', '1.6.9', 'MiIntegerAc.png'),
('Zontrax', '8.91', 'PellentesqueAt.ppt'),
('Bitchip', '0.95', 'Ultrices.ppt'),
('Transcof', '9.4.9', 'SuspendissePotentiNullam.avi'),
('Keylex', '7.7', 'Eget.xls'),
('Andalax', '0.76', 'NibhLigulaNec.ppt'),
('Zathin', '0.4.7', 'MolestieHendrerit.avi'),
('Stim', '1.24', 'Semper.ppt'),
('Tres-Zap', '3.4', 'LigulaSuspendisse.gif'),
('Daltfresh', '2.32', 'NislNunc.mp3'),
('Vagram', '0.21', 'ImperdietSapienUrna.xls'),
('Holdlmabere', '0.21', 'ConvallisNuncProin.mpeg');

CREATE TABLE groceryList (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    product VARCHAR NOT NULL
);

INSERT INTO groceryList (
    first_name,
    last_name,
    product
)

VALUES
('Annabel', 'Wands', 'Sage Ground Wiberg'),
('Sigfried', 'Gammell', 'Veal - Insides Provini'),
('Werner', 'Guilloux', 'Peas Snow'),
('Nettle', 'Antley', 'Salmon Steak - Cohoe 6 Oz'),
('Constantino', 'Jeanes', 'Pesto - Primerba Paste'),
('Maribel', 'Jansky', 'Nut - Chestnuts Whole'),
('Alisha', 'Leith-Harvey', 'Coffee - Ristretto Coffee Capsule'),
('Johnathan', 'Endley', 'Rabbit - Saddles'),
('Den', 'Croom', 'Sprouts - Pea'),
('Gerrilee', 'Sugar', 'Muffin Orange Individual'),
('Karee', 'Beardsall', 'Chocolate - Milk Callets'),
('Nobie', 'Pawelski', 'Juice - Happy Planet'),
('Whitman', 'Mebs', 'Cake Paprus'),
('Janith', 'Sponer', 'Sardines'),
('Avigdor', 'Anselmi', 'Tart - Pecan Butter Squares'),
('Teodora', 'Forward', 'Juice - Lime'),
('Phedra', 'Kilmurry', 'Sauce Bbq Smokey'),
('Amery', 'Kaysor', 'Cookies - Assorted'),
('Brita', 'Clay', 'Rice - Long Grain'),
('Bethany', 'Albrooke', 'Wine - Vineland Estate Semi - Dry');

CREATE TABLE randomStuff (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    column_one VARCHAR NOT NULL,
    column_two VARCHAR NOT NULL,
    column_three VARCHAR NOT NULL 
);

INSERT INTO randomStuff (
    column_one,
    column_two,
    column_three
)

VALUES 
('Russia', 'Leninskiy', 'Daily'),
('Philippines', 'Villanueva', 'Yearly'),
('Russia', 'Severomorsk', 'Yearly'),
('Guatemala', 'Lívingston', 'Once'),
('Azerbaijan', 'Sheki', 'Daily'),
('Philippines', 'Sapol', 'Monthly'),
('Uganda', 'Yumbe', 'Weekly'),
('Vietnam', 'Trới', 'Seldom'),
('Poland', 'Doruchów', 'Never'),
('Japan', 'Ryūgasaki', 'Often'),
('Poland', 'Subkowy', 'Seldom');
