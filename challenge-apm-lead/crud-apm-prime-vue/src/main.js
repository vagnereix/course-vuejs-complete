import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';

import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import Toolbar from 'primevue/toolbar';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('FileUpload', FileUpload);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Rating', Rating);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);
app.component('RadioButton', RadioButton);

app.mount('#app');
