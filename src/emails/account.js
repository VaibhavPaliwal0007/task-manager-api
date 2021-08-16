const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'vaibhavpaliwal24@gmail.com',
        subject : 'Sir, when you gonna start DSA on team Indefinite',
        text : `Hello ${ name }, I am sending you an automatic email while logging you in from the postmand post method i created from express. When you gonna start the indefinite sessions?`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'vaibhavpaliwal24@gmail.com',
        subject : 'Sorry to see you go!!!',
        text : 'Why you delete your account? Do you subscribe to Achut channel? I hope to see you back sometime soon!!!'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}