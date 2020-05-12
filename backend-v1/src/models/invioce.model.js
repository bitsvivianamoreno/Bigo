const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvoiceSchema = new Schema (
  // {
  //   line_number: {
  //     type: String
  //   },
  //   formatted_line_number: {
  //     type: String
  //   },
  //   expiration_date: {
  //     type: String
  //   },
  //   last_payment_date: {
  //     type: String
  //   },
  //   payment_reference: {
  //     type: Number
  //   },
  //   invoice_status: {
  //     type: String
  //   },
  //   amount: {
  //     type: Number
  //   },
  //   currency: {
  //     type: String
  //   },
  //   country_mobile_code: {
  //     type: Number
  //   },
  //   payment_history: [{
  //     type: Schema.Types.ObjectId
  //     // period: {
  //     //   type: String
  //     // },
  //     // amount: {
  //     //   type: String
  //     // },
  //     // balance: {
  //     //   type: String
  //     // }
  //   }]
  // },
  // {
  //   timestamps: {
  //     createdAt: true,
  //     updatedAt: true
  //   }
  // }

  {
    name: {
      type: String,
      maxlength: 50
    },
    description: {
      type: String
    },
    logo: {
      type: String
    },
    tags: [{
      type: String
    }]
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }
  }
);

InvoiceSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Invoice", InvoiceSchema);
