new Vue({
  el: '#desafio',
  data: {
    nome: 'Vagner',
    idade: 24,
    imagem: 'http://github.com/vagnereix.png',
  },
  methods: {
    random: function () {
      return Math.random();
    },
  },
});
