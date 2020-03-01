const menus = {
  main: `
    txp [command] <options>

    start .............. show logo, release date, and short poem by Dean Allen
    verson ........... show current version installed
    new ............ in theory this creates a new txp.js site
    help ............... show help menu for a command`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
