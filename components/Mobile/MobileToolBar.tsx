import {
  EyeIcon,
  PencilIcon,
  FilterIcon,
  SelectorIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const NAV_ITEMS = [
  {
    id: 'view',
    icon: <EyeIcon />,
    action: '/view',
  },
  {
    id: 'add',
    icon: <PencilIcon />,
    action: '/add',
  },
];

const MobileToolBar = (props: {
  action?: boolean;
  actionFilter: Function;
  actionOrder: Function;
}) => {
  const {
    action = false,
    actionFilter = () => {},
    actionOrder = () => {},
  } = props;
  const router = useRouter();

  const ACTION_ITEMS = [
    {
      id: 'filter',
      icon: <FilterIcon />,
      action: actionFilter,
    },
    {
      id: 'order',
      icon: <SelectorIcon />,
      action: actionOrder,
    },
    {
      id: 'search',
      icon: <SearchIcon />,
      action: '/add',
    },
  ];

  const renderItems = (items) =>
    items.map((item) => {
      const handleOnClick = () => {
        if (typeof action === 'string') {
          router.push(item.action);
        } else {
          item.action();
        }
      };

      const isActive = router.pathname === item.action;

      return (
        <button
          key={item.id}
          className={`w-full p-1 rounded-lg shadow-lg  mb-2 ${
            isActive ? 'bg-primary text-white' : 'bg-white'
          }`}
          onClick={handleOnClick}
        >
          {item.icon}
        </button>
      );
    });

  return (
    <nav className="fixed top-36 left-1 z-10 w-10 ">
      <div className="mb-20">{renderItems(NAV_ITEMS)}</div>
      {action && <div>{renderItems(ACTION_ITEMS)}</div>}
    </nav>
  );
};

export default MobileToolBar;
