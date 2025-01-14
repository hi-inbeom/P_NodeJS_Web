<template lang="">
    <!-- 이메일 입력 -->
    <div v-if="joinProcess==0" class="processEmailWrapper">
        <div class="join-input-box">
            <input id="usermail"
                    type="text"
                    name="usermail"
                    placeholder="이메일"
                    autocomplete="off"
                    v-model="usermail"
                    @blur="this.emailWarning = !this.usermail.includes('@');">
            <label for="usermail">이메일</label>
            <span v-if="emailWarning" class="join-warning-text">올바른 이메일의 형태가 아닙니다.</span>
        </div>
        <div class="account-next-btn"
            :disabled="emailWarning || !usermail"
            @click="handleFirstProcess">이메일 인증
        </div>
    </div>
    <!-- 이메일 검증 -->
    <div v-if="joinProcess==1" class="processVerifyCodeWrapper">
        <div class="join-input-box">
            <input id="email-code"
                    type="text"
                    placeholder="인증번호"
                    v-model="inputCode"
                    autocomplete="off">
            <label for="email-code">인증번호</label>
        </div>
        <span v-if="!verifyWaring" class="join-warning-text">{{ verifyCode }}</span>
        <span v-if="verifyWaring" class="join-warning-text">인증번호가 다릅니다. {{ verifyCode }}</span>
        <div class="account-next-btn"
            @click="handleSecondProcess">계정생성
        </div>
    </div>
    <!-- 계정 생성 -->
    <form v-if="joinProcess==2" class="processJoinWrapper">
        <!-- 입력값-아이디 -->
        <div class="join-input-box">
            <input id="userid"
                    type="text"
                    name="userid"
                    v-model="userid"
                    placeholder="아이디"
                    autocomplete="off"
                    @blur="handleUsedIdWarning">
            <label for="email">아이디</label>
            <span v-if="usedIdWarning==1" class="join-warning-text">사용 중인 계정입니다.</span>
            <span v-if="usedIdWarning==2" class="join-warning-text">사용 가능한 계정입니다.</span>
        </div>
        <!-- 입력값-비밀번호 -->
        <div class="join-input-box">
            <input
                id="userpassword"
                type="password"
                name="userpassword"
                v-model="userpassword"
                placeholder="비밀번호"
                autocomplete="off"
                @blur="checkPasswordLength"
            />
            <label for="userpassword">비밀번호-6글자 이상</label>
            <span v-if="userpasswordWarning" class="join-warning-text">비밀번호는 6글자 이상이어야 합니다.</span>
        </div>
        <div class="join-input-box">
            <input
                id="checkSamePassword"
                type="password"
                name="checkSamePassword"
                v-model="checkSamePassword"
                @blur="checkPasswordMatch"
                placeholder="비밀번호 확인"
                autocomplete="off"
            />
            <label for="checkSamePassword">비밀번호 확인</label>
            <span v-if="passwordWarning" class="join-warning-text">비밀번호가 일치하지 않습니다.</span>
        </div>
        <!-- 가입 요청 -->
        <input class="account-submit-btn"
                type="submit"
                value="회원가입"
                :disabled="!useridWarning || !userpasswordWarning">
    </form>
</template>
<script>
import axios from 'axios';

export default {
    name: 'JoinSite',
    data () {
        return {
            joinProcess: 0,

            usermail: '',
            verifyCode: "",
            inputCode: "",

            userid: '',
            userpassword: '',
            checkSamePassword: '',

            emailWarning: false,
            userpasswordWarning: false,
            passwordWarning: false,
            verifyWaring: false,
            usedIdWarning: 0
        }
    },
    methods: {
        handleFirstProcess() {
            this.joinProcess=1;
            this.verifyCode = Math.floor(1000 + Math.random() * 9000).toString();
            axios.post("http://localhost:8080/auth/sendCode", {
                usermail: this.usermail, // 요청 데이터
                verifyCode: this.verifyCode
            });
        },
        handleSecondProcess() {
            if (this.verifyCode === this.inputCode) {
                this.joinProcess=2;
                this.verifyWaring = false;
            } else {
                this.verifyWaring = true;
            }
        },
        async handleUsedIdWarning() {
            // DB연결하여 아이디 중복 체크
            try {    
                const response = await axios.post("http://localhost:8080/account/checkUserId", {
                    userid: this.userid
                })
                if(!response.ok) {
                    throw new Error('Failed fetch post')
                } else {
                    console.log(response)
                    this.usedIdWarning = 2;
                }
            } catch (err) {
                console.log('Error :',err.message);
                this.usedIdWarning = 1;
            }
        },
        checkPasswordLength() {
            this.userpasswordWarning = this.userpassword.length < 6;
        },
        checkPasswordMatch() {
            this.passwordWarning = this.userpassword !== this.checkSamePassword;
        }
    }
}
</script>
<style>
    .join-input-box{
        position:relative;
        margin:10px 0;
    }
    .join-input-box > input{
        display:flex;
        background: rgb(218, 218, 218);
        border:none;
        border-radius: 15px;
        padding:16px 3px 8px 12px;
        font-size:14pt;
        width:95%;
    }
    .join-warning-text{
        color: red;
        font-size: 12pt;
        margin-top: 5px;
    }
    .account-disable-btn{
        background-color: #cccccc;
        color: #888888;
        border: 1px solid #cccccc;
        cursor: not-allowed;
    }
    .account-next-btn{
        display: block;
        background: rgb(94,111,75);
        color:white;
        border:none;
        border-radius: 15px;
        padding:12px;
        width:93%;
        margin-top:10px;
        font-size:18pt;
        font-weight: bold;
        cursor:pointer;
    }
</style>