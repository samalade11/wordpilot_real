<template>
    <div class="my-navbar">
        <div v-if="showsidebar" class="side-bar">
            <div class="exit-btn">
                <i class='bx bx-x' @click="hidesidebar"></i>
            </div>
            <div class="sidenav-img">
                <img src="../assets/mainlogo1.png" alt="logo">
            </div>
            <hr class="sidenav-hr">
            <div class="sidenav-list " @click="test = 1" :class="test == 1 ? 'active' : '' ">
                <i class='bx bxs-dashboard'></i>
                <p>Dashboard</p>
            </div>
            <div class="sidenav-list" @click="test = 2" :class="test == 2 ? 'active' : '' ">
                <i class='bx bx-folder-plus' ></i>
                <p>Projects</p>
            </div>
            <div class="sidenav-list" @click="test = 3" :class="test == 3 ? 'active' : '' ">
                <i class="fa-regular fa-calendar-days"></i>
                <p>Schedular</p>
            </div>
            <div class="sidenav-list" @click="test = 4" :class="test == 4 ? 'active' : '' ">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <p>Content Wizard</p>
            </div>
            <div class="sidenav-list" @click="test = 5" :class="test == 5 ? 'active' : '' ">
                <i class='bx bxs-file-doc' ></i>
                <p>Documents</p>
            </div>
            <div class="sidenav-list">
                <i class='bx bxs-log-out-circle'></i>
                <p>Log Out</p>
            </div>
        </div>
        <div class="main-content">
            <nav class="nav-bar">
                <div class="nav-part1">
                    <button class="sidenav-btn" @click="displaysidebar">
                        <i class='bx bx-menu-alt-left'></i>
                    </button>

                    <select name="" id="">
                        <option value="">My Workspace</option>
                        <option value="">My Workspace</option>
                        <option value="">My Workspace</option>
                    </select>
                </div>

                <div class="nav-part2">
                    <div class="custom-search">
                        <input type="search" name="" id="" placeholder="Search here">
                        <div>
                            <p>search</p>
                            <i class='bx bx-search-alt-2' ></i>
                        </div>
                    </div>

                    <i class='bx bx-bell bell-icon'></i>
                    <i class='bx bx-info-circle info-icon'></i>
                    <div class="user-corner">
                        <img src="../assets/userpic.jpg" alt="">
                        <div>
                            <p>Welcome Grace</p>
                            <span>Admin</span>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- children component here -->
            <div class="">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const showsidebar = ref(true)
const test = ref(2)

const displaysidebar = () =>{
    showsidebar.value = !showsidebar.value
}

const hidesidebar = () =>{
    showsidebar.value = false
}
</script>
<style lang="less" scoped>
    @import "../assets/styles.less";

    
</style>