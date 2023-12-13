class Account {
  id;
  userName;
  name;
  creditCardNumber;
  expiryDate;

  coffeeCoins = 4000;
  constructor(
    iD,
    username,
    customername,
    creditcardnumber,
    expirydate,
    coffecoins
  ) {
    this.id = iD;
    this.userName = username;
    this.name = customername;
    this.creditCardNumber = creditcardnumber;
    this.expiryDate = expirydate;
    this.coffeeCoins = coffecoins;
  }
  addCoins(inputAmount) {
    this.coffeeCoins += Math.abs(inputAmount);
  }
  retractCoins(inputAmount) {
    this.coffeeCoins -= Math.abs(inputAmount);
  }
}
class PremiumAccount extends Account {
  giftinghistory;
  constructor(iD, username, customername, billing1, billing2, coffecoins) {
    super(iD, username, customername, billing1, billing2, coffecoins);
    this.giftinghistory = [];
  }
  giftCoins(giftamount) {
    this.coffeeCoins += giftamount;
    const promise = new Promise((resolve, reject) => {
      if (!(giftamount += this.coffeeCoins))
        reject("No bonus made" + " " + this.coffeeCoins);
      else resolve("Transaction bonus complete" + " " + this.coffeeCoins);
    });
    promise
      .then((value) => {
        console.log("Done!", value);
        this.giftinghistory.push({ amount: value });
        console.log(this.giftinghistory);
      })
      .catch((error) => console.log("Error!", error));
  }
}
class CoffeeShop {
  accountvar = new Account(
    5466545328,
    "serah",
    "serah snow",
    "creditCardNumber: 3654-4574-5998-2345",
    "expiryDate: 2-3-2019",
    8000
  );
  premiumvar = new PremiumAccount(
    5986549067,
    "jude",
    "evon",
    "creditCardNumber: 3654-4574-5998-2345",
    "expiryDate: 2-3-2019",
    9000
  );

  purchasecoffee(Amount) {
    this.premiumvar.coffeeCoins += Math.abs(Amount);

    console.log(
      this.premiumvar.coffeeCoins +
        " " +
        "selection of allowed currencies" +
        " " +
        "USD, NGN, EUR, GBP, AUD"
    );
  }

  coffeetype = [
    "Caffelatte 70",
    "Cafemocha 50",
    "Espresso 30",
    "Flatwhite 55",
    "Frappe 25",
  ];

  orderCoffee(accountid) {
    //   // i = 0;
    //   // while (i < this.coffeetype.indexOf(this.coffeetype.length)) {
    //   //   i++;
    //   //   console.log(i);
    //   // }
    //   //orderaccounttype;
    //   coins1 = 10;
    //   coins2 = 5;
    //   if (accountid == this.premiumvar.id) {
    //     this.premiumvar.coffeeCoins += coins1;
    //     console.log(this.premiumvar.coffeeCoins);
    //   } else if (accountid == this.accountvar.id) {
    //     this.accountvar.coffeeCoins += coins2;
    //     console.log(this.premiumvar.id);
    //   } else {
    //     console.log("please input credentials");
    //   }
  }
}
function myfunction() {
  class1 = new Account(
    5466545328,
    "serah",
    "serah snow",
    "creditCardNumber: 3654-4574-5998-2345",
    "expiryDate: 2-3-2019",
    8000
  );
  class2 = new PremiumAccount(
    5986549067,
    "jude",
    "evon",
    "creditCardNumber: 3654-4574-5998-2345",
    "expiryDate: 2-3-2019",
    9000
  );

  class3 = new CoffeeShop();
  class2.retractCoins(2000);
  class2.giftCoins(40);
  console.log(class1);
  console.log(class2);
  class3.purchasecoffee(3000);
  console.log(class2);
  //class3.orderCoffee(5986549067);
  console.log(class2);
  // // const value = await createPromise("Thank you for your purchase");
  // // console.log(value);
  // // return value;
}

myfunction();
