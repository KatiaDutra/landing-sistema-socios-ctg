/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from 'react'

/*
 * Versão de DEMONSTRAÇÃO do AuthContext, só para o portfólio.
 * No sistema real, o login chama a API (PHP + JWT) do servidor do IFSul.
 * Aqui não existe back-end, então o formulário apenas avisa que é uma demo.
 */
const AuthCtx = createContext(null)

export function AuthProvider({ children }) {
  const valor = useMemo(() => ({
    usuario: null,
    carregando: false,
    autenticado: false,
    papel: null,
    login: async () => {
      await new Promise(r => setTimeout(r, 600))
      throw new Error('Esta é uma versão de demonstração. O login funciona no sistema real, hospedado no IFSul.')
    },
    logout: async () => {},
  }), [])

  return <AuthCtx.Provider value={valor}>{children}</AuthCtx.Provider>
}

export function useAuth() {
  return useContext(AuthCtx)
}
