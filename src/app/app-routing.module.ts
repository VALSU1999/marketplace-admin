//RUTAS HIJAS DEL PAGES-ROUTING
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
	{ path: '', redirectTo: '', pathMatch: 'full' 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
