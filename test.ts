import BBPix from './'

const bbpix = new BBPix({
  clientId: '',
  clientSecret: '',
  devAppKey: '',
  env: 'sandbox'
})

bbpix.consultaCobranca('123')