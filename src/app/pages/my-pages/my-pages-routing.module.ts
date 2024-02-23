import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: 'digital-art' },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./blog-post/blog-post.module').then(m => m.BlogPostModule)
      },
    ]
  },


  {
    path: 'ui-dev',
    children: [
      {
        path: '',
        loadChildren: () => import('./ui-dev/ui-dev.module').then(m => m.UiDevModule)      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPagesRoutingModule { }
