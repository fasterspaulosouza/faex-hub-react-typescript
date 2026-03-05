import { getToken } from '../utils/cookies';

const BASE_URL = 'http://localhost:3000';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const resp = await fetch(`${BASE_URL}${path}`, { ...options, headers });

  if (!resp.ok) {
    const error = await resp
      .json()
      .catch(() => ({ message: 'Erro desconhecido' }));
    throw new Error(error.message || `Erro ${resp.status}`);
  }

  return resp.json();
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface CadastroPayload {
  nome: string;
  sexo: string;
  dataNascimento: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
  cep: string;
  bairro: string;
  numero: string;
  cidade: string;
  uf: string;
  endereco: string;
  complemento: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface Usuario {
  id: string | number;
  nome: string;
  email: string;
  foto?: string;
  [key: string]: unknown;
}

export const api = {
  login: (payload: LoginPayload) =>
    request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  cadastro: (payload: CadastroPayload) =>
    request<AuthResponse>('/auth/cadastro', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  getMe: () => request<Usuario>('/auth/me'),
};
