import Card from 'components/card';
import { MainHeader } from './main.header';

export function Main() {
  return (
    <Card className='content-height' header={<MainHeader />}>
      <h1>Users</h1>
    </Card>
  );
}
