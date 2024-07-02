import { Routes } from '@angular/router';
import { BuildingsComponent } from './components/routes/buildings/buildings.component';
import { UsersComponent } from './components/routes/users/users.component';
import { DealsComponent } from './components/routes/deals/deals.component';
import { OrdersComponent } from './components/routes/orders/orders.component';

export const routes: Routes = [
  {path: 'buildings', component: BuildingsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: '', redirectTo: 'buildings', pathMatch: 'full'},
];
