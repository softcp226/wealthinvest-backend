const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// const transporter2 = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.cryptocom-mining.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@cryptocom-mining.com",
//       pass: "bishop1@1",
//     },
//   }),
// );


let transporter2 = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "fintexaurum@gmail.com",
    // pass: "desolidboy1",
    pass: "nxnrbkgdbclgkawv",
    // secure:false,
  },
});


let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options2 = (userInfo) => {
  return (mailOptions = {
    from: "support@fintexaurum.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `REFERRAL BONUS CONFIRMATION NOTIFICATION`,
    //   text:"just wanna know if this works",
    html: `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>


  <div class="maincontainer">
    <div class="head-txt">
    <h1 style="text-align: center; font-size: 16px; color: #0c0e28;">
        FINTEX AURUM
      </h1>
      <h3 style="font-size: 15px;">REFERRAL BONUS CONFIRMATION NOTIFICATION</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.first_name} ${userInfo.last_name}, a user that registerd using your referral link just made a deposit and you have recieved 10% referral bonus
     which amounts to ${userInfo.referral_amount} on <b>${datetime}</b>.

    </p>
    <p class="sm-p">
   Your 10% referral bonus has been added to your balance and also reflected on your referral bonus section
    </p>
    <p class="sm-p">
    NB:all  deposit are converted to (united state dollars(USD)) which is the default currency used @panteraming.com.
      For more detailed informations, please contact our customer support or your
      relationship officer
    </p>

    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
    <h1
      style="
        font-size: 18px;
        text-align: center;
        background: #fff;
        color: #0c0e28;;
      "
    >
      FINTEX AURUM
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via fintex aurum
      secured channel,please do not reply to this message all correspondence
      should be addressed to fintexaurum.com or your relationship officer
    </p>
  </div>
</main>

 `,
  });
};
module.exports = { create_mail_options2, transporter2 };
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
