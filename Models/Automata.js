function Automata(object) {
  this.createTokens = object.Tokens;
  this.states = [];
  this.alphabet = [];
  this.initialState = [];
  this.finalStates = [];
}

Automata.prototype.getTokens = function(str) {
  let data = this.createTokens.createTokens(str);
  this.states = data.states;
  this.alphabet = data.alphabet;
  this.initialState = data.initialState; // 0
  this.finalStates = data.finalStates;
  this.deltas = data.deltas;
  this.string = window.prompt("Ingrese un cadena de Texto:");
  this.str = this.string.split("");
  debugger;
  // Q = {0, 1, 2, 3, 4}
  // E = {a, b, c, d}
  // S = 0
  // F = {2, 3}
  let array = new Array();
  for (let i = 0; i <= this.states[this.states.length - 1]; i++) {
    array[i] = [];
  }
  for (let arr = 0; arr < this.deltas.length; arr++) {
    let first = this.deltas[arr][0];
    let second = this.deltas[arr][1];
    let result = this.deltas[arr][2];
    array[first][second] = result;
  }

  // arr[0]['a'] = 1
  // arr[1]['b'] = 1
  // arr[1]['a'] = 2
  // arr[1]['d'] = 3
  // arr[1]['c'] = 4
  // arr[4]['c'] = 4
  // arr[4]['a'] = 3
  // console.log(array);
  this.runString(array);
};

Automata.prototype.runString = function(array) {
  let state = this.initialState;
  debugger;
  for (let letter = 0; letter < this.str.length; letter++) {
    state = array[state][this.str[letter]];
    if (state !== undefined) {
      if (this.str.length - 1 === letter) {
        if (this.finalStates.includes(state)) {
          success(this.string);
        } else {
          fail(this.string);
        }
      }
    } else {
      fail(this.string);
    }
  }
};

function success(str) {
  console.log("Aquí debe de salir el progra");
  swal(
    "Buen trabajo!",
    `El string ${str} es valido por el automata :)`,
    "success"
  );
  throw new Error();
}

function fail(str) {
  swal("Lo sentimos", `El string ${str} No es valido por el autómata`, "error");
  throw new Error("string no permitido");
}

export default Automata;
