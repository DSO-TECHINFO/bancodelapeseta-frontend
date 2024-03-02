import { Router } from '@angular/router';

export async function Auth(router: Router) {
  const token = sessionStorage.getItem('accessToken');
  const location = window.location.href;
  
  if (token == null && location != '/login') {
    router.navigate(['/login']);
    return;
  }
}
