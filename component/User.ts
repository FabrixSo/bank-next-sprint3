interface UserData {
    name: string;
    lastName: string;
    email: string;
    password: string;
    balance: number;
  }
  
  export function setUser(userData: UserData) {
    try {
      const userJson = JSON.stringify(userData);
      localStorage.setItem('userdata', userJson);
    } catch (error) {
      console.error('Error al serializar datos del usuario:', error);
    }
  }
  
  export function getUser(): UserData {
    try {
      const userJson = localStorage.getItem('userdata');
      return userJson ? JSON.parse(userJson) : {} as UserData;
    } catch (error) {
      console.error('Error al analizar datos del usuario:', error);
      return {} as UserData;
    }
  }