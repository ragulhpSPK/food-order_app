import dbconnect from "@/lib/mongo";
import Product from "@/lib/model/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbconnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const products = await Product.create(req.body);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("the poduct has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
