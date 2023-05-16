import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/administrators/administrators.module').then(m => m.AdministratorsPageModule),
    data: { roles: ['administrator'], redirect: 'items' },
    canActivate: [RoleGuard]
  },
  {
    path: 'change-password/:id',
    loadChildren: () => import('./modules/change-password/change-password.module').then(m => m.ChangePasswordPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'recover-password/:role/:id/:recoverPasswordID',
    loadChildren: () => import('./modules/new-password/new-password.module').then(m => m.NewPasswordPageModule),
    data: { noUser: true },
    canActivate: [RoleGuard]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./modules/recover-password/recover-password.module').then(m => m.RecoverPasswordPageModule),
    data: { noUser: true },
    canActivate: [RoleGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule),
    data: { noUser: true, redirect: 'home' },
    canActivate: [RoleGuard]
  },
  {
    path: 'administrators',
    loadChildren: () => import('./modules/administrators/administrators.module').then(m => m.AdministratorsPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'administrator/:action/:id',
    loadChildren: () => import('./modules/administrator/administrator.module').then(m => m.AdministratorPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'stores',
    loadChildren: () => import('./modules/stores/stores.module').then(m => m.StoresPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'store/:action/:id',
    loadChildren: () => import('./modules/store/store.module').then(m => m.StorePageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'category/:action/:id',
    loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'client/:action/:id',
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'employees',
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'employee/:action/:id',
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeePageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams/teams.module').then(m => m.TeamsPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'team/:action/:id',
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'project/:action/:id',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'players',
    loadChildren: () => import('./modules/players/players.module').then(m => m.PlayersPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'player/:action/:id',
    loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'stages',
    loadChildren: () => import('./modules/stages/stages.module').then(m => m.StagesPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'stage/:action/:id',
    loadChildren: () => import('./modules/stage/stage.module').then(m => m.StagePageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'activities',
    loadChildren: () => import('./modules/activities/activities.module').then(m => m.ActivitiesPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: 'activity/:action/:id',
    loadChildren: () => import('./modules/activity/activity.module').then(m => m.ActivityPageModule),
    data: { roles: ['administrator'] },
    canActivate: [RoleGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
