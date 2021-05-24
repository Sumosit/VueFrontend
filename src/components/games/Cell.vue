<template>
    <div
            :class="{
        'life-on': thisIsAlive,
        'life-off': !thisIsAlive
        }"
            v-on:mousedown="changeLife(true)"
            v-on:mouseover="changeLife(isMouseDown)"
            >
    </div>
</template>

<script>
    export default {
        name: "Cell",
        props: ['isAlive', 'x', 'y', 'isMouseDown'],
        data() {
            return {
                thisIsAlive: JSON.parse(this.isAlive)
            }
        },
        methods: {
            changeLife: function(bool) {
                if (bool) {
                    this.thisIsAlive = !this.thisIsAlive;
                    // this.$emit('CellToLife', this.x, this.y);
                }
            }
        }
    }
</script>

<style scoped>

</style>
