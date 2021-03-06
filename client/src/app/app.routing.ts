import { Routes, RouterModule }   from '@angular/router';
import { IndexPageComponent }  from './components/index-page/index.component'
import { PageNotFoundComponent }  from './components/404-page/404.component'
import { RailsRedirectComponent } from './rails-redirect/rails.component'
import { LoginPageComponent } from './components/login/login-page.component'
import { SearchComponent } from './components/search/search.component'
import { ConversationsComponent } from './components/conversations/conversations.component'
import { LoggedInGuard } from './shared/guards/logged-in.guard'
import { SignupPageComponent } from './components/signup/signup-page.component'

const appRoutes: Routes = [
  { path: 'index', component: IndexPageComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'conversations/:location/:for/:eating', component: ConversationsComponent },
  { path: 'search', component: SearchComponent, canActivate: [LoggedInGuard] },
  { path: '', component: RailsRedirectComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);