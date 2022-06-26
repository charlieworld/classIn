import MainLayout from '../components/MainLayout';
import useViewport from '../hooks/useViewport';
import MobileToolBar from '../components/Mobile/MobileToolBar';

export default function AddPage() {
  const [viewPort] = useViewport();

  if (viewPort == 'MOBILE') {
    return (
      <MainLayout className="shadow">
        <main
        className="w-full h-screen pt-16 "
        style={{ backgroundColor: 'rgb(243, 241, 238)' }}
      >
        <MobileToolBar />
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
