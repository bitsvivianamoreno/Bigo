const express = require("express");
const server = express();
const cors = require("cors");
const { Invoice } = require("../models");

server.use(express.json());
server.use(express.static( __dirname + "/../public"));
server.use(cors());

server.get("/api/invoices", async (req, res) => {
  let invoices = await Invoice.find();

  invoices = invoices.map(invoice => {
    return invoice;
  });

  return res.send(
    {
      error: false,
      data: invoices
    }
  );
});

server.get("/api/invoice/:id", async (req, res) => {
  const { id } = req.params;

  let invoice = await Invoice.findById(id);

  return res.send(
    {
      error: false,
      data: invoice
    }
  );
});

module.exports = server;