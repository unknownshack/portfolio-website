# Angular Navigation and Routing

Last Modified: October 19, 2023 9:33 AM

## Common Routing Task

**Setting Up Routing in Angular:**

Angular uses a built-in router module for handling routing. Here are the steps and code snippets to set up routing for two components in an Angular application:

1. **Create an Angular Project:**
    
    If you don't already have an Angular project, create one using the Angular CLI:
    
    ```bash
    ng new my-angular-app
    ```
    
2. **Generate Components:**
    
    Create two components using the Angular CLI:
    
    ```bash
    ng generate component component1
    ng generate component component2
    ```
    
3. **Configure Routes:**
    
    In the **`app-routing.module.ts`** file, configure the routes for the two components:
    
    ```tsx
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { Component1Component } from './component1/component1.component';
    import { Component2Component } from './component2/component2.component';
    
    const routes: Routes = [
      { path: 'component1', component: Component1Component },
      { path: 'component2', component: Component2Component },
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}
    ```
    
4. **Add Router Outlet:**
    
    In the **`app.component.html`** file, add a **`<router-outlet>`** element to display the components:
    
    ```html
    <router-outlet></router-outlet>
    ```
    
5. **Navigate to Components:**
    
    You can use the **`routerLink`** directive to navigate to the components. For example, in the **`app.component.html`**:
    
    ```html
    <a routerLink="/component1">Component 1</a>
    <a routerLink="/component2">Component 2</a>
    ```
    

Now, when you click the links, the corresponding components will be displayed in the **`<router-outlet>`**.

### Multiple Router Outlet

In Angular, you can use multiple `<router-outlet>` elements to render different parts of a page. This is useful when you want to have nested views, sidebars, or multiple content areas that are independently controlled by different router outlets. Here's how you can use multiple router outlets in an Angular application:

1. **Set Up Routes:**
Define your routes in the `app-routing.module.ts` file, and give each route a named outlet.
    
    ```tsx
    const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar' },
      { path: 'content', component: ContentComponent, outlet: 'content' },
    ];
    
    ```
    
    In this example, we have three routes:
    
    - An empty route for the main content area.
    - A route for the sidebar, which uses the `sidebar` outlet.
    - A route for the content area, which uses the `content` outlet.
2. **Add Router Outlets:**
In your template (e.g., `app.component.html`), add the router outlets where you want the components to be displayed. You can name each outlet using the `name` attribute.
    
    ```html
    <router-outlet></router-outlet> <!-- Main content area -->
    <router-outlet name="sidebar"></router-outlet> <!-- Sidebar -->
    <router-outlet name="content"></router-outlet> <!-- Content area -->
    
    ```
    
3. **Navigate to Named Outlets:**
In your component or template, use the `routerLink` directive to navigate to the named outlets:
    
    ```html
    <a routerLink="/sidebar" routerLinkActive="active" outlet="sidebar">Show Sidebar</a>
    <a routerLink="/content" routerLinkActive="active" outlet="content">Show Content</a>
    
    ```
    
    Here, we specify the `outlet` attribute to indicate which named outlet the link should navigate.
    
4. **Router Outlet Activation:**
When you navigate to a route with a named outlet, Angular will render the corresponding component in the specified router outlet.

With these steps, you can use multiple router outlets to render different parts of a page in an Angular application. This is especially useful for creating complex layouts with distinct sections that can be independently controlled by the router.

### Sending data through routing

There are several ways:

```jsx
//Accessing route in navigated page.
import { ActivatedRoute, ParamMap } from '@angular/router'
constructor(private route: ActivatedRoute) {}
```

![Untitled](/assets/img/angular_required_parameter.png)

![Untitled](/assets/img/angular_optional_parameter.png)

![Untitled](/assets/img/angular_query_parameter.png)

4) You can use a service to pass data from one component to another without using route parameters at all.

For an example see: [https://blogs.msmvps.com/deborahk/build-a-simple-angular-service-to-share-data/](https://blogs.msmvps.com/deborahk/build-a-simple-angular-service-to-share-data/)