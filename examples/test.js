const {CharacterSet} = require("../node-thermal-printer");
const ThermalPrinter = require('../node-thermal-printer').printer;
const Types = require('../node-thermal-printer').types;

async function testConnection() {
  const printer = new ThermalPrinter({
    type: Types.SAM4S,
    interface: 'tcp://192.168.50.253:6001',
    width: 42,
    characterSet: CharacterSet.KOREA
  });

  printer.beep();
  printer.getStatus();
  printer.cut();

  try {
    const status = await printer.execute();
    console.log('Printer status:', status);
  } catch (e) {
    console.error('Print failed:', e);
  }
}

testConnection();
