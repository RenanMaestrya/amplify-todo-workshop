export const authService = {
    isAuthenticated: false,
    
    login(email: string, password: string, callback: () => void) {
      console.log(`Autenticando o usuário com email: ${email}`);
      authService.isAuthenticated = true;
      localStorage.setItem('user', email);
      callback();
    },
    
    logout(callback: () => void) {
      console.log('Saindo...');
      authService.isAuthenticated = false;
      localStorage.removeItem('user');
      callback();
    },
  
    checkAuth() {
      return localStorage.getItem('user') !== null;
    }
  };