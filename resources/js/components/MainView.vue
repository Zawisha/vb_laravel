<template>
    <div class="panel panel-default">
        <div class="panel-heading">

            <nav>
                <ul class="list-inline">

                </ul>
            </nav>
        </div>
        <div class="panel-body">
            Hello my friend
        </div>
        <div v-if="authenticated && user">
            <p>Hello, {{ user.name }}</p>
            </div>
            <router-link to="/logout">Logout</router-link>
        <div>
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'test2',
                password: 'test2',
                email: 'test2@email.com',
                authenticated:false,
                user:''
            }
        },
        mounted() {
            console.log(auth.user);
           //  this.test_register();
            Event.$on('userLoggedIn', () => {
                this.authenticated = true;
                this.user = auth.user;
                console.log('YEap')
            });
        },
        created() {
        },
        methods: {

            test_register()
            {
                axios
                    .post('/register',{
                        name:this.name,
                        password:this.password,
                        email:this.email,
                    })
                    .then(({ data }) => (
                           console.log(data)
                        )
                    );
            }

        }
    }
</script>
