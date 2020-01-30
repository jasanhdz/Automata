function GetTokens() {
  this.states = []
  this.alphabet = []
  this.initialState = []
  this.finalStates = []
}

GetTokens.prototype.createTokens = function (str) {
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
          alert(`Esperamos un número en la tercer posición con formato "S = numero" pero ingresaste **${initialState[2]}**`)
        }
        break
      case 3:
        let finalStates = this.lines[i].split(/\.*(\{|\}|\s|[,]|\=)/)
        finalStates = finalStates.filter(e => e !== "=" && e !== "{" && e !== "}" && e !== "" && e !== " " && e !== "," && !/^[A-D-F-Za-z]*$/.test(e))
        this.verifyNumber(finalStates, this.finalStates)
    }
  }
  console.log(this.states)
  console.log(this.alphabet)
  console.log(this.initialState)
  console.log(this.finalStates)
}

GetTokens.prototype.verifyNumber = function (str, array) {
  for (let i = 0; i < str.length; i++) {
    let isNumber = !isNaN(str[i])
    if (isNumber) {
      array.push(parseInt(str[i]))
    }
  }
}

export default GetTokens;