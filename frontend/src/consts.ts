export const INJECT_JS = `window.console = {
  log: function(str) {
    window.parent.postMessage(JSON.stringify({type:"log",message:str}), "*")
  },
  warn: function(str) {
    window.parent.postMessage(JSON.stringify({type:"warn",message:str}), "*")
  },
  error: function(str) {
    window.parent.postMessage(JSON.stringify({type:"error",message:str}), "*")
  }
}`;
