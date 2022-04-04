import MainLayout from '../components/MainLayout';
import Heart from '../components/Icon/Heart';
import Sparkles from '../components/Icon/Sparkles';
import Clock from '../components/Icon/Clock';
export default function Index() {
  const S_MARGIN = 'mb-6';
  const ICON_MARGIN = 'mb-1';

  return (
    <MainLayout className="shadow">
      <main
        className="w-full h-screen pt-16 "
        style={{ backgroundColor: 'rgb(243, 241, 238)' }}
      >
        <iframe
          className="w-full h-screen"
          src="https://docs.google.com/forms/d/19u2KhAZMYkx6D-yftwX7aWMnJEyARVk99j58r7Qc_Pc/viewform?edit_requested=true#start=embed"
          frameBorder={0}
          scrolling="yes"
        />
      </main>
    </MainLayout>
  );
}
