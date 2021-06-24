
const FOOTER_POSITION = 'fixed bottom-0'
const FOOTER_BG = 'bg-secondary-light';
const FOOTER_TEXT = 'text-gray-400 text-sm text-center';
const FOOTER_SHAPE = 'py-2.5 w-full	';

const FooterComponent = () => {

  

  return (
    <footer className={`${FOOTER_POSITION} ${FOOTER_SHAPE} ${FOOTER_BG} ${FOOTER_TEXT}`}>
      2018 Made by @Weilie with ❤️
    </footer>
  );
}

export default FooterComponent;