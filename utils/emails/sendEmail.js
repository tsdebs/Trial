const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs =require("fs");
const path = require("path");

const sendEmail = async (email,subject, payload, template)=> {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        const source = fs.readFileSync(path.join(__dirname,template), "utf8");
        const compiledTemplate = handlebars.compile(source);
        const options = ()=> {
            return {
                from: process.env.FROM_EMAIL,
                to: email,
                subject: subject,
                html: compiledTemplate(payload),
            };
        };
        transporter.sendMail(options(), (error,info)=>{
            if(error){
                return error;
            }else {
                return res.status(200).json({
                    success: true,
                });
            }
        });
    }catch (error){
        return error;
    }
};
module.exports = sendEmail;

/*let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com',
        pass: '1234'
    }
});
 
let mailDetails = {
    from: 'xyz@gmail.com',
    to: 'abc@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});*/