import { User } from 'declarations';
import classNames from 'classnames';
import { MainPermissionTag } from './main.permission.tag';

export type MainUserCardProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & { user: User };

export function MainUserCard({ user, className, ...props }: MainUserCardProps) {
  const userCardClassNames = classNames(
    'flex gap-4 px-8 items-center',
    className
  );

  return (
    <li key={user.email} className={userCardClassNames} {...props}>
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
        <ul className='flex gap-2'>
          {user.permissions.length > 0 &&
            user.permissions.map((permission) => (
              <MainPermissionTag key={permission} permission={permission} />
            ))}
        </ul>
      </div>
    </li>
  );
}
