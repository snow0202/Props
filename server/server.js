const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async(req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'cbbs0202@gmail.com',
          pass: 'llzn yzvx ddgf vpji',
        }
      });

    const ReceiveMailOptions = {
        from: 'cbbs0202@gmail.com',
        to: 'cbbs0202@gmail.com',
        subject: `${name}から問い合わせ`,
        text: `Email: ${email}\n\n本文: ${message}`,
    }

    try {
        await transporter.sendMail(ReceiveMailOptions)
        res.status(200).json({ status: 'メールが送信された' });
    } catch(error) {
        console.log(error)
        res.status(500).json({ status: 'メールが失敗！' });
    }

  });

app.listen(port, () => {
  console.log(`サーバーが ${port} で起動しました`);
});
