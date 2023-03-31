import dbconnect from "@/lib/mongo";
import Product from "@/lib/model/Product";

export default async function handler(req, res) {
  const { method } = req;

  dbconnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(201).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const products = await Product.create(req.body);
      console.log(products, "ghvyguygv");
      res.status(201).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
