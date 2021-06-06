import Button from '@material-ui/core/Button';
import MainLayout from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout>
      test
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </MainLayout>
  );
}
