var app1 = new Vue({
	el: '#app',
	data: {
		message: 'hello Vue.js'
	}
});
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'Current time is ' + new Date()
	}
});
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});
var app4 = new Vue({
	el: '#app-4',
	data: {
		todos:[
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue.js' },
			{ text: 'Do something awesome'}
		]
	}
});
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello World!'
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'vue'
	}
});
Vue.component('todo', {
	props: ['todo'],
	template:'<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
	el: '#app-7',
	data: {
		todos:[
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue.js' },
			{ text: 'Do something awesome'}
		]
	}
});
/**
 * Each Vue instance proxies all the properties found in its data object
 * 每个Vue实例都代理了它的data对象中存在的所有属性
 */
var data = {
	a: 1
}
var vm = new Vue({
	el: '#example',
	data: data
})
console.log( vm.a === data.a )
vm.a = 2
console.log( data.a )
data.a = 3
console.log( vm.a )
console.log( vm.$data === data )
console.log( vm.$el === document.getElementById('example'))
vm.$watch('a', function(newVal, oldVal) {
	console.log('I got you!')
	//this callback will be called when 'vm.a' changes
})
