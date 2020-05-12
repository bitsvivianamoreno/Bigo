const { createContainer, asClass, asValue, asFunction } = require("awilix");

// Config
const config = require("../config");
const server = require(".");

// Services
const { InvoiceService } = require("../services");

// Controllers
const { InvoiceController } = require("../controllers");

// Routes
const Routes = require("../routes");
const { InvoiceRoutes } = require("../routes/index.routes");

// Models
const { InvoiceModel } = require("../models");

// Repositories
const { InvoiceReporitory } = require("../repositories");

const container = createContainer();

container
  .register({
    server: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    InvoiceService: asClass(InvoiceService).singleton()
  }).register({
    InvoiceController: asClass(InvoiceController.bind(InvoiceController)).singleton()
  }).register({
    InvoiceRoutes: asFunction(InvoiceRoutes).singleton()
  }).register({
    InvoiceModel: asValue(InvoiceModel)
  }).register({
    InvoiceReporitory: asClass(InvoiceReporitory).singleton()
  });

module.exports = container;