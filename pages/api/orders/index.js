import dbconnect from "@/lib/mongo";
import order from "@/lib/model/order";

const hanler = async (req, res) => {
  dbconnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const order = await order.find(req.body);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const order = await order.create(req.body);

      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default hanler;
