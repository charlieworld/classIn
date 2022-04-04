import styled from 'styled-components';
import { useRouter } from 'next/router'
import Button from '../Button/Button';


const BUTTON_STYLE = 'ml-6 text-white border-white rounded-3xl';
const BUTTON_ACTIVE_STYLE = 'ml-6 text-primary bg-white border-white rounded-3xl';
const BUTTON_HOVER_STYLE = [
  'border-primary-dark',
  'bg-primary-dark',
  'text-white'
];

const NAV_ITEMS = [
  {
    id: 'view',
    text: '查看評價',
    link: '/view',
  },
  {
    id: 'add',
    text: '新增評價',
    link: '/add',
  },
];

const Nav = styled.nav`
  display: flex;
`;

export default function HeaderNavComponent() {
  const router = useRouter()

  const renderItems = () => NAV_ITEMS.map((item) => {
    const handleOnClick = () => {
      router.push(item.link);
    };

    const isActive = () => router.pathname === item.link;

    const renderClassName = () => {
      if (isActive()) return BUTTON_ACTIVE_STYLE;
      return BUTTON_STYLE;
    }

    return (
      <Button 
        key={item.id}
        customClass={renderClassName()} 
        hoverStyle={BUTTON_HOVER_STYLE}
        onClick={handleOnClick}
      >
        {item.text}
      </Button>
    )
  });

  return (
    <Nav>
      {renderItems()}
    </Nav>
  );
}
