const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const [IXX, VGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    
    const result = [...IXX, ...VGC]

    return result?.filter(item=> item.hasil === emosi)?.length || 0
  } catch (err) {
    console.log(`error ${err}`);
  }
};

module.exports = {
  promiseOutput,
};
