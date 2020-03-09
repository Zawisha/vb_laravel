<template>
    <div>
    <div class="container logemail">
        <div class="row newpassword col-lg-12 d-flex justify-content-center col-md-12 col-sm-12 col-12">
            <div class="col-6 newpasswordform col-md-8 col-12">
                <div class="col-12 newpassubmit d-flex justify-content-center">
                </div>
            </div>
            <div class=" newpasswordform col-md-8 col-12 ">
                <form action="/log" method="POST">
                    <div class="newpass col-sm-12 d-sm-flex ">
                        <div class="col-12 col-sm-6 newpass1">Введите логин или email</div>
                        <div class="col-12 col-sm-6 newpass2"><input class="input" type="text" name="email"></div>
                    </div>
                    <div class=" newpass col-sm-12 d-sm-flex">
                        <div class="col-12 col-sm-6 newpass1">Введите пароль</div>
                        <div class="col-12 col-sm-6 newpass2"><input class="input" type="password" name="password"></div>
                    </div>
                    <div class="col-12 newpassubmit d-flex justify-content-center">
                        <button  type="submit">Залогиниться</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="container ">
        <div class="row newpassword col-lg-12 d-flex justify-content-center col-md-12 col-sm-12 col-12">
            <div class="col-6 newpasswordform col-md-8 col-12">
                <div class="col-12 newpassubmit d-flex justify-content-center">
                   <a href="">
                    Войти через Вконтакте<img src="images/vk.png" alt="vk" class="vk"></a>
                </div>
            </div>
        </div>
    </div>

    <div class="container ">
        <div class="row newpassword col-lg-12 d-flex justify-content-center col-md-12 col-sm-12 col-12">
            <div class="col-6 newpasswordform col-md-8 col-12">
                <div class="col-12 newpassubmit d-flex justify-content-center">
                    <router-link  :to="{ name: 'reset_password' }">
                        Восстановить пароль
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'test',
                password: 'test2',
                email: 'test2@email.com',

            }
        },
        mounted() {
             this.test_login();
        },
        created() {
        },
        methods: {

            test_login()
            {
                axios
                    .post('/login',{
                        password:this.password,
                        email:this.email,
                    })
                    .then(({ data }) => (
                        auth.login(data.token, data.user)
                        )
                    )
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            }

        }
    }
</script>
