<template>
    <header>
        <router-link to="/" id="LogoWrapper">
            <img src="../../assets/logo.webp" alt="이미지">
            <div>나무</div>
        </router-link>
        <div id="SearchBarWapper">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            <input type="text" placeholder="Search">
        </div>
        <div class="LogButton" id="LoginButton" @click="openLoginModal" v-if="!isLogin">
            Log In
        </div>
        <div class="LogButton" id="LogoutButton" v-else>
            My Icon
        </div>
        <LoginModal v-if="isLoginModalVisible" @close="closeLoginModal"/>
    </header>
</template>

<script>
import LoginModal from '../account/LoginModal.vue'

    export default{
        name: 'AppHeader',
        data() {
            return {
                isLogin: false,
                isLoginModalVisible: false
            }
        },
        methods: {
            openLoginModal() {
                this.isLoginModalVisible = true;
            },
            closeLoginModal() {
                this.isLoginModalVisible = false;
            }
        },
        components: {
            LoginModal: LoginModal
        }
    }
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 100%;
    position: relative;
    padding: 0 15px;
}
body {
    margin: 0;
}

#LogoWrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-decoration: none;
}
#LogoWrapper img {
    width: 40px;
    height: 40px;
}
#LogoWrapper div {
    font-size: 40px;
    font-weight: bold;
    color: gray;
}

#SearchBarWapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: 500px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
}
#SearchBarWapper {
    padding : 0 10px;
}
#SearchBarWapper input {
    flex: 1;
    height: 30px;
    padding: 5px 5px;
    margin-right:10px;
    border: none;
    outline: none;
}

.LogButton {
    padding: 8px 16px;
    background-color: rgb(94,111,75);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.LogButton:hover {
    background-color: rgb(74, 87, 59);
}
</style>
