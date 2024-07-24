const fs = require('fs');
const path = require('path');

const mainPath = path.join('src', 'Icons', 'svg');
const absolutePath = path.resolve(mainPath);

fs.readdir(absolutePath, (error, files) => {
	if (error) {
		return console.log(error);
	}
	svgFiles = files.filter((file) => file.endsWith('.svg'));
	svgFiles.forEach(convertFileToComponent);
});

const convertFileToComponent = (file) => {
	let fileName = file.slice(0, -4);
	let filePath = `${absolutePath}${file}`;
	let tsxFilePath = `${absolutePath}${fileName}.tsx`;

	fs.readFile(filePath, (error, data) => {
		if (error) {
			return console.log(error);
		}

		const fileData = prepareFileData(fileName);

		addFile(tsxFilePath, fileData, file);

		deleteFile(filePath);
	});
};

// find place for {...props} string
const insertProps = (data) => {
	const index = data.indexOf('>');
	return data.slice(0, index) + ' {...props}' + data.slice(index);
};

const prepareFileData = (fileName) => {
	return (
		`import { IconProps } from '../types';\n\nconst Icon_${fileName}: React.FC<IconProps> = (props) => (\n` +
		insertProps(data.toString()) +
		`);\n\nexport default Icon_${fileName};\n`
	);
};

const addFile = (filePath, fileData, fileToLog) => {
	fs.writeFile(filePath, fileData, (error) => {
		if (error) {
			return console.log(error);
		}

		console.log(`Запись файла ${fileToLog} завершена`);
	});
};

const deleteFile = (filePath) => {
	fs.unlink(filePath, (error) => {
		if (error) {
			return console.log(error);
		}
		console.log(`Файл ${filePath} удален`);
	});
};
