import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import useViewport from '../../hooks/useViewport';

const HEADER_POSITION = 'fixed top-0 z-10';
const HEADER_BG = 'bg-primary';
const HEADER_SHAPE = 'w-full flex items-center place-content-between py-1 px-10';

const Header = styled.header`
  height: 4rem;
  width: 100%;
`;
const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export default function HeaderComponent(props: { className?: string}) {
  const { className = '' } = props;
  const [viewPort] = useViewport();
  return (
    <Header id="header" className={`${HEADER_POSITION} ${HEADER_BG} ${HEADER_SHAPE} ${className}`}>
      <ImageWrapper>
        <Link href="/" passHref>
          <a>
            <Image priority src="/logo_header.svg" layout="fill" />
          </a>
        </Link>
      </ImageWrapper>

      {viewPort === 'MOBILE' ? null : <HeaderNav />}
    </Header>
  );
}
