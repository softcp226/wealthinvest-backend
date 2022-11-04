const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Transaction = require("../model/transaction");
const Admin = require("../model/admin");
const Withdrawal_request = require("../model/withdrawal_request");
const User = require("../model/user");
const validate_admin_approve_withdrawal = require("../validation/validate_admin_approve_withdrawal");
const {
  create_mail_options,
  transporter,
} = require("../mailer/approve_withdrawal");
const { verify } = require("jsonwebtoken");

Router.post("/", verifyToken, async (req, res) => {
    console.log("request received",req.body)
  const request_isvalid = validate_admin_approve_withdrawal(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });
  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });

    const withdrawal_request = await Withdrawal_request.findById(
      req.body.withdrawal_request,
    );
    if (!withdrawal_request)
      return res.status(403).json({
        error: true,
        errMessage: "The requested withdrawal request was not found",
      });

    const user = await User.findById(withdrawal_request.user);

    if (!user)
      return res.status(400).json({
        error: true,
        errMessage:
          "the user that made the withdrwalt you are trying to approve no longer exist",
      });

    const transaction = await Transaction.findById(
      withdrawal_request.transaction,
    );
    if (!transaction)
      return res.status(400).json({
        error: true,
        errMessage:
          "You can't approve this withdrawal request because the transaction was not found",
      });
    transaction.set({ status: "success" });
    await transaction.save();

    await Withdrawal_request.findByIdAndDelete(req.body.withdrawal_request);

    transporter.sendMail(
      create_mail_options({
        first_name: user.first_name,
        last_name: user.last_name,
        reciever: user.email,
      }),
      (err, info) => {
        if (err) return console.log(err.message);
        console.log(info);
        // return res.status(400).json({
        //   error: true,
        //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
        // });
      },
    );
    res.status(200).json({
      error: false,
      message: "Success you approved the withdrawal request",
    });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
