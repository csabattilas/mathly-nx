/**
 * User related types
 */
export interface UserDto {
  id: string;
  email: string;
  name?: string;
}

export interface UserCreateRequestDto {
  email: string;
  name?: string;
}
