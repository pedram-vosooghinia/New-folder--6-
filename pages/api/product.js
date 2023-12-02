// pages/api/products.js
import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      productName,
      price,
      inventory,
      barcode,
      numberInPack,
      coloring,
      category,
      seasion,
      description,
    } = req.body;

    try {
      // Connect to the database
      await db.connect();

      // Insert the product into the "products" table
      const result = await db.query(
        `
        INSERT INTO products (
          product_name,
          price,
          inventory,
          barcode,
          number_in_pack,
          coloring,
          category,
          seasion,
          description
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *
      `,
        [
          productName,
          price,
          inventory,
          barcode,
          numberInPack,
          coloring,
          category,
          seasion,
          description,
        ]
      );

      const insertedProduct = result.rows[0];

      res.status(201).json({ success: true, data: insertedProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      // Close the database connection
      await db.end();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
