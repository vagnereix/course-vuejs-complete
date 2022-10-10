new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    playerLife: 100,
    monsterLife: 100,
    logs: [],
  },
  computed: {
    hasResult() {
      return this.playerLife === 0 || this.monsterLife === 0;
    },
  },
  methods: {
    startGame() {
      this.gameStarted = !this.gameStarted;
      this.monsterLife = 100;
      this.playerLife = 100;
      this.logs = [];
    },
    giveUp() {
      this.gameStarted = !this.gameStarted;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    attack(special) {
      this.hurt('monsterLife', 5, 10, special, 'Player');
      if (this.monsterLife > 0) {
        this.hurt('playerLife', 7, 12, false, 'Monster');
      }
    },
    hurt(target, min, max, special, source) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);

      // evitando life menor que 0
      this[target] = Math.max(this[target] - hurt, 0);

      this.registerLog(
        `The ${source} has attacked the ${
          target === 'monsterLife' ? 'Monster' : 'Player'
        } with ${hurt} points.`,
        source?.toLowerCase()
      );
    },
    healAndHurt() {
      this.heal(10, 15);
      this.hurt('playerLife', 7, 12, false, 'Monster');
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);

      this.registerLog(`The Player won ${heal} points of life.`, 'player');
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
      console.log(this.logs);
    },
  },
  watch: {
    hasResult(running) {
      if (running) this.gameStarted = false;
    },
  },
});
