<template>
    <div class="panel panel-default">
        <div class="panel-heading">

            <nav>
                <ul class="list-inline">

                </ul>
            </nav>
        </div>
        <div class="panel-body">
            Hello my friend LOGIN
<!--            <router-view></router-view>-->
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
