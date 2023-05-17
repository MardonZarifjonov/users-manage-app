export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Permission = string;

export type User = {
  name: string;
  email: string;
  image?: string;
  permissions: Permission[];
};
