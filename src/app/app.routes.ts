import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Mas } from './components/pages/mas/mas';
import { MisProyectos } from './components/pages/mis-proyectos/mis-proyectos';
import { Error404 } from './components/pages/error404/error404';

export const routes: Routes = [
    {
        path: "home",
        component: Home,
        title: "Inicio"
    },
    {
        path: "mas",
        component: Mas,
        title: "Mas Sobre Mi"
    },
    {
        path: "mis-proyectos",
        component: MisProyectos,
        title: "Mis Proyectos"
    },
    {
        path: "",
        component: Home,
        title: "Inicio"
    },
    
    {
        path: "**",
        component: Error404,
        title: "Error404"
    },
    
];
