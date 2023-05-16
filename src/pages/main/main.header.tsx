import Button from 'components/button';
import Input from 'components/input';

export function MainHeader() {
  return (
    <div className='px-8 py-4 flex gap-3 items-center'>
      <h1 className='text-2xl font-bold'>Команда</h1>
      <Input placeholder='Поиск по Email' className='max-w-xl ml-auto' />
      <Button>Добавить пользователя</Button>
    </div>
  );
}
