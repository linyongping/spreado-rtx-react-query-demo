import { useUserQuerySpreadIn } from "./queries/useUserQuery";

export function Profile() {
  const { data: user } = useUserQuerySpreadIn();

  return (
    <div>
      <h2>Profile Page </h2>
      <h3>Username: {user?.username}</h3>
    </div>
  );
}
