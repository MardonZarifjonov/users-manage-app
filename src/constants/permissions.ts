export const permissions = {
  MODERATOR: 'Модерация объявлений',
  BLOG: 'Блог',
  TECH_SUPPORT: 'Тех. поддержка',
  CUSTOMER_SUPPORT: 'Обращения клиентов',
  ANALYTICS: 'Аналитика',
  STOCK: 'Акции',
  ADMIN: 'Администратор',
} as const;

export type Permissions = (typeof permissions)[keyof typeof permissions];
