<template>
    <div class="modal-backdrop">
      <div class="modal-content">
        <button class="close-btn" @click.self="closeModal">X</button>
        <div class="content-area">
            <h1>Login</h1>
            <p>
                절차를 진행함에 있어
                <a href="/">이용약관</a>
                및
                <a href="/">개인정보 수집 및 이용</a>
                을 이해하고 동의하였음을 인정합니다.
            </p>
            <EmailLogin></EmailLogin>
            <SiteLogin @showJoinSite="handleShowJoinSite" v-if="!showJoinSite"></SiteLogin>
            <JoinSite v-else></JoinSite>
        </div>
      </div>
    </div>
</template>

<script>
import EmailLogin from './EmailLogin.vue';
import SiteLogin from './SiteLogin.vue';
import JoinSite from './JoinSite.vue';
export default {
    name: 'LoginModal',
    components: {
        EmailLogin,
        SiteLogin,
        JoinSite
    },
    // 컴포넌트 맨처음 들어왔을 때 자동으로 열리는 것
    data() {
        return {
            showJoinSite: false
        }
    },
    props: {
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleShowJoinSite(value) {
            this.showJoinSite = value;
        }
    }
}
</script>

<style>
    .content-area h1 {
        text-align: left;
        margin-bottom: 5px;
    }
    .content-area p {
        text-align: left;
        margin-top: 0px;
    }
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        background: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 600px;
    }

    .close-btn {
        float:right;
        background: none;
        border: none;
        font-size:25px;
        cursor:pointer;
    }
    .content-area {
        margin-left:35px;
        width:90%;
    }
</style>