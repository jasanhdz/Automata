function Automata(object) { 
  this.createTokens = object.Tokens
  this.states = []
  this.alphabet = []
  this.initialState = []
  this.finalStates = []
}

Automata.prototype.getTokens = function (str) {
  let data = this.createTokens.createTokens(str)
  this.states = data.states;
  this.alphabet = data.alphabet;
  this.initialState = data.initialState; // 0 
  this.finalStates = data.finalStates
  this.deltas = data.deltas
  this.string = window.prompt("Ingrese un cadena de Texto:")
  this.str = this.string.split("");
  // alert(`La cadena que ingresaste es: ${this.string}`)
  let state = this.initialState;
  console.log(this.deltas);
  // console.log(this.states)
  // console.log(this.states[this.states.length - 1])

// Q = {0, 1, 2, 3, 4}
// E = {a, b, c, d}
// S = 0
// F = {2, 3}
  
  let array = new Array();
  for (let i = 0; i <= this.states[this.states.length - 1]; i++) {
    array[i] = []
  }
  for (let arr = 0; arr < this.deltas.length; arr++) {
    let first = this.deltas[arr][0]
    let second = this.deltas[arr][1]
    let result = this.deltas[arr][2]
    // console.log(first, second, result);
    array[first][second] = result
  }
  // arr[0]['a'] = 1
  // arr[1]['b'] = 1
  // arr[1]['a'] = 2
  // arr[1]['d'] = 3
  // arr[1]['c'] = 4
  // arr[4]['c'] = 4
  // arr[4]['a'] = 3
  console.log(array);
  for (let vocal = 0; vocal < this.str.length; vocal++) {
    if (state === 0) {
      state = array[state][this.str[vocal]]
      if (state !== undefined) {
        if (this.str.length - 1 === vocal) {
          if (this.finalStates.includes(state)) {
            swal("Buen trabajo!", `El string ${this.string} es valido por el automata :)`, "success");
            break
          } else {
            al("Lo sentimos", `El string ${this.string} No es valido por el autómata`, "error");
            break
          }
        } else {
          this.apuntador(state, vocal)
        }
      } else {
        swal("Lo sentimos", `El string ${this.string} No es valido por el autómata`, "error");
        break
      }
    } 
    else {
      if (this.str.length - 1 === vocal) {
        state = array[state][this.str[vocal]]
        if (state !== undefined) {
          if (!this.finalStates.includes(state)) {
            swal("Lo sentimos", `El string ${this.string} No es valido por el autómata`, "error");
            break
          } else {
            swal("Buen trabajo!", `El string ${this.string} es valido por el automata :)`, "success");
            break
          }
        } else {
          swal("Buen trabajo!", `El string ${this.string} es valido por el automata :)`, "success");
          break
        }
      } else {
        if (array[state][this.str[vocal]] !== undefined) {
          state = array[state][this.str[vocal]]
          this.apuntador(state, vocal)
        } else {
          swal("Lo sentimos", `El string ${this.string} No es valido por el autómata`, "error");
          break
        }
      }
    }
  } 
  
}
Automata.prototype.apuntador = function subir(state, vocal) {
    if (this.alphabet.includes(this.str[vocal])) {
      if (this.finalStates.includes(state)) {
        console.log("Aquí debe de salir el progra");
        swal("Buen trabajo!", `El string ${this.string} es valido por el automata :)`, "success");
        throw new Error()
      } 
    } else {
      swal("Lo sentimos", `El string ${this.string} No es valido por el autómata`, "error");
      throw new Error("string no permitido")
    }
}




export default Automata;