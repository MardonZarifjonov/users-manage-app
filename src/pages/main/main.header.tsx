import Button from 'components/button';
import Input, { InputProps } from 'components/input';

export type MainHeaderProps = {
  onChange: InputProps['onChange'];
  searchValue: string;
};

export function MainHeader({ searchValue, onChange }: MainHeaderProps) {
  return (
    <div className='px-8 py-4 flex gap-3 items-center'>
      <h1 className='text-2xl font-bold'>Команда</h1>
      <Input
        placeholder='Поиск по Email'
        className='max-w-xl ml-auto'
        value={searchValue}
        onChange={onChange}
      />
      <Button>Добавить пользователя</Button>
    </div>
  );
}
