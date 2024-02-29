--  Create table for this data
-- const data = {
--             name,
--             model,
--             brand,
--             manufacturer,
--             assembly,
--             image: imgUrl,
--             pdf: pdfUrl
--         }

CREATE TABLE machine (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    model VARCHAR(255),
    brand VARCHAR(255),
    manufacturer VARCHAR(255),
    assembly VARCHAR(255),
    image VARCHAR(255),
    pdf VARCHAR(255)
);