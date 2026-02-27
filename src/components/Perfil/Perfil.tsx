import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  AdornmentButton,
  FieldGroup,
  FieldLabel,
  InputWithAdornment,
  StyledInput,
} from '../Cadastro/Cadastro.styles';
import { BoxPerfil, BoxWidth } from './Perfil.styles';
import { useState } from 'react';

const currentUser = {
  name: 'Paulo Souza',
  email: 'paulo.csouzas@outlook.com',
  avatar: '/perfil.jpg',
};

export default function Perfil() {
  const [email, setEmail] = useState(currentUser.email);
  const [nome, setNome] = useState(currentUser.name);

  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  return (
    <BoxPerfil>
      <h2>Alterar nome</h2>

      <BoxWidth>
        <FieldGroup>
          <FieldLabel>Nome Completo</FieldLabel>
          <StyledInput
            type='email'
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder='Digite seu nome'
            disabled
          />
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>E-mail</FieldLabel>
          <StyledInput
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Digite seu e-mail'
            disabled
          />
        </FieldGroup>
      </BoxWidth>

      <BoxWidth>
        <h2>Alterar senha</h2>
        <p>Digite sua senha atual para alterá-la.</p>
      </BoxWidth>

      <BoxWidth>
        <FieldGroup>
          <FieldLabel>Senha</FieldLabel>
          <InputWithAdornment>
            <StyledInput
              type={mostrarSenha ? 'text' : 'password'}
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder='Digite sua senha'
              required
            />
            <AdornmentButton
              type='button'
              onClick={() => setMostrarSenha(!mostrarSenha)}
              aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {mostrarSenha ? <VisibilityOff /> : <Visibility />}
            </AdornmentButton>
          </InputWithAdornment>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Confirmar Senha</FieldLabel>
          <InputWithAdornment>
            <StyledInput
              type={mostrarConfirmarSenha ? 'text' : 'password'}
              value={confirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
              placeholder='Confirme sua senha'
              required
            />
            <AdornmentButton
              type='button'
              onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
              aria-label={
                mostrarConfirmarSenha ? 'Ocultar senha' : 'Mostrar senha'
              }
            >
              {mostrarConfirmarSenha ? <VisibilityOff /> : <Visibility />}
            </AdornmentButton>
          </InputWithAdornment>
        </FieldGroup>
      </BoxWidth>
    </BoxPerfil>
  );
}
