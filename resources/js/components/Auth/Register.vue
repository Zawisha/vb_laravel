<template>
    <div>
        <div class="container  logemail">
            <div class="row newpassword col-lg-12 d-flex justify-content-center col-md-12 col-sm-12 col-12">

                <div class="col-6 newpasswordform col-md-8 col-12">
                    <div class="col-12 newpassubmit d-flex justify-content-center">

                    </div>
                </div>


                <div class="newpasswordform col-md-8 col-12">
                    <form action="/register" method="POST">
                        <div class="newpass col-sm-12 d-sm-flex ">
                            <div class="col-12 col-sm-6 newpass1">Введите email</div>
                            <div class="col-12 col-sm-6 newpass2"><input class="input" type="email" name="email"></div>
                        </div>

                        <div class=" newpass col-sm-12 d-sm-flex">
                            <div class="col-12 col-sm-6 newpass1">Введите никнейм</div>
                            <div class="col-12 col-sm-6 newpass2"><input class="input" type="text" name="username"></div>
                        </div>

                        <div class=" newpass col-sm-12 d-sm-flex">
                            <div class="col-12 col-sm-6 newpass1">Введите пароль</div>
                            <div class="col-12 col-sm-6 newpass2"><input class="input" type="password" name="password"></div>
                        </div>

                        <div class=" newpass col-sm-12 d-sm-flex">
                            <div class="col-12 col-sm-6 newpass1">Подтвердите пароль</div>
                            <div class="col-12 col-sm-6 newpass2"> <input class="input" type="password" name="password_confirmation"></div>
                        </div>

                        <div class=" newpass col-sm-12 d-sm-flex ">
                            <div class="col-12 col-sm-6 newpass1">Мобильный телефон</div>
                            <div class="col-12 col-sm-6 newpass2">
                                <input id="phone-number" name="phone-number" type="text" placeholder="+XXX(XX)-XXX-XX-XX">
                            </div>
                        </div>

                        <div class="col-12 newpassubmit d-flex justify-content-center ">
                            <button  type="submit">Зарегистрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="container ">
            <div class="row newpassword col-lg-12 d-flex justify-content-center col-md-12 col-sm-12 col-12">

                <div class="col-6 newpasswordform col-md-8 col-12">
                    <div class="col-12 newpassubmit d-flex justify-content-center">
                        Войти через Вконтакте<img src="images/vk.png" alt="vk" class="vk">
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>
