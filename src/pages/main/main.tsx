import Card from 'components/card';
import Modal from 'components/modal';
import Spinner from 'components/spinner';
import { MainHeader } from './main.header';
import { useMainPage } from './hooks';
import { MainUserCard } from './main.user.card';
import { MainUserModal } from './main.user.modal';

export function Main() {
  const {
    open,
    users,
    loading,
    searchValue,
    handleSearchChange,
    handleModal,
    handleUserAdd,
  } = useMainPage();

  return (
    <>
      <Card
        className='content-height'
        header={
          <MainHeader
            searchValue={searchValue}
            handleInputChange={handleSearchChange}
            handleClick={() => handleModal(true)}
          />
        }
      >
        {loading ? (
          <Spinner />
        ) : (
          <ul className='flex flex-col gap-8 py-8'>
            {users &&
              users?.length > 0 &&
              users.map((user) => (
                <MainUserCard key={user.email} user={user} />
              ))}
          </ul>
        )}
      </Card>
      <Modal open={open}>
        <MainUserModal
          handleUserAdd={handleUserAdd}
          handleClose={() => handleModal(false)}
        />
      </Modal>
    </>
  );
}
