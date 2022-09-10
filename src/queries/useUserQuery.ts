import { useQuery } from "react-query";
import { useSpreadIn, useSpreadOut } from "spreado";
import { faker } from "@faker-js/faker";

type User = {
  username: string;
  id?: string;
  avatarUrl?: string;
};

const USER_QUERY_KEY = "USER_QUERY_KEY";

export function useUserQuerySpreadOut() {
  return useSpreadOut(
    USER_QUERY_KEY,
    useQuery<User>([USER_QUERY_KEY], async () => {
      return new Promise<User>((resolve) => {
        setTimeout(() => {
          resolve({
            username: faker.name.fullName(),
            id: faker.database.mongodbObjectId(),
            avatarUrl: faker.internet.avatar(),
          });
        }, Math.floor(Math.random() * 10000));
      });
    })
  );
}

export function useUserQuerySpreadIn() {
  return useSpreadIn<ReturnType<typeof useUserQuerySpreadOut>>(
    USER_QUERY_KEY,
    {}
  );
}
