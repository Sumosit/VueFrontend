<template>
    <div class="progress-bar">
        <transition @after-appear="enter" @before-appear="beforeEnter" appear>
            <div class="tracker-bar">{{percentage}}%</div>
            <div class="progress-bar-status"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "progressBar",
        props: {
            percentage: Number,
            label: String,
        },
        methods: {
            beforeEnter (el) {
                el.style.width = `${this.$store.getters.getStartProgress}%`;
                el.style.height = 200;
            },
            enter (el) {
                el.style.width = `${this.percentage}%`;
                el.style.transition = `width 0.3s linear`;
                this.$store.commit('updateStartProgress', this.percentage);
            }
        }
    }
</script>

<style scoped>
    .progress-bar-status {
        margin: auto;
    }
    .progress-bar {
        height: 10px;
    }
    .background-bar {
         width: 100%;
     }
    .tracker-bar {
        background: #008000;
        height: 30px;
        width: 0;
        transition: width 0.5s linear;
    }
</style>
