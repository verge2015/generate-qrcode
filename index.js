var QRCode = require('qrcode')
const readline = require('readline');

//Initialize readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Input website URL
rl.question('Type website URL: ', function (name) {
    
    //Setting the directory and filename
    QRCode.toFile('./output/QR-Code.png', name, {
        scale: 100,
        color: {
          dark:  '#000000', // QR Code Color
          light: '#FFFFFFFF' // Background Color
        }
      }, function (err) {
        if (err) throw err
        console.log("File Written")
      })

    //Close readlinee
    rl.close();
});

