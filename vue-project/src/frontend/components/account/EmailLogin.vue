<template >
    <!-- 챌린지 목표로 설정 -->
    <div class="kind-login">
        <div class="login-wrapper">
            <img src="../../assets/login-phone.png" alt="">
            <div>Phone</div>
        </div>
        <div class="login-wrapper">
            <img src="../../assets/login-google.png" alt="">
            <div>Google</div>
        </div>
    </div>
    <div id="boundary">또는</div>
</template>

<script>
    export default {
        name: 'EmailLogin'
    }
</script>

<style>
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
</style>