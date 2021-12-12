import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./tebs/tebs.module').then(m => m.TebsPageModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  { path: '', loadChildren: './tebs/tebs.module#TebsPageModule' },
  { path: 'teb1', loadChildren: './teb1/teb1.module#Teb1PageModule' },
  { path: 'teb2', loadChildren: './teb2/teb2.module#Teb2PageModule' },
  { path: 'teb3', loadChildren: './teb3/teb3.module#Teb3PageModule' },
  // { path: 'teb4', loadChildren: './teb4/teb4.module#Teb4PageModule' },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'teb4',
    loadChildren: () => import('./teb4/teb4.module').then( m => m.Teb4PageModule)
  },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'tab1', loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule) },
  { path: 'tab2', loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule) },
  { path: 'tab3', loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule) },
  {
    path: 'guardian',
    loadChildren: () => import('./auth/guardian/guardian.module').then( m => m.GuardianPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
