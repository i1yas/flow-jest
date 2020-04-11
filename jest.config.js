module.exports = {
  roots: ["."],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(svg)$": "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  clearMocks: true
};
