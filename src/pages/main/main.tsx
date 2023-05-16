import Card from 'components/card';
import { MainHeader } from './main.header';
import { useMainPage } from './hooks';
import { MainUserCard } from './main.user.card';

export function Main() {
  const { users, searchValue, handleSearchChange } = useMainPage();

  return (
    <Card
      className='content-height'
      header={
        <MainHeader searchValue={searchValue} onChange={handleSearchChange} />
      }
    >
      <ul className='flex flex-col gap-8 py-8'>
        {users.length > 0 &&
          users.map((user) => <MainUserCard key={user.email} user={user} />)}
      </ul>
    </Card>
  );
}
