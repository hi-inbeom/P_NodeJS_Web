<template lang="">
    <form>
        <!-- 이메일 입력 -->
        <div v-if="joinProcess==0" class="processEmailWrapper">
            <div class="join-input-box">
                <input id="email"
                        type="text"
                        name="email"
                        placeholder="이메일"
                        autocomplete="off"
                        v-model="email"
                        @blur="this.emailWarning = !this.email.includes('@');">
                <label for="email">이메일</label>
                <span v-if="emailWarning" class="join-warning-text">올바른 이메일의 형태가 아닙니다.</span>
            </div>
            <input class="account-submit-btn"
                    type="submit"
                    value="이메일 인증"
                    :disabled="emailWarning || !email"
                    @click="joinProcess=1">
        </div>
        <!-- 이메일 검증 -->
        <div v-if="joinProcess==1" class="checkEmailCode">
            <div class="join-input-box">
                <input id="email-code"
                        type="text"
                        placeholder="인증번호"
                        autocomplete="off">
                <label for="email-code">인증번호</label>
            </div>
            <input class="account-submit-btn"
                    type="submit"
                    value="계정 생성"
                    @click="joinProcess=2">
        </div>
        <!-- 계정 생성성 -->
        <div v-if="joinProcess==2" class="processJoinWrapper">
            <!-- 입력값-아이디 -->
            <div class="join-input-box">
                <input id="userid"
                        type="text"
                        name="userid"
                        v-model="userid"
                        placeholder="아이디"
                        autocomplete="off"
                        @blur="usedIdWarning">
                <label for="email">아이디</label>
                <span v-if="usedId" class="join-warning-text">사용 중인 계정입니다.</span>
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
        </div>
    </form>
</template>
<script>
export default {
    name: 'JoinSite',
    data () {
        return {
            joinProcess: 0,
            email: '',
            emailWarning: false,
            userid: '',
            usedId: false,
            userpassword: '',
            checkSamePassword: '',
            userpasswordWarning: false,
            passwordWarning: false,
        }
    },
    methods: {
        usedIdWarning() {
            // DB연결하여 아이디 중복 체크
            this.usedId = true;
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
</style>