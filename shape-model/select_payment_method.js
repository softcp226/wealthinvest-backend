const select_payment_method = (payment_method) => {
  switch (payment_method) {
    case "Bitcoin":
      return {
        payment_method: "Bitcoin",
        payment_qr_code: "css/images/btc.jpeg",
        payment_wallet: "bc1qml2dae2kdhnp56l4dy6qasgpypetj5v77g3gwy",
      };
      break;

    case "Ethereum":
      return {
        payment_method: "Ethereum",
        payment_qr_code: "css/images/eth.jpeg",
        payment_wallet: "0x37685e293cF07283589Ce1116135acA198F47d9E",
      };
      break;

    case "USDT":
      return {
        payment_method: "USDT",
        payment_qr_code: "css/images/usdt.jpeg",
        payment_wallet: "TPg1unJSQYyqm7RUcrp8k66F7F32cuPgJ8",
      };
      break;

    // case "Paypal":
    //   return {
    //     payment_method: "Paypal",
    //     // payment_qr_code:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    // case "Perfect Money":
    //   return {
    //     payment_method: "Perfect Money",
    //     // payment_qr_code:
    //     //   "css/images/bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmy.png",
    //     payment_wallet: "bc1q8f3c2lmav0uxkgkm90c4l2eqwy6k2agz0nqfmyPAYPAL",
    //   };
    //   break;

    default:
      return {
        payment_method: "Bitcoin",
        payment_qr_code: "css/images/btc.jpeg",
        payment_wallet: "bc1qml2dae2kdhnp56l4dy6qasgpypetj5v77g3gwy",
      };
      break;
  }
};

module.exports = select_payment_method;
