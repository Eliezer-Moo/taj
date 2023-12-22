export interface ResponseUsers {
  ok: boolean;
  status: number;
  body: User[];
}

export interface User {
  id?: number;
  nombre?: string;
  username?: string;
  correo_electronico?: string;
  contrasena?: string;
  estado_id?: number;
  imagen?: string;
  createdAt?: string;
  updatedAt?: string;
}
