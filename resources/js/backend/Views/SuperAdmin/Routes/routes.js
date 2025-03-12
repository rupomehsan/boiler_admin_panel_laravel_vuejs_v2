//app layout
import Layout from "../Layouts/Layout.vue";
//Dashboard
import Dashboard from "../Management/Dashboard/Dashboard.vue";
//SettingsRoutes
import SettingsRoutes from "../Management/Settings/setup/routes.js";
//routes
import TestOneRoutes from '../Management/TestOne/setup/routes.js';
import TestTwoRoutes from '../Management/TestTwo/setup/routes.js';
import TestOneModuleRoutes from '../Management/TestOneModule/setup/routes.js';



import UserRoutes from '../Management/UserManagement/User/setup/routes.js';




const routes = {
    path: '',
    component: Layout,
    children: [
        {
            path: 'dashboard',
            component: Dashboard,
            name: 'adminDashboard',
        },
        //management routes
        TestOneRoutes,
        TestTwoRoutes,
        TestOneModuleRoutes,






        UserRoutes,
        //settings
        SettingsRoutes,
    ],
};

export default routes;

