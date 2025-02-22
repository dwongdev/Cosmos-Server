// assets
import { HomeOutlined, AppstoreOutlined, DashboardOutlined, AppstoreAddOutlined, CheckOutlined } from '@ant-design/icons';
import { isDomain } from '../utils/indexs';

// icons
const icons = {
    HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const isLocal = !isDomain(window.location.hostname) || window.location.hostname.endsWith('.local') || window.location.hostname == "cosmos-cloud.io";

const dashboard = {
    id: 'group-dashboard',
    title: 'menu-items.navigation',
    type: 'group',
    children: ([
        {
            id: 'home',
            title: 'menu-items.navigation.home',
            type: 'item',
            url: '/cosmos-ui/',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        },
        {
            id: 'dashboard',
            title: 'menu-items.navigation.monitoringTitle',
            type: 'item',
            url: '/cosmos-ui/monitoring',
            icon: DashboardOutlined,
            breadcrumbs: false,
            adminOnly: true
        },
        {
            id: 'market',
            title: 'menu-items.navigation.marketTitle',
            type: 'item',
            url: '/cosmos-ui/market-listing',
            icon: AppstoreAddOutlined,
            breadcrumbs: false
        },
        isLocal ? {
            id: 'trust',
            title: 'menu-items.navigation.trustTitle',
            type: 'item',
            url: '/cosmos-ui/trust',
            icon: CheckOutlined,
            breadcrumbs: false
        } : [],
    ]).flat(),
};

export default dashboard;
