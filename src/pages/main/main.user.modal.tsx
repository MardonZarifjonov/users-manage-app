/* eslint-disable jsx-a11y/label-has-associated-control */
import Button, { ButtonClose } from 'components/button';
import Card from 'components/card';
import Input, { InputCheckbox, InputCheckboxProps } from 'components/input';
import { permissions as permissionsList } from 'constants';
import { User } from 'declarations';
import { useState } from 'react';

export type MainUserModalProps = {
  handleUserAdd: (data: User) => void;
  handleClose: () => void;
};

export function MainUserModal({
  handleUserAdd,
  handleClose,
}: MainUserModalProps) {
  const permissions = Object.values(permissionsList);

  const [checkedList, setCheckedList] = useState<User['permissions']>([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const handleCheck: InputCheckboxProps['onChange'] = (event) => {
    const checkedValue = event.target.value;
    if (checkedList.includes(checkedValue)) {
      setCheckedList((prevState) =>
        prevState.filter((checked) => checked !== checkedValue)
      );

      return;
    }
    setCheckedList([...checkedList, checkedValue]);
  };

  const handleCheckAll: InputCheckboxProps['onChange'] = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedList(permissions);
      setIsCheckAll(true);
    } else {
      setCheckedList([]);
      setIsCheckAll(false);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    handleUserAdd({
      email: data.email as string,
      name: data.name as string,
      permissions: checkedList,
    });
  };

  return (
    <Card className='max-w-lg w-full h-auto  flex flex-col p-8'>
      <ButtonClose className='self-end' onClick={handleClose} />
      <form
        className='flex flex-col gap-2 justify-self-center self-center'
        onSubmit={handleSubmit}
      >
        <h3 className='font-bold text-4xl mb-3'>Отправьте приглашение</h3>
        <label className='visually-hidden' htmlFor='email'>
          User email
        </label>
        <Input id='email' name='email' placeholder='Email' />
        <label className='visually-hidden' htmlFor='name'>
          User name
        </label>
        <Input id='name' name='name' placeholder='Имя' />
        <ul className='flex flex-col gap-5'>
          <InputCheckbox
            label='Все'
            checked={isCheckAll}
            onChange={handleCheckAll}
          />
          {permissions.map((permission) => (
            <li key={permission}>
              <InputCheckbox
                label={permission}
                checked={checkedList.includes(permission)}
                onChange={handleCheck}
                value={permission}
              />
            </li>
          ))}
        </ul>
        <Button>Отправить приглашение</Button>
      </form>
    </Card>
  );
}
