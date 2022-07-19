import { App, defineAsyncComponent } from 'vue';
import PublicView from './public/';
import SharedView from './shared/shared-view.vue';
import DrawerItem from './private/components/drawer-item/drawer-item.vue';

const PrivateView = defineAsyncComponent(() => import('./private'));

export function registerViews(app: App): void {
	app.component('PublicView', PublicView);
	app.component('PrivateView', PrivateView);
	app.component('SharedView', SharedView);
	app.component('DrawerItem', DrawerItem);
}
