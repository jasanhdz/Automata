import readFile from './utils/readFile.js';
import GetTokens from './Models/GetTokens.js';

const $runAutomata = document.getElementById('run')
const $file = document.getElementById('files');
const $textarea = document.getElementById('textarea');


$runAutomata.onclick = () => {
  new GetTokens().createTokens($textarea)
}

$file.onchange = () => {
  readFile($file, $textarea)
}