# generate-qrcode

generate-qrcode is NodeJS for creating a qrcode.

## Version of npm and NodeJS
```bash
 NodeJS v14.19.1
 npm 6.14.16
```

## Checking your version of npm and Node.js
```bash
 node -v
 npm -v
```

## Packages
```bash
 fs
 readline
 qrcode
```

## Installation
```bash
 npm i qrcode
```

## Usage
```bash
 node index.js
```

## Source Code
```javascript
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

```


## Output
This Sameple QR Code is a link to this repository.
![QR-Code](https://user-images.githubusercontent.com/16742524/185793281-cb300ece-9a43-4d0e-8e36-0e6a7bcf8c0a.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)
