import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TesterrorsComponent } from './errors/testerrors/testerrors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    canActivate:[AuthGuard],
    runGuardsAndResolvers:'always',
    children:[
      {path:'members',component:MemberListComponent,canActivate:[AuthGuard]},
      {path:'lists',component:ListsComponent},
      {path:'messages',component:MessagesComponent},
    ]
    },  
    {path:'errors',component:TesterrorsComponent},
    {path:'not-found',component:NotFoundComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
