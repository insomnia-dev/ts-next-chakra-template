import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import global from "./global";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors,
  styles: {
    global,
  },
});

export default theme;
