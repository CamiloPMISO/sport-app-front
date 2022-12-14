import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'protected',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./protected/protected.module').then(m => m.ProtectedModule),
  },
  {
    path: 'partner',
    loadChildren: () =>
      import('./partner/partner.module').then(m => m.PartnerModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    // Redirects all paths that are not matching to the 'public' route/path
    path: '**',
    redirectTo: 'public/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
