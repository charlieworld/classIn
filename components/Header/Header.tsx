import Image from 'next/image';
import Link from 'next/link'
import HeaderNav from './HeaderNav';
import useViewport from '../../hooks/useViewport';

const HEADER_POSITION = 'fixed top-0'
const HEADER_BG = 'bg-primary';
const HEADER_SHAPE = 'px-4 py-2 w-full	flex items-center place-content-between';


export default function HeaderComponent() {
  const [viewPort] = useViewport();
  return (
    <header className={`${HEADER_POSITION} ${HEADER_BG} ${HEADER_SHAPE}`}>
      <Link href="/" passHref>
        <a>
          <Image priority src="/logo_header.svg" height={42} width="auto" />
        </a>
      </Link>
      {
        (viewPort === 'MOBILE') ? null : <HeaderNav />
      }
    </header>
  );
}
