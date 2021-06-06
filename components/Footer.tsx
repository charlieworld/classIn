import styled from 'styled-components';
import theme from '../utils/theme';

interface themeType {
  background: string;
  text: string;
}

const Footer = styled.footer<{ theme: themeType }>`
  width: 100vw;
  position: fixed;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 0.5rem 0;
  text-align: center;
`;

export default function FooterComponent() {

  return (
    <Footer theme={theme.footer}>
      2018 Made by @Weilie with ❤️
    </Footer>
  );
}
