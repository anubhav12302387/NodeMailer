const nodeMailer = require('nodemailer')

let transportmail = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:'youremailaddress',
        pass:'apppassword'
    }
})

let mailContent = {
    from:"youremailaddress",
    to:"receiveremailadress",
    subject:"Testmail",
    text:"This is a testing mail"
}

transportmail.sendMail(mailContent,function(err,val){
    if(err){
        console.log(err)
    }else{
        console.log(val.response," !!! Sent Mail Sucessfully !!!")
    }
})

//to run this type: Node index.js