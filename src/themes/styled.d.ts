import "styled-components";

import { DefaultTheme as CustomTheme } from "./defaultTheme";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
