import Motion from './apps/motion.jsx';

$(function(){
  const Libs = new libs();
  const motion = new Motion();
});

let promise = new Promise((resolve,reject) => {
  console.log('#1');
  resolve('Hello');
});

promise.then((msg) => { //#2
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      console.log('#2');
      resolve(msg + 'Im');
    },500);
  });
}).then((msg) => { //#3
  console.log('#3');
  return msg + 'Jeccy!';
}).then((msg) => { //#4
  console.log('#4');
  console.log(msg);
}).catch(() => {
  console.error('Something wrong!');
});