const Investment = require("../model/investment");

// const select_investment_end_time_ = (req) => {
//   if (req.body.return_time == "daily_return") {
//     // let currentdate = new Date();
//     // currentdate.setDate(currentdate.getDate() + 1);
//     // let datetime = `${currentdate.getFullYear()}-${
//     //   currentdate.getMonth() + 1
//     // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//     // return datetime;
//     let date = new Date();
//     date.setDate(date.getDate() + 1);
//     let end_date = date.getTime();
//     return end_date;
//   } else {
//     // let currentdate = new Date();
//     // currentdate.setDate(currentdate.getDate() + 7);
//     // let datetime = `${currentdate.getFullYear()}-${
//     //   currentdate.getMonth() + 1
//     // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//     // return datetime;

//     let date = new Date();
//     date.setDate(date.getDate() + 7);
//     let end_date = date.getTime();
//     return end_date;
//   }
// };

const select_investment_end_time = (req) => {
  
  switch (req.body.investment_plan) {
    case "PLAN A":
      var date = new Date();
      date.setDate(date.getDate() + 1);
      var end_date = date.getTime();
      var return_time = "After 24 Hours ";
      return { end_date, return_time };
      break;

    case "PLAN B":
      var date = new Date();
      date.setDate(date.getDate() + 2);
      var end_date = date.getTime();
      var return_time = "After 48 Hours";
      return { end_date, return_time };
      break;

    case "PLAN C":
      var date = new Date();
      date.setDate(date.getDate() + 3);
      var end_date = date.getTime();
      var return_time = "After 72 Hours";
      return { end_date, return_time };
      break;

    case "PLAN D":
      var date = new Date();
      date.setDate(date.getDate() + 5);
      var end_date = date.getTime();
      var return_time = "After 120 Hours";
      return { end_date, return_time };
      break;

    default:
      var date = new Date();
      date.setDate(date.getDate() + 1);
      var end_date = date.getTime();
      var return_time = "After 24 Hours";
      return { end_date, return_time };
      break;
  }
};

const create_investment = async (req) => {
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 1000);
  console.log("end time", select_investment_end_time(req));

  const investment = await new Investment({
    user: req.body.user,
    transaction_date: datetime,
    refrence_number: `Ref#${++ref} `,
    amount: req.body.investment_amount,
    return_time: select_investment_end_time(req).return_time,
    pending_profit: req.body.profit,
    investment_plan: req.body.investment_plan,
    investment_end_date: select_investment_end_time(req).end_date,
  });
  await investment.save();
  return investment;
};
module.exports = create_investment;
