import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Footer = styled.footer`
  width: 100vw;
  position: fixed;
  z-index: 100;
  bottom: 0;
  background-color: #F8ECC9;
  padding: 0.5rem 0;
`;

export default function FooterComponent() {

  return (
    <Footer>
      <Typography color="textSecondary"align="center">
        2018 Made by @Weilie with ❤️
      </Typography>
    </Footer>
  );
}
