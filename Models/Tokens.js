function Tokens() {
  this.states = []
  this.alphabet = []
  this.initialState = []
  this.finalStates = []
  this.deltas = []
}

Tokens.prototype.createTokens = function (str) {
  this.lines = str.value.split("\n");
  for (let i = 0; i < this.lines.length; i++) {
    switch (i) {
      case 0:
        let states = this.lines[i].split(/\.*(\{|\}|\s|[,]|\=)/)
        states = states.filter(e => e !== "=" && e !== "{" && e !== "}" && e !== "" && e !== " " && e !== "," && !/^[A-D-F-Za-z]*$/.test(e))
        this.verifyNumber(states, this.states)
        break;
      case 1:
        let letters = /^[A-D-F-Za-z]*$/; 
        let alphabet = this.lines[i].split(/\.*(\{|\}|\s|[,]|\=)/)
        alphabet = alphabet.filter(element => element.match(letters) && element !== "")
        alphabet.forEach(letter => this.alphabet.push(letter))
        break
      case 2:
        let initialState = this.lines[i].split(/\.*(\{|\}|\s|[,]|\=)/)
        initialState = initialState.filter(e => e !== " " && e !== "")
        let isNumber = !isNaN(initialState[2])
        if (isNumber) {
          this.initialState = parseInt(initialState[2])
        } else {
          let msg = `Esperamos un número en la tercer posición con formato "S = numero" pero ingresaste **${initialState[2]}**`;
          alert(msg);
          throw new Error(msg)
        }
        break
      case 3:
        let finalStates = this.lines[i].split(/\.*(\{|\}|\s|[,]|\[|\]|\=)/)
        finalStates = finalStates.filter(e => e !== "=" && e !== "{" && e !== "}" && e !== "" && e !== " " && e !== "," && !/^[A-D-F-Za-z]*$/.test(e))
        this.verifyNumber(finalStates, this.finalStates)
        break;
      default:
        let letrasornumbers = /^[A-Za-z-0-9]*$/; 
        let deltas = this.lines[i].split(/\.*(\{|\}|\s|[,]|\=)/)
        console.log(deltas)
        deltas = deltas.filter(element => element.match(letrasornumbers) && element !== "")
        let object = this.verifyNumberOrString(deltas)
        this.deltas.push(object)
        break
    }
  }
  return {
    states: this.states,
    alphabet: this.alphabet,
    initialState: this.initialState,
    finalStates: this.finalStates,
    deltas: this.deltas
  }
}

Tokens.prototype.verifyNumber = function (str, array) {
  for (let i = 0; i < str.length; i++) {
    let isNumber = !isNaN(str[i])
    if (isNumber) {
      array.push(parseInt(str[i]))
    }
  }
}

Tokens.prototype.verifyNumberOrString = function (str) {
  let object = []
  for (let i = 0; i < str.length; i++) {
    let isNumber = !isNaN(str[i])
    if (isNumber) {
      object.push(parseInt(str[i]))
    } else {
      object.push(str[i])
    }
  }
  return object
}


export default Tokens;