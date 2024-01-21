import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { VendasComponent } from './vendas/vendas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empresas', component: EmpresasComponent },
    { path: 'vendas', component: VendasComponent },
];
