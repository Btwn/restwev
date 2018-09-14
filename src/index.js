import _ from 'lodash';
import Vue from 'vue'
import App from './App.vue'
import printMe from './printme'

new Vue({
  el: '#app',
  render: h => h(App)
})

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());


 