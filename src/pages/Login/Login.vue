<template>
    <div class = "login__wrapper">
        <div class="bg"></div>
        <Row>
            <Col :span = "8" :push="8">
                <Card class="login-buttons">
                    <p slot="title">
                        <Icon type="logo-vimeo" />
                        登录**管理系统
                    </p>
                    <Form :model="loginForm" :label-width="80">
                        <FormItem label="账户">
                            <Input v-model="loginForm.username"></Input>
                        </FormItem>
                        <FormItem label="密码">
                            <Input v-model="loginForm.password" type="password"></Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="login">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            loginForm:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        login () {
            this.$http.post('/login', {
                    ...this.loginForm
                })
                .then(res => {
                    console.log(res);
                    this.$router.push('/');
                    window.sessionStorage.setItem('user', JSON.stringify(res.data));
                }).catch(err => {

                })
        }
    }
}
</script>

<style>
    body {
        height: 100%;   
    }
    .login__wrapper {
        height: 100%;
    }
    .login-buttons {
        margin-top:200px;
    }
    .bg {
        background: url("../../assets/bg.jpg");
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        z-index: -10;
    }
</style>