import { useRouter } from 'next/router'
import Button from '../Button/Button';


const BUTTON_STYLE = 'ml-6 text-white border-white rounded-3xl';
const BUTTON_HOVER_STYLE = [
  'border-primary-dark',
  'bg-primary-dark'
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

export default function HeaderNavComponent() {
  const router = useRouter()

  const renderItems = () => NAV_ITEMS.map((item) => {
    const handleOnClick = () => {
      router.push(item.link);
    };
    return (
      <Button 
        key={item.id}
        customClass={BUTTON_STYLE} 
        hoverStyle={BUTTON_HOVER_STYLE}
        onClick={handleOnClick}
      >
        {item.text}
      </Button>
    )
  });

  return (
    <nav>
      {renderItems()}
    </nav>
  );
}
