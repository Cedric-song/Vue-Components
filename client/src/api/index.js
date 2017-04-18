const devRootUrl = 'http://59.46.168.46:3006/rootPath'

const rootUrl = devRootUrl
export default {
  myService: rootUrl.concat('/getMyservice'),
  machineList: rootUrl.concat('/getMachineList'),
  machineDetail: rootUrl.concat('/getMachineDetails'),
  reserveList: rootUrl.concat('/getMyReserveList'),
  fetchListData: rootUrl.concat('/fetchListData'),
  getExchangeSearchDetail: rootUrl.concat('/getExchangeSearchDetail'),
  reserve: rootUrl.concat('/reserve'),
  cancelReserve: rootUrl.concat('/cancelReserve')
}
