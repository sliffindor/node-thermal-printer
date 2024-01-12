const {CharacterSet} = require("../node-thermal-printer");
const ThermalPrinter = require('../node-thermal-printer').printer;
const Types = require('../node-thermal-printer').types;

async function testConnection() {
  const printer = new ThermalPrinter({
    type: Types.SAM4S,
    interface: 'tcp://192.168.0.192',
    width: 42,
    characterSet: CharacterSet.KOREA
  });

  printer.beep();

  printer.drawLine();
  // printer.setTextQuadArea();
  printer.setTextSize(2, 2);
  printer.println("Table No.1");
  printer.println("==============");
  printer.println("엄청나게큰글씨입니다 333");
  printer.newLine();
  printer.println("참치 => 2");
  printer.newLine();
  printer.println("참치 => 2");
  printer.newLine();
  // printer.tableCustom([
  //   { text: 'ASDASDAS', align: 'LEFT', width: 0.33 / 3 },
  //   {
  //     text: 'ASDASDASD', align: 'CENTER', width: 0.33 / 3, bold: true,
  //   },
  //   { text: 'EFFAFAWDFAWD', align: 'RIGHT', width: 0.33 / 3 },
  // ]);
  printer.leftRight("참치탕수육볶밥", "1", 3);
  printer.cut();
  // printer.getStatus();

  try {
    const status = await printer.execute();
    console.log('Printer status:', status);
  } catch (e) {
    console.error('Print failed:', e);
  }
}

testConnection();
