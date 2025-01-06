<template >
    <div class="modal-backdrop" v-if="visible" @click.self="closeModal">
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
            <!-- 챌린지 목표로 설정정 -->
            <!-- <div class="kind-login">
                <div class="login-wrapper">
                    <img src="../../assets/login-phone.png" alt="">
                    <div>Phone</div>
                </div>
                <div class="login-wrapper">
                    <img src="../../assets/login-google.png" alt="">
                    <div>Google</div>
                </div>
            </div>
            <div id="boundary">또는</div> -->

            <form action="">
                <div class="login-input-box">
                    <input id="username" type="text" name="username" placeholder="아이디" autocomplete="off">
                    <label for="username">아이디</label>
                </div>

                <div class="login-input-box">
                    <input id="password" type="password" name="password" placeholder="비밀번호" autocomplete="off">
                    <label for="password">비밀번호</label>
                </div>
                <div class="help-box">
                    <div class="notice-login"> 비밀번호 찾기 </div>
                    <div class="notice-login"> 회원가입 </div>
                </div>
                <input class="login-btn" type="submit" value="로그인">
            </form>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginModal',
        props: {
            visible: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            closeModal() {
                this.$emit('close');
            }
        }
    }
</script>

<style>
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
    .content-area h1 {
        text-align: left;
        margin-bottom: 5px;
    }
    .content-area p {
        text-align: left;
        margin-top: 0px;
    }

    .login-wrapper {
        display:flex;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 12px;
        align-items: center;
        border: none;
        border-radius: 15px;
        background: rgb(218, 218, 218);
        color: black;
        cursor: pointer;
        width:93%;
    }
    .login-wrapper div {
        flex:1;
        text-align: center;
        font-weight: bold;
    }
    .login-wrapper img {
        width: 24px;
        height: 24px;
    } 

    #boundary {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        display:flex;
        align-items:center;
        color:rgba(0,0,0,0.35);
        font-size:14px;
        margin:8px 0px;
    }
    #boundary::before{
        content:"";
        flex-grow:1;
        margin-right: 15px;
        background:rgba(0,0,0,0.35);
        height:1px;
        font-size:0px;
        line-height: 0px;
    }
    #boundary::after {
        content:"";
        flex-grow:1;
        margin-left: 15px;
        margin-right: 15px;
        background:rgba(0,0,0,0.35);
        height:1px;
        font-size:0px;
        line-height: 0px;
    }

    
    .login-input-box{
        position:relative;
        margin:10px 0;
    }
    .login-input-box > input{
        display:flex;
        background: rgb(218, 218, 218);
        border:none;
        border-radius: 15px;
        padding:16px 3px 8px 12px;
        font-size:14pt;
        width:95%;
    }
    input::placeholder{
        color:transparent;
    }
    input:placeholder-shown + label{
        color:#aaa;
        font-size:12pt;
        top:15px;
        left:15px;
    }
    input:focus + label, label{
        color:#8aa1a1;
        font-size:10pt;
        pointer-events: none;
        position: absolute;
        left:12px;
        top:0px;
        transition: all 0.2s ease ;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
    }
    input:focus, input:not(:placeholder-shown){
        border-bottom: solid 1px #8aa1a1;
        outline:none;
    }

    .help-box{
        display:flex;
        justify-content: space-between;
        margin-top:10px;
        color:rgba(0,0,0,0.35);
        font-size:14px;
        cursor:pointer;
        width:98%;
    }
    .login-btn{
        display: block;
        background: rgb(94,111,75);
        color:white;
        border:none;
        border-radius: 15px;
        padding:12px;
        width:98%;
        margin-top:10px;
        font-size:18pt;
        font-weight: bold;
        cursor:pointer;
    }
</style>