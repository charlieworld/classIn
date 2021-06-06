import styled from 'styled-components';
import Image from 'next/image';

const Header = styled.div`
  width: 100vw;
  height: 4rem;
  position: fixed;
  z-index: 100;
  top: 0;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Btn = styled.button``;

const RightMenu = styled.div`
  display: flex;
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Image priority src="/logo_header.svg" height={42} width="auto" />
      <RightMenu>
        <Btn>查看評價</Btn>
        <Btn>新增評價</Btn>
      </RightMenu>
    </Header>
  );
}
