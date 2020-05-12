const mongoose = require("mongoose");
const { MONGO_URI } = require("../config");
const { InvoiceModel } = require("../models");

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const invoices = [ 
  { 
    line_number: 3013453456,
  	formatted_line_number: "301 345 3456",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422498,
  	invoice_status: "Vencida",
  	amount: 124.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0   
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4   
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  },
  
  { 
    line_number: 3023453963,
  	formatted_line_number: "302 345 3963",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422582,
  	invoice_status: "Por pagar",
  	amount: 150.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0   
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4   
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  },
  
  { 
    line_number: 3033453586,
  	formatted_line_number: "303 345 3586",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422586,
  	invoice_status: "Vencida",
  	amount: 200.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0   
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4   
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  },
  
  { 
    line_number: 3043453485,
  	formatted_line_number: "304 345 3485",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422485,
  	invoice_status: "Por pagar",
  	amount: 124.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0   
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4   
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  },
  
  { 
    line_number: 3053453241,
  	formatted_line_number: "305 345 3241",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422241,
  	invoice_status: "Por pagar",
  	amount: 124.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0   
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4   
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  },
  
  { 
    line_number: 3063453023,
  	formatted_line_number: "306 345 3023",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422023,
  	invoice_status: "Por pagar",
  	amount: 600.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0   
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4   
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  },
  
  { 
    line_number: 3073453482,
  	formatted_line_number: "307 345 3482",
  	expiration_date: "01/09/2019",
  	last_payment_date: "12/08/2019",
  	payment_reference: 234422482,
  	invoice_status: "Vencida",
  	amount: 150.000,
  	currency: "$",
  	country_mobile_code: 57,
  	payment_history: [    
  		{       
  			period: "08 Jun 2019 al 08 de Jul de 2019",      
  			amount: 30.000,      
  			balance: 110   
  		},   
  		{       
  			period: "08 Abr 2019 al 08 de May de 2019",      
  			amount: 30.000,      
  			balance: 150   
  		},   
  		{       
  			period: "08 Jul 2019 al 08 de Ago de 2019",  
  			amount: 30.000,      
  			balance: 0
  		},   
  		{       
  			period: "08 Mar 2019 al 08 de Abr de 2019",      
  			amount: 34.000,      
  			balance: 4
  		},   
  		{       
  			period: "08 May 2019 al 08 de Jun de 2019",      
  			amount: 32.600,      
  			balance: 50   
  		}
  	]
  }
]

InvoiceModel.create(invoices)
.then(() => {
  console.log("invoices created");
  mongoose.disconnect();
})
.catch( console.log );