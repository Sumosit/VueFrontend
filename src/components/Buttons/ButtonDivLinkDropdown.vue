<template>
    <div>
        <router-link
                :class="{'nav-ls-link-dp nav-ls-link-dp > a': !buttonHover,
                  'nav-ls-link-mouseleave-dp': buttonHover}"
                :to="NavLeftSideButton.link"
                @mouseleave="buttonHover = true, dropdown = false"
                @mouseover="buttonHover = false, dropdown = true"
                class="nav-ls-link-dp"
                tag="div"
        >
            {{NavLeftSideButton.name}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ButtonDivLinkDropdown",
        props: ['NavLeftSideButton'],
        data() {
            return {
                buttonHover: false
            }
        }
    }
</script>

<style scoped>
    .nav-ls-link-dp {
        cursor: pointer;
        position: relative;
        padding: 10px 15px;
    }

    .nav-ls-link-dp:hover, .nav-ls-link-dp:hover > a {
        transition: all 0.5s;
        color: black;
    }

    .nav-ls-link-dp:hover {
        background-color: #f6f6f6;
    }

    .nav-ls-link-mouseleave-dp {
        transition: all 0.5s;
        color: black;
        background-color: #3d3d3d;
    }

    .nav-ls-link {
        background: #686868;
        position: relative;
        padding: 10px 15px;
    }
</style>
