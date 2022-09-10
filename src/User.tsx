import { useUserQuerySpreadOut } from "./queries/useUserQuery";

export function User() {
  const { data: user, isLoading } = useUserQuerySpreadOut();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>User Page</h2>
          <h3>Username: {user?.username}</h3>
        </>
      )}
    </div>
  );
}
