const fs = require('fs');
const path = require('path');

// HTML 파일이 있는 디렉토리의 실제 경로로 설정하세요
const directoryPath = 'C:\\Users\\lruhi\\OneDrive\\문서\\JHL\\23. 세무회계사무소\\6. 홈페이지\\3. Home\\deployment\\article';

function removeHtmlExtension(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    const result = data.replace(/\.html/g, '');

    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err);
        return;
      }

      console.log(`Processed ${filePath}`);
    });
  });
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (path.extname(file) === '.html') {
      removeHtmlExtension(filePath);
    }
  });
});
