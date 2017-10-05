var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
  };

  var companySalesData = [
    {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
    },
    {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
    }
  ];


function calculateStuff() {
    var result = {};

    for (var i = 0; i < companySalesData.length; i++) {
      var finances = companySalesData[i];
      var companyName = finances.name
      var province = finances.province;
      var sales = finances.sales;

      console.log(companyName);
      var totalSales = calculateSales(sales);
      var taxRate = getTaxRate(province);
      //var totalTaxes = sales... * rate....;
      console.log(totalSales);


      if (companyName in result) {
        result[companyName].totalSales += totalSales;
        //result[companyName]..... = totalTaxes
        console.log("x")
        } else {
        result[companyName] = {
          totalSales: totalSales,
          //totalTaxes
        }
      }

    }


    console.log (result);
}

calculateStuff();

function getTaxRate (province) {
  var result;
  if (province in salesTaxRates) {
  return result;
  console.log (result);
}
}


function calculateSales (sales) {
  var result = 0;
   for (var j = 0; j < sales.length; j++) {
        result += sales[j];
    }
    return result;
}



// function calculateSalesTax(salesData, taxRates) {


// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/