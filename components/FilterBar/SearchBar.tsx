import { SearchIcon } from '@heroicons/react/solid';

export default function SearchBar(props: {
  className?: string;
  value: string;
  onChange: Function;
}) {
  const { className = '', value, onChange = () => {} } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${className} ml-1`}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="評價編號、課程名稱或教師姓名"
        className="border-2 px-4 py-1 text-sm lg:text-base w-64 lg:w-72 pr-10 placeholder-red-200 border-primary text-primary rounded-3xl focus:outline-none"
      />
      <button className="w-4 h-4 lg:w-6 lg:h-6 text-primary absolute right-4 top-2">
        <SearchIcon />
      </button>
    </div>
  );
}
