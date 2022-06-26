import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import useEnter from '../../hooks/useEnter';

export default function MobileSearchBar(props: {
  className?: string;
  value: string;
  onSearch: Function;
}) {
  const { className = '', value, onSearch = () => {} } = props;
  const [val, setVal] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleSearch = () => {
    onSearch(val);
  };
  useEnter(handleSearch);

  return (
    <div className={`${className} w-full fixed top-16 left-0 z-10`}>
      <input
        value={val}
        onChange={handleChange}
        placeholder="評價編號、課程名稱或教師姓名"
        className="border-b-2 px-4 py-2 text-base w-full pr-10 placeholder-red-200 border-primary text-primary focus:outline-none"
      />
      <button
        className="w-6 h-6 text-primary absolute right-4 top-2"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
