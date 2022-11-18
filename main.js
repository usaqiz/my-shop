import Vue from 'vue'
import App from './App'
import {
	myRequest
} from './util/api.js'

Vue.prototype.$myRuquest = myRequest
Vue.config.productionTip = false

Vue.filter('formatDate', (date) => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2, 0)
	const day = nDate.getDate().toString().padStart(2, 0)
	return year + '-' + month + '-' + day
})

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
