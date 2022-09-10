import { useUserQuerySpreadOut } from "./queries/useUserQuery";

export function User() {
  const { data: user, isFetching, refetch } = useUserQuerySpreadOut();

  return (
    <div>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>User Page</h2>
          <h3>Username: {user?.username}</h3>
        </>
      )}
      <button disabled={isFetching} onClick={() => refetch()} >Refetch</button>
    </div>
  );
}
