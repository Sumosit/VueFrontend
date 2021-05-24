<template>
    <div :key="tick"
         @mousedown="isMouseDown = true"
         @mouseleave="isMouseDown = false"
         @mouseup="isMouseDown = false"
         class="game-field">
        <div :key="x"
             class="life-container content-center"
             v-for="(row, x) in map">
            <Cell :isAlive="col"
                  :isMouseDown="isMouseDown"
                  :key="y"
                  :x="x"
                  :y="y"
                  class="life-item"
                  v-for="(col, y) in row"
                  v-on:CellToLife="onCellClick"/>
        </div>
    </div>
</template>

<script>
    import Cell from "../games/Cell"

    export default {
        name: "Life",
        components: {
            Cell
        },
        data() {
            return {
                height: 40,
                width: 50,
                map: [[]],
                tick: 0,
                isMouseDown: false,
                choice: 'start'
            }
        },
        mounted() {
            this.setupMap();
        },
        methods: {
            setupMap() {
                for (let i = 0; i < this.height; i++) {
                    this.map.push([]);
                    for (let j = 0; j < this.width; j++) {
                        this.map[i].push(false);
                    }
                }
            },
            onCellClick(x, y) {
                if (this.map[x][y] === true) {
                    let temp = this.map[x][y];
                    let neighbours = this.countNeighbours(x, y);
                    if (neighbours < 2) {
                        te
                    }
                }
                this.tick++;
            },
            countNeighbours(i, j) {
                let count = 0;
                if (this.map[i][j]) {
                    if (i <= this.height && j <= this.width) {
                        for (let k = -1; k < 2; k++) {
                            for (let l = -1; l < 2; l++) {
                                if (this.map[i + k][j + l]) {
                                    count++;
                                }
                            }
                        }
                    }
                }
                console.log(count);
                return count;
            },
            update: function () {
                let temp = this.map;
                for (let i = 1; i < this.height - 1; i++) {
                    for (let j = 1; j < this.width - 1; j++) {
                        let neighbours = this.countNeighbours(i, j);
                    }
                }
            },
        },
        watch: {
            choice(value) {
                if (value === 'start') {
                    this.update();
                    this.tick++;
                }
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/games-life.css';
</style>
