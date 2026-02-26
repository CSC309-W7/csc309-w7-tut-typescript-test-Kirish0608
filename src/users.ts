import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse)) {
    return [];
  }

  const user: User[] = [];

  for (const i of apiResponse) {
    const obj = i as any;
    const age = Number(obj.age);

      if (!Number.isNaN(age)) {
        user.push({
          name: obj.name,
          age: age,
        });
      }
  }

  return user;
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}