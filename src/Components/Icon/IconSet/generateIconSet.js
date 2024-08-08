const fs = require('fs');
const path = require('path');

const generatedFileName = 'IconSet.ts';
const mainPath = path.join('src', 'Icons');
const componentsPath = path.join(mainPath, 'svg');
const absoluteMainPath = path.resolve(mainPath);
const absoluteComponentsPath = path.resolve(componentsPath);

fs.readdir(absoluteComponentsPath, (error, files) => {
  if (error) {
    return console.log(error);
  }

  componentFiles = files.filter((file) => file.endsWith('.tsx'));

  const imports = generateImports(componentFiles);
  const iconEnum = generateIconEnum(componentFiles);
  const iconSet = generateIconSet(componentFiles);

  const fileContent = imports + iconEnum + iconSet;

  addFile(
    `${absoluteMainPath}/${generatedFileName}`,
    fileContent,
    generatedFileName,
  );
});

const generateImports = (files) => {
  const imports = files.map((file) => {
    let fileName = file.slice(0, -4);
    return `import ${fileName} from './svg/${fileName}';\n`;
  });
  return `${imports.join('')}\n`;
};

const generateIconEnum = (files) => {
  const enumParts = files.map((file) => {
    let fileName = file.slice(0, -4);
    return `'${fileName.toUpperCase()}' = '${fileName}',\n`;
  });
  return `export enum EIconSet {\n${enumParts.join('')}}\n\n`;
};

const generateIconSet = (files) => {
  const enumParts = files.map((file) => {
    let fileName = file.slice(0, -4);
    return `[EIconSet.${fileName.toUpperCase()}]: ${fileName},\n`;
  });
  return `export const IconSet = {\n${enumParts.join('')}};\n`;
};

const addFile = (filePath, fileData, fileToLog) => {
  fs.writeFile(filePath, fileData, (error) => {
    if (error) {
      return console.log(error);
    }

    console.log(`Запись файла ${fileToLog} завершена`);
  });
};
