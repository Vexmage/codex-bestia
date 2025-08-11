import { Routes } from '@angular/router';
import { MonstersListComponent } from './features/monsters-list/monsters-list';
import { MonsterDetailComponent } from './features/monster-detail/monster-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'monsters', pathMatch: 'full' },
  { path: 'monsters', component: MonstersListComponent },
  { path: 'monsters/:slug', component: MonsterDetailComponent },
  { path: '**', redirectTo: 'monsters' }
];
