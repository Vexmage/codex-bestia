// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { MonstersListComponent } from './features/monsters-list/monsters-list';
import { MonsterDetailComponent } from './features/monster-detail/monster-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },                 // landing page
  { path: 'monsters', component: MonstersListComponent }, // list
  { path: 'monsters/:slug', component: MonsterDetailComponent }, // detail
  { path: '**', redirectTo: '' }                          // fallback
];
