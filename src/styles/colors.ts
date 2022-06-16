import tailwindColors from "tailwindcss/colors";

const colors: Partial<typeof tailwindColors> = tailwindColors;

// Remove extra color props
delete colors.inherit;
delete colors.transparent;
delete colors.current;

// Remove deprecated colors
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

export default colors;
