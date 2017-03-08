// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    var price;
    var article;
    var us_shipping = 7.5;
    var free_shipping = 100;
    var international_shipping = 5;
    var tw_shipping = 2;
    var tax = 0.09;
    var basic = 5;
    var threshold1 = 50;
    var threshold2 = 200;
    var service1 = 0.1;
    var service2 = 0.05;
    var exchange = 31.5;

    document.querySelector("#price").addEventListener("blur",
      function () {
        price = Number(this.value);
    });

    document.querySelector("#article").addEventListener("blur",
      function () {
        article = Number(this.value);
    });

    document.querySelector("#us_shipping").addEventListener("blur",
      function () {
        us_shipping = Number(this.value);
    });

    document.querySelector("#free_shipping").addEventListener("blur",
      function () {
        free_shipping = Number(this.value);
    });

    document.querySelector("#tax").addEventListener("blur",
      function () {
        tax = Number(this.value);
    });

    document.querySelector("#international_shipping").addEventListener("blur",
      function () {
        international_shipping = Number(this.value);
    });

    document.querySelector("#tw_shipping").addEventListener("blur",
      function () {
        tw_shipping = Number(this.value);
    });

    document.querySelector("#basic").addEventListener("blur",
      function () {
        basic = Number(this.value);
    });

    document.querySelector("#threshold1").addEventListener("blur",
      function () {
        threshold1 = Number(this.value);
    });

    document.querySelector("#threshold2").addEventListener("blur",
      function () {
        threshold2 = Number(this.value);
    });

    document.querySelector("#service1").addEventListener("blur",
      function () {
        service1 = Number(this.value);
    });

    document.querySelector("#service2").addEventListener("blur",
      function () {
        service2 = Number(this.value);
    });

    document.querySelector("#exchange").addEventListener("blur",
      function () {
        exchange = Number(this.value);
    });

    document.querySelector("button").addEventListener("click",
      function () {
        if (price === undefined || price === null || price == 0) {
          document.querySelector("#result").textContent = "請輸入商品價值";
        }
        else if (article === undefined || article === null || article == 0) {
          document.querySelector("#result").textContent = "請輸入商品件數";
        }
        else {
          var total = price;
          if (total < free_shipping) {
            total += us_shipping;
          }
          total *= (1 + tax);
          console.log("After tax: " + total);

          total += (article * international_shipping);
          total += tw_shipping;
          console.log("Including all shipping: " + total);

          var service = basic;
          if (price > threshold1) {
            service += (service1 * (price - threshold1));
          }
          if (price > threshold2) {
            service += ((service1 - service2) * (price - threshold2));
          }
          console.log("Service: " + service);

          total += service;
          console.log("Total(USD): " + total);
          total *= exchange;
          document.querySelector("#result").textContent = "總金額(NTD): " + total + "; 服務費(NTD): " + service*exchange;
        }

    });
});




