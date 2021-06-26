import Heart from '../components/Icon/Heart';

const FOOTER_POSITION = 'fixed bottom-0';
const FOOTER_BG = 'bg-secondary-light';
const FOOTER_TEXT = 'text-gray-400 text-xs md:text-sm text-center';
const FOOTER_SHAPE = 'py-2.5 w-full	flex justify-center items-center';

const FooterComponent = () => {
  return (
    <footer
      className={`${FOOTER_POSITION} ${FOOTER_SHAPE} ${FOOTER_BG} ${FOOTER_TEXT}`}
    >
        <a
          href="https://www.facebook.com/classinFJCU"
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-primary font-bold"
        >
          ClassIn 輔大
        </a>
      <span className="ml-2">2018 Made by @Weilie with</span>{' '}
      <Heart active />
    </footer>
  );
};

export default FooterComponent;
