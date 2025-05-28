/**
 * User related types
 */
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface UserSettings {
  userId: string;
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
}

export type UserRole = 'user' | 'admin' | 'moderator';

export interface UserWithRoles extends User {
  roles: UserRole[];
}
