/*
 * @Author: 张平
 * @Date: 2019-08-30 16:21:41
 * @Last Modified by: 张平
 * @Last Modified time: 2019-09-05 10:10:04
 */

import Vue from 'vue'
import 'vant/lib/index.css'
import { Dialog, Toast, Notify, Tab, Tabs } from 'vant'

Vue.prototype.$Dialog = Dialog
Vue.prototype.$Toast = Toast
Vue.prototype.$Notify = Notify

Vue.use(Tab).use(Tabs)
