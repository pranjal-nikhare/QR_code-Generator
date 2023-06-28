import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      type: "input",
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    fs.appendFile("filename.txt", url, (err) => {
      if (err) throw err;
      console.log("File created successfully!");

      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream("image1.png"));
      console.log("QR code image created successfully!");
    });
  });
