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
    case "STARTER PLAN":
      var date = new Date();
      date.setDate(date.getDate() + 7);
      var end_date = date.getTime();
      var return_time = "After 7 days";
      return { end_date, return_time };
      break;

    case "ZONAL REPRESENTATIVE":
      var date = new Date();
      date.setDate(date.getDate() + 20);
      var end_date = date.getTime();
      var return_time = "After 20 days";
      return { end_date, return_time };
      break;

    case "AMBASSADOR PLAN":
       var date = new Date();
       date.setDate(date.getDate() + 30);
       var end_date = date.getTime();
       var return_time = "After 30 days";
       return { end_date, return_time };
      break;

    default:
      var date = new Date();
      date.setDate(date.getDate() + 7);
      var end_date = date.getTime();
      var return_time = "After 7 days";
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
