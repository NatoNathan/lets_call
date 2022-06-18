import 'styled-components';
import Theme from './theme';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}; 
}