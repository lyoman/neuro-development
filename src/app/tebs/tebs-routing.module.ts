import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TebsPage } from './tebs.page';

const routes: Routes = [
  {
    path: 'tebs',
    component: TebsPage,
    children:
      [
        {
          path: 'teb1',
          children:
            [
              {
                path: '',
                loadChildren: '../teb1/teb1.module#Teb1PageModule'
              }
            ]
        },
        {
          path: 'teb2',
          children:
            [
              {
                path: '',
                loadChildren: '../teb2/teb2.module#Teb2PageModule'
              }
            ]
        },
        {
          path: 'teb3',
          children:
            [
              {
                path: '',
                loadChildren: '../teb3/teb3.module#Teb3PageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tebs/teb1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tebs/teb1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TebsPageRoutingModule { }
