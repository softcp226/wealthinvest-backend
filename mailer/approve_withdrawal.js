const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "panteramining642@gmail.com",
    // pass: "desolidboy1",
    pass: "cvqydopvaddyfnfi",
    // secure:false,
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@panteramining.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: ` Withdrawal Approval Notification`,
    //   text:"just wanna know if this works",
    html: `
 <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main    style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background-size: cover;
  "
>
   
  
    <div class="head-txt">

      <h3 style="text-align: center; font-size: 16px; color: #0c0e28">Withdrawal Approval Notification</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.first_name} ${userInfo.last_name}, this email is to notify your deposit has been proccessed and approved 
      on <b>${datetime}</b>.
    your fund has been sent to the walllet address you specified during the time of withdrawal.
    </p>
    <p class="sm-p">
    NB: 
      For more detailed informations, please contact our customer support or your
      relationship officer.
    </p>

   
    <br />
    <h1 style="  font-size: 17px; text-align: center;  background: #eee; color: #fff;" >CRYPTOCOM MINING</h1>
   <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via cryptocom mining
      secured channel,please do not reply to this message all correspondence
      should be addressed to cryptocom-mining.com or your relationship officer
    </p>
  </div>
</main>
 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };