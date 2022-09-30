// const contractsData = [
//   {
//     address: "0xe27969820B3F24f192c774a19AdFaeAAF73A0556",
//     name: "Legendary",
//     start: 1660672800,
//     end: 1660759200,
//     whitelist: 150,
//     totalSupply: 150,
//     deltaSupply: -7,
//     max: 3,
//     price: "1.5",
//   },
//   {
//     address: "0x1bc2Cb2168B00170B3bE4b280F230DbC58D502a3",
//     name: "Rare",
//     start: 166200840,
//     end: 1664496000,
//     totalSupply: 5000,
//     deltaSupply: 0,
//     max: 10,
//     price: "0.12",
//   },
//   {
//     address: "0x69C113702b55f3785c3C13458Fd31605CD79Fd81",
//     name: "Epic",
//     start: 16608456000,
//     end: 16608528000,
//     whitelist: 650,
//     totalSupply: 650,
//     deltaSupply: 0,
//     max: 3,
//     price: "0.39",
//   },
//   {
//     address: "0x70959716f53b1a4FaC931360a21c991C6e62c98A",
//     name: "Super Rare",
//     start: 16609320000,
//     end: 16609392000,
//     whitelist: 1200,
//     totalSupply: 1200,
//     deltaSupply: 0,
//     max: 3,
//     price: "0.28",
//   },
// ];

const ContractsData = [ 
  {price: '1.5', rarity:'LEGENDARY', deltaSupply: -7, max: 3,
    stock_amt:150, access:'whitelist', start: 1660672800, end: 1660759200,
    address:"0xe27969820B3F24f192c774a19AdFaeAAF73A0556"},
  {price: '0.12', rarity:'RARE', deltaSupply: 0, max: 10,
    stock_amt:5000, access:'public mint', start: 166200840, end: 1664590000,
    address: "0x1bc2Cb2168B00170B3bE4b280F230DbC58D502a3"},
  {price: '0.39', rarity: 'EPIC', deltaSupply: 0, max: 3,
    stock_amt:650, access:'whitelist', start: 16608456000, end: 16608528000,
    address: "0x69C113702b55f3785c3C13458Fd31605CD79Fd81"},
  {price: '0.28', rarity: 'S.RARE', deltaSupply: 0, max: 3,
    stock_amt:1200, access:'whitelist', start: 16609320000, end: 16609392000,
    address: "0x70959716f53b1a4FaC931360a21c991C6e62c98A"},
]

export default ContractsData;


//rare previous end: 1664496000