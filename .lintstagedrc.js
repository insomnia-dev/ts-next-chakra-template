module.exports = {
  "**/*.{js,ts,tsx}": (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(" --file ")}`,
  "src/**/*.{ts,tsx}": () => "tsc -p tsconfig.json --noEmit",
  "*": "prettier --ignore-unknown --write",
  "package.json": "prettier-package-json --write",
};
