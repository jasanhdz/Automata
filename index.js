import readFile from './utils/readFile.js';
import Tokens from './Models/Tokens.js';
import Automata from './Models/Automata.js'

const $runAutomata = document.getElementById('run')
const $file = document.getElementById('files');
const $textarea = document.getElementById('textarea');


$runAutomata.onclick = () => {
  new Automata({ Tokens: new Tokens(), })
    .getTokens($textarea)
}

$file.onchange = () => {
  readFile($file, $textarea)
}