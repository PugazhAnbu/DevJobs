const bcrypt = require("bcryptjs");

const hash = "$2b$10$HDfjAOSzMuLnS2j/TeV/z.aBulLb9QbBlFEXkIFKVZSvq2RP7MjfC";

const test = async () => {
  //   const hash1 = await bcrypt.hash("12345", 10);
  //   const hash2 = await bcrypt.hash(hash1, 10);
  const result = await bcrypt.compare("12345", hash);
  console.log(result);
};

test();
