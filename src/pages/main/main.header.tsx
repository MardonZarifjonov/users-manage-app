import Button, { ButtonProps } from 'components/button';
import Input, { InputProps } from 'components/input';

export type MainHeaderProps = {
  handleInputChange: InputProps['onChange'];
  searchValue: string;
  handleClick: ButtonProps['onClick'];
};

export function MainHeader({
  searchValue,
  handleInputChange,
  handleClick,
}: MainHeaderProps) {
  return (
    <div className='px-8 py-4 flex flex-col items-stretch gap-3 md:items-center md:flex-row'>
      <h1 className='text-2xl font-bold'>Команда</h1>
      <Input
        placeholder='Поиск по Email'
        className='max-w-xl ml-auto'
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleClick}>Добавить пользователя</Button>
    </div>
  );
}
