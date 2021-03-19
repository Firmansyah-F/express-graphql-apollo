const nodemailer = require('nodemailer');
const TaskController = require('./../../controller/taskController')
const { task, user } = require("./../db/models");

const dataTask = await task.findOne({
    where: { id: req.params.id, userId: req.user.id },
  });

  if (dataTask) {
    const dataUser = {
      taskId: dataTask.dataValues.id,
      userId: req.user.id,
      status: dataTask.dataTask.status
    };
  }
console.log(status)
if (status == "complete"){
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "de8e13c5a79801",
      pass: "0d3c30b591df9b"
    }
  });

const mailOptions = {
    from: 'sutanfikri26@gmail.com',
    to: 'fikrifirmansyah096@gmail.com',
    subject: 'Sending todo status using Nodejs',
    text: 'task selesai'
};

transport.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log('Email sent: ' + info.response);
});

} else{
  console.log("pekerjaan belum selesai")
}

