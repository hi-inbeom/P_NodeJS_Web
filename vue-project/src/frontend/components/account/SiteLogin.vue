<template lang="">
    <form action="">
        <div class="login-input-box">
            <input id="userid" type="text" name="userid" placeholder="아이디" autocomplete="off">
            <label for="userid">아이디</label>
        </div>

        <div class="login-input-box">
            <input id="userpassword" type="userpassword" name="userpassword" placeholder="비밀번호" autocomplete="off">
            <label for="userpassword">비밀번호</label>
        </div>
        <div class="help-box">
            <div class="notice-login"> 비밀번호 찾기 </div>
            <div class="notice-login" @click="showJoinSite"> 회원가입 </div>
        </div>
        <input class="account-submit-btn" type="submit" value="로그인">
    </form>
</template>
<script>
export default {
    name: 'SiteLogin',
    methods: {
        showJoinSite() {
            this.$emit('showJoinSite', true);
        }
    }
}
</script>

<style>
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
    .account-submit-btn{
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