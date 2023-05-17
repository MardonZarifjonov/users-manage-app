import { User } from 'declarations';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { MainPermissionTag } from './main.permission.tag';

export type MainUserCardProps = Omit<LinkProps, 'to'> & {
  user: User;
  handleUserSelect: (id: User['id']) => void;
};

export function MainUserCard({
  user,
  className,
  handleUserSelect,
  ...props
}: MainUserCardProps) {
  const userCardClassNames = classNames(
    'flex gap-4 px-8 items-center cursor-pointer active:bg-main-bg',
    className
  );

  return (
    <Link
      to={`/user/${user.id}`}
      className={userCardClassNames}
      onClick={(event) => {
        event.preventDefault();
        handleUserSelect(user.id);
      }}
      {...props}
    >
      <img
        src={user.image}
        alt={`user${user.name}`}
        className='w-16 h-16 rounded-full object-cover'
      />
      <div className='flex flex-col gap-2 justify-center'>
        <section className='flex gap-4'>
          <h2 className='font-bold text-lg'>{user.name}</h2>
          <h3 className='font-medium text-lg text-tertiary'>{user.email}</h3>
        </section>
        <ul className='flex gap-2 flex-wrap'>
          {user.permissions.length > 0 &&
            user.permissions.map((permission) => (
              <MainPermissionTag key={permission} permission={permission} />
            ))}
        </ul>
      </div>
    </Link>
  );
}
