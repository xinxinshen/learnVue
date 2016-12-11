var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})
var vm1 = new Vue({
    el: '#example1',
    data: {
        date: '1111'
    },
    computed: {
        now: function() {
            return new Date()
        }
    }
})
// watch properties 

// var vm2 = new Vue({
//     el: '#demo',
//     data: {
//         firstName: 'Foo',
//         lastName: 'Bar',
//         fullName: 'Foo Bar'
//     },
//     watch: {
//         firstName: function(val) {
//             this.fullName = val + ' ' + this.lastName
//         },
//         lastName: function(val) {
//             this.fullName = this.firstName + ' ' + val
//         }
//     }
// })


// computed property version

// var vm2 = new Vue({
//   el: '#demo',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar'
//   },
//   computed: {
//     fullName: function () {
//       return this.firstName + ' ' + this.lastName
//     }
//   }
// })


// provide setter

var vm2 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            get: function(){
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            } 
        }
    }
})

var vm3 = new Vue({
    el: '#demo2',
    data: {
        isActive: true,
        hasError: false
    }
})

var vm4 = new Vue({
    el: '#demo3',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})

var vm5 = new Vue({
    el: '#demo4',
    data:{
        isActive: true,
        error: null
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

var vm6 = new Vue({
    el: '#demo5',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

var vm7 = new Vue({
    el: '#demo6',
    data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

Vue.component('my-component', {
    template: '<p class="foo bar">Hi!</p>'
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer util you ask a question!'
    },
    watch: {
        question: function(newQuestion) {
            this.answer + 'Waiting or you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
            function() {
                var vm = this
                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                vm.answer = 'Thinking...'
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            500
        )
    }
})






window.name = 'globalName'
var getName = function() {
    return this.name
}
console.log(getName())

var myObject = {
    name: 'sven',
    getName: function() {
        return this.name
    }
}
var getName = myObject.getName;
console.log(getName())
console.log(myObject.getName())


window.id = 'window'
document.getElementById('div1').onclick = function() {
    alert(this.id)
    var that = this
    var callback = function() {
        alert(that.id)
    }
    callback()
}

function func() {
    "use strict"
    alert(this)
}


var MyClass = function() {
    this.name = 'sven'
    return {
        name: 'anna'
    }
}
var obj = new MyClass()
console.log(obj.name)


var MyClass2 = function() {
    this.name = 'sven'
    return 'anna'
}
var obj2 = new MyClass2()
console.log(obj2.name)


var obj3 = {
    name: 'sven',
    getName: function() {
        return this.name
    }
}
var obj4 = {
    name: 'anna'
}

console.log('obj3: ' + obj3.getName())
console.log('obj4: ' + obj3.getName.call(obj4))
