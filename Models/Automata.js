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
  this.initialState = data.initialState;
  this.finalStates = data.finalStates
  console.log(this.states)
  console.log(this.alphabet)
  console.log(this.initialState)
  console.log(this.finalStates)
}

export default Automata;