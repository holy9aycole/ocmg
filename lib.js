function testContext(content) {
  console.log("##########################");
  console.log(content);
  console.log("##########################");
}

function pathActive(path, exact, link) {
  // console.log({ path, exact, link });
  if (exact) return path === link ? "active" : "";
  else return path.includes(link) ? "active" : "";
}

module.exports = { pathActive, testContext };
