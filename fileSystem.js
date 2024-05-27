const fs = require('fs');

// // Reading a file
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('Last line');




// // Writing into an exisiting file
// fs.writeFile('./docs/blog1.txt', 'Hello world!', () => {
//     console.log('File was written');
// });

// // writing into a non existing file
// fs.writeFile('./docs/blog2.txt',
//     'Hi! \nHello! \nHow are you?', () => {
//         console.log('created and written into the file');
//     }
// );



// // Directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         console.log(err);
//     });
//     console.log('folder created');
// } else {
//     fs.rmdir('./assets', (err) => {
//         console.log(err);
//     });
//     console.log('deleted the folder');
// }



// Delete file
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
} else {
    console.log('file does not exist');
}