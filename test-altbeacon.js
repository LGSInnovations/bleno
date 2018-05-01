var bleno = require('./index');

console.log('bleno - AltBeacon');

bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === 'poweredOn') {
    bleno.startAdvertisingAltBeacon(0x0002, '0102030405060708090a0b0c0d0e0f99', 0xB9, 55);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function() {
  console.log('on -> advertisingStart');
});

bleno.on('advertisingStop', function() {
  console.log('on -> advertisingStop');
});
